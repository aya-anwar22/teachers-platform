import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'MY_SUPER_SECRET_KEY',
    });
    return { accessToken };
  }

  validateUser(email: string, password: string) {
    // هنا هارد كود
    if (email === 'admin@example.com' && password === 'admin123') {
      return { email: email, role: 'admin' };
    }
    return null;
  }
}
