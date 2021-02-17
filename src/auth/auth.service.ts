import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) {

    }

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        console.log('signup')
        const result = await this.userRepository.signUp(authCredentialsDto);
        console.log('result', result)

        const username = await this.userRepository.validateUserPassword(authCredentialsDto);

        if (!username) {
            return null;
        }

        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);

        if (!accessToken) {
            return null;
        }
        return accessToken;
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        console.log('signIn')
        const username = await this.userRepository.validateUserPassword(authCredentialsDto);
        console.log('sign', username)
        if (!username) {
            return null;
        }

        const payload: JwtPayload = { username };

        
        const accessToken = await this.jwtService.sign(payload);
        if (!accessToken) {
            return null;
        }

        return accessToken;
    }
}
