import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../database/models/users.model";

class JwtToken {
  private _token: string;
  private secret: string;

  constructor(payload: User) {
    this.secret = 'shhhh'
    this._token = jwt.sign({ data: payload }, this.secret, {
      expiresIn: "1h"
    });
  }

  public get token() {
    return this._token;
  }

  public static verifyToken(token: string) {
    const result = jwt.verify(token, 'shhhh');
    return result;
  }
}

export default JwtToken;