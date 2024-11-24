import { Injectable } from '@nestjs/common';

@Injectable()
export class UserJKT48Service {
   private users = ['ayana','melodi','nabilah']

   getAllUser() {
    return this.users
   }
}
