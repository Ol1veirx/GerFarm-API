import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { FarmModule } from './module/farm/farm.module';
import { CultivationFieldModule } from './module/cultivation-field/cultivation-field.module';
import { AgriculturalActivityModule } from './module/agricultural-activity/agricultural-activity.module';
import { AgriculturalInputModule } from './module/agricultural-input/agricultural-input.module';
import { PrismaService } from 'prisma/context/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule, FarmModule, CultivationFieldModule, AgriculturalActivityModule, AgriculturalInputModule, AgriculturalInputModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
