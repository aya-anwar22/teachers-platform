import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(user: any): Promise<{
        accessToken: string;
    }>;
    validateUser(email: string, password: string): {
        email: string;
        role: string;
    } | null;
}
