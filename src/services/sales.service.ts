import AddressService from "./address.service";
import PhoneService from "./phone.service";
import ProductService from "./product.service";
import UserService from "./user.service";
import axios from "axios";

class SalesService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3001';
  }

  public async pixGenerate(productId: number, token: string) {
    const product = await new ProductService().getById(productId);
    const user = await new UserService().getUserById(token);
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
            type: phone.type
          }
        ]
      },
      items: [
        {
          name: product.title,
          quantity: product.amount,
          unit_amount: product.price
        }
      ],
      qr_codes: [
          {
              amount: {
                  value: product.price
              },
              expiration_date: "2023-09-09T20:15:59-03:00"
          }
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
              postal_code: address.cep
          }
      },
      notification_urls: [
        `${this.baseUrl}/sales/notification`
      ]
    }

    const result = await axios.post(
      'https://sandbox.api.pagseguro.com/orders',
      data,
      {
        headers: { 
          'Authorization': '63A51089E29049329DF87FC743DB1522',
          'Content-Type': 'application/json'
        }
      }
    );

    return result.data;
  }
}

export default SalesService;