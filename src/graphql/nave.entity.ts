import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Tripulante } from './tripulante.entity';
@ObjectType()
export class Nave {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  nome: string;
  @Field((type) => String)
  classe: string;
  @Field((type) => String)
  missao: string;
  @Field((type) => Tripulante)
  capitao?: Tripulante;
  @Field((type) => [Tripulante])
  tripulantes?: Tripulante[];
  capitao_id: number;
}
