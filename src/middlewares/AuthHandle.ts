import { Request, Response, NextFunction } from "express";
import JwtToken from "../utils/JwtToken";

class AuthHandle {
  public static auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (authorization) {
      try {
        res.locals.jwt = JwtToken.verifyToken(authorization);
        return next();
      } catch (err) {
        return res.sendStatus(403);
      }
    }
    res.sendStatus(403);
  }
}

export default AuthHandle;
