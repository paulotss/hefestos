import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../database/models/users.model";
import CustomError from "../utils/CustomError";

class JwtToken {
  private _token: string;
  private secret: string;

  constructor(payload: User) {
    this.secret = process.env.JWT_SECRET || 'M4secretPD'
    this._token = jwt.sign({ data: payload }, this.secret, {
      expiresIn: "1d"
    });
  }

  public get token() {
    return this._token;
  }

  public static verifyToken(token: string) {
    const result = jwt.verify(token, process.env.JWT_SECRET || 'M4secretPD');
    return result;
  }

  public static getJwtId(token: string) {
    const jwt = JwtToken.verifyToken(token);
    if (typeof jwt !== "string") {
      const { id } = jwt.data;
      return Number(id);
    }
    throw new CustomError("Invalid token", 403);
  }
}

export default JwtToken;