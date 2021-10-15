import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../../auth/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (!req || !req.cookies) {
          console.log('No token');
          return null;
        }
        console.log('Token: ' + JSON.stringify(req.cookies['access_token']));
        return req.cookies['access_token'];
      },
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any): Promise<any> {
    console.log(payload);
    return { userId: payload.sub, username: payload.username };
  }
}
