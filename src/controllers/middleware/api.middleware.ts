import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Middleware executed for:', req.path);
        next(); // Ensure the request continues to the next handler
    }
}




// use(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         throw new UnauthorizedException('Authorization header is missing');
//     }
//
//     const token = authHeader.split(' ')[1]; // Bearer <token>
//     if (!token) {
//         throw new UnauthorizedException('Token is missing');
//     }
//
//     try {
//         const payload = this.jwtService.verify(token);
//         req['user'] = payload;
//         next();
//     } catch (err) {
//         throw new UnauthorizedException('Invalid or expired token');
//     }
// }