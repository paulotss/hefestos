import jwt from "jsonwebtoken";
import ILogin from "../interfaces/ILogin";

class JwtToken {
  private _token: string;
  private secret: string;

  constructor(payload: ILogin) {
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