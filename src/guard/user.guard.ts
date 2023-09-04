import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let token = request.headers.authorization;
    if (!token) {
      throw new UnauthorizedException("AUTH_TOKEN_REQUIRED");
    }
    try {
      if (token.startsWith("Bearer")) {
        token = token.split(" ");
        token = token[1];
      }
      const payload = await this.jwtService.verifyAsync(token, {
        secret: "secretKey",
      });
      if (payload) {
        request.body.user_id = payload.user_id;
        request.is_admin = payload.is_admin;
      }
      else throw new UnauthorizedException("TOKEN_MALFORMED");
      request["user"] = payload;
    } catch {
      throw new UnauthorizedException("TOKEN_EXPIRED");
    }
    return true;
  }
}
