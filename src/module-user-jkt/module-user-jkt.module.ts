import { Module } from '@nestjs/common';
import { UserJKT48Service } from 'src/user-service/user-service.service';
import { UserJKTController } from 'src/user-handler/user-handler.controller';

@Module({
    controllers: [UserJKTController],
    providers: [UserJKT48Service]
})
export class ModuleUserJktModule {

}
