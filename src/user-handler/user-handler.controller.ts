import { Controller, Get } from '@nestjs/common';
import { UserJKT48Service } from 'src/user-service/user-service.service';

@Controller('user-handler')
export class UserJKTController {
    constructor(private readonly userJKT: UserJKT48Service) {}

    @Get('/')
    getAllUser(){
        return this.userJKT.getAllUser()
    }
}
