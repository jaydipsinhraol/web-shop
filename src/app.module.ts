import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ShippingProvidersModule } from './shipping-providers/shipping-providers.module';
import { PaymentProcessorsModule } from './payment-processors/payment-processors.module';
import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/common/interceptors/logging.interceptor.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT),
        password: process.env.PG_PASSWORD,
        username: process.env.PG_USER,
        database: process.env.PG_DB,
        synchronize: true,
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    ProductsModule, 
    CategoriesModule, 
    OrdersModule, 
    ShippingProvidersModule, 
    PaymentProcessorsModule, 
    SharedModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
