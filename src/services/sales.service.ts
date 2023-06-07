import AddressService from "./address.service";
import PhoneService from "./phone.service";
import ProductService from "./product.service";
import UserService from "./user.service";
import Product from "../database/models/product.model";
import Sale from "../database/models/sales.model";
import axios from "axios";
import CustomError from "../utils/CustomError";
import User from "../database/models/users.model";
import Address from "../database/models/address.model";
import JwtToken from "../utils/JwtToken";
import Shipping from "../database/models/shippgins.model";
import EmailSender from "../utils/EmailSender";
import ShippingService from "./shipping.service";

class SalesService {
  private baseUrl: string;
  private pagSeguroToken: string | undefined;

  constructor() {
    this.baseUrl = process.env.BASE_URL || "http://localhost:3001";
    this.pagSeguroToken = process.env.PAGSEGURO_TOKEN;
  }

  public async getByUserId(id: number) {
    const result = await Sale.findAll({
      where: { userId: id },
      include: {
        model: Product,
        as: "products",
      },
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }

  public async getByProductUserId(id: number) {
    const result = await Sale.findAll({
      include: [
        {
          model: Product,
          as: "products",
          where: { userId: id },
        },
        {
          model: User,
          as: "users",
        },
        {
          model: Shipping,
          as: "shipping",
        },
      ],
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }

  public async getByProductId(id: number) {
    const sale = await Sale.findOne({
      where: { productId: id },
      include: [
        {
          model: Product,
          as: "products",
        },
        {
          model: User,
          as: "users",
        },
        {
          model: Shipping,
          as: "shipping",
        },
      ],
    });
    if (!sale) new CustomError("Not Found", 404);
    const address = await Address.findOne({
      where: { userId: sale?.userId },
    });
    if (!address) new CustomError("Not Found", 404);
    const result = { ...sale?.dataValues, ...address?.dataValues };
    return result;
  }

  public async create(userId: number, productId: number, shippingId: number) {
    const result = await Sale.create({
      userId: userId,
      productId: productId,
      status: "paid",
      shippingId: shippingId,
    });
    const product = await new ProductService().getById(productId);
    const userClient = await new UserService().getUserById(userId);
    const userSeller = await new UserService().getUserById(product.userId);
    const shipping = await new ShippingService().getById(shippingId);
    const emailClient = new EmailSender(userClient.email, userClient.firstName);
    emailClient.sendReceipt(
      product.title,
      "1",
      (product.price + shipping.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    const emailSeller = new EmailSender(userSeller.email, userClient.firstName);
    emailSeller.sendNotification(
      product.title,
      "1",
      (product.price + shipping.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    return result;
  }

  public async pixGenerate(
    productId: number,
    token: string,
    priceShipping: number
  ) {
    const id = JwtToken.getJwtId(token);
    const product = await new ProductService().getById(productId);
    const user = await new UserService().getUserById(id);
    const address = await new AddressService().getByUserId(user.id);
    const phone = await new PhoneService().getByUserId(user.id);

    const data = {
      reference_id: `refid-${product.id * user.id}`,
      customer: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        tax_id: user.cpf,
        phones: [
          {
            country: "55",
            area: phone.area,
            number: phone.number,
            type: phone.type,
          },
        ],
      },
      items: [
        {
          name: product.title,
          quantity: 1,
          unit_amount: (priceShipping + product.price) * 100,
        },
      ],
      qr_codes: [
        {
          amount: {
            value: (priceShipping + product.price) * 100,
          },
          expiration_date: "2023-09-09T20:15:59-03:00",
        },
      ],
      shipping: {
        address: {
          street: address.street,
          number: address.number,
          complement: address.complement || address.street,
          locality: address.locality,
          city: address.city,
          region_code: address.state,
          country: address.country,
          postal_code: address.cep,
        },
      },
      notification_urls: [`${this.baseUrl}/sales/notification`],
    };

    const result = await axios.post("https://api.pagseguro.com/orders", data, {
      headers: {
        // Authorization: "63A51089E29049329DF87FC743DB1522",
        Authorization: this.pagSeguroToken,
        "Content-Type": "application/json",
      },
    });

    return result.data;
  }

  public async statusPix(orderId: string) {
    const result = await axios.get(
      `https://api.pagseguro.com/orders/${orderId}`,
      {
        headers: {
          // 'Authorization': '63A51089E29049329DF87FC743DB1522',
          Authorization: this.pagSeguroToken,
          "Content-Type": "application/json",
        },
      }
    );
    return result.data;
  }
}

export default SalesService;
