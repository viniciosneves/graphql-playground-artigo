import { Module } from '@nestjs/common';
import { NavesResolver } from './naves.resolver';

@Module({
  providers: [NavesResolver],
})
export class NavesModule {}
