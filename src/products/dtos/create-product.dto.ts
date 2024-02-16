// src/products/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Product Name', description: 'The name of the product' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 19.99, description: 'The price of the product' })
  @IsNumber()
  readonly price: number;

  // Add additional fields with Swagger annotations as needed
}
