import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cargo } from './cargo.entity';
@ObjectType()
export class Tripulante {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  nome: string;
  @Field((type) => Number)
  idade: number;
  @Field((type) => Cargo, { nullable: true })
  cargo?: Cargo;
  cargo_id?: number;
}
