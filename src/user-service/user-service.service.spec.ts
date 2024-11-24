import { Test, TestingModule } from '@nestjs/testing';
import { UserJKT48Service } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserJKT48Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserJKT48Service],
    }).compile();

    service = module.get<UserJKT48Service>(UserJKT48Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
