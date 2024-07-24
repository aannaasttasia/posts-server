import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/db/product.entity';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/db/user.entity';
import { CategoryEntity } from './product/db/category.entity';
import { AdminEntity } from './admin/db/admin.entity';
import { OrderEntity } from './order/db/order.entity';
import { PasswordEntity } from './auth/db/password.entity';
import { ProductItemEntity } from './product/db/product-item.entity';
import { SupportHistoryEntity } from './support-history/db/support-history.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { SupportHistoryModule } from './support-history/support-history.module';
import { EncryptionModule } from './encryption/encryption.module';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [UserEntity, ProductEntity, CategoryEntity, AdminEntity, OrderEntity, PasswordEntity, ProductItemEntity, SupportHistoryEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProductModule,
    AdminModule,
    OrderModule,
    SupportHistoryModule,
    EncryptionModule,
    PaymentModule,
  ],
  providers: [PaymentService],

})
export class AppModule {}