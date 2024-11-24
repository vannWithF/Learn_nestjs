import { NestFactory } from '@nestjs/core';
import { ModuleUserJktModule } from './module-user-jkt/module-user-jkt.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleUserJktModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
