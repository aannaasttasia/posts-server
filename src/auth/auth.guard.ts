import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }

        const payload = await this.jwtService.verifyAsync(token, {
            secret: jwtConstants.secret,
        });
        console.log(payload);
        request.user = payload;

        if (!payload) {
            throw new ForbiddenException('Invalid token');
        }

        if (payload.admin !== true) {
            throw new ForbiddenException(
                'You do not have permission to perform this action',
            );
        }
        return true;
    }
    
    async extractUserIdFromToken(token: string): Promise<number | null> {
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.secret,
            });         
            return payload.userId; 
        } catch (err) {
          console.error('Failed to extract userId:', err);
          return null;
        }
      }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
