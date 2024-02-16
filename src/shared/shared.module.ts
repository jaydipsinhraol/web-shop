import { Module } from '@nestjs/common';
import { UtilsService } from './utils/utils.service';

@Module({
  providers: [UtilsService]
})
export class SharedModule {}
