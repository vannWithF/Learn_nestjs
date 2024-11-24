import { Test, TestingModule } from '@nestjs/testing';
import { UserJKTController } from './user-handler.controller';

describe('UserHandlerController', () => {
  let controller: UserJKTController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserJKTController],
    }).compile();

    controller = module.get<UserJKTController>(UserJKTController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
