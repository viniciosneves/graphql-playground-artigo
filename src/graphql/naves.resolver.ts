import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { db } from '../db';
import { Cargo } from './cargo.entity';
import { Nave } from './nave.entity';
import { Tripulante } from './tripulante.entity';

@Resolver(() => Nave)
export class NavesResolver {
  @Query(() => [Nave])
  naves(): Nave[] {
    return db.naves;
  }
  @Query(() => Nave)
  nave(@Args('id') id: number): Nave {
    const nave = db.naves.find((nave) => nave.id === id);
    return nave;
  }

  @ResolveField(() => Tripulante)
  capitao(@Parent() nave: Nave): Tripulante {
    const tripulante = db.tripulantes.find(
      (tripulante) => tripulante.id === nave.capitao_id,
    ) as Tripulante;
    tripulante.cargo = db.cargos.find((c) => c.id === 1);
    return tripulante;
  }

  @ResolveField(() => [Tripulante])
  tripulantes(@Parent() nave: Nave): Tripulante[] {
    const tripulacao = db.tripulacao.filter(
      (tripulacao) => tripulacao.naves_id === nave.id,
    );

    const tripulantes = tripulacao.map((trip) => {
      const tripulante = db.tripulantes.find(
        (t) => t.id === trip.tripulante_id,
      );
      return {
        cargo: db.cargos.find((c) => c.id === trip.cargo_id),
        ...tripulante,
      };
    });

    return tripulantes;
  }
}
