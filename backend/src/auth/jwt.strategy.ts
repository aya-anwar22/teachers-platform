import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (req && req.headers && req.headers['authorization']) {
          console.log('TOKEN RECEIVED:', req.headers['authorization']);
          return req.headers['authorization']; // لو بدون Bearer
        }
        return null;
      },
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'MY_SUPER_SECRET_KEY',
    });
  }

  async validate(payload: any) {
    console.log('PAYLOAD:', payload);
    return { email: payload.email, role: payload.role };
  }
}
