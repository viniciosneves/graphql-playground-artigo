export const db = {
  naves: [
    {
      id: 1,
      nome: 'Enterprise',
      classe: 'Constitution',
      capitao_id: 1,
      missao: 'Exploração',
    },
    {
      id: 2,
      nome: 'Voyager',
      classe: 'Intrepid',
      capitao_id: 3,
      missao: 'Retorno ao Quadrante Alpha',
    },
    {
      id: 3,
      nome: 'Defiant',
      classe: 'Defiant',
      capitao_id: 5,
      missao: 'Defesa da Estação Espacial 9',
    },
  ],
  tripulacao: [
    {
      id: 1,
      tripulante_id: 1,
      cargo_id: 1,
      naves_id: 1,
    },
    {
      id: 2,
      tripulante_id: 2,
      cargo_id: 2,
      naves_id: 1,
    },
    {
      id: 3,
      tripulante_id: 3,
      cargo_id: 1,
      naves_id: 2,
    },
    {
      id: 4,
      tripulante_id: 4,
      cargo_id: 3,
      naves_id: 2,
    },
    {
      id: 5,
      tripulante_id: 5,
      cargo_id: 4,
      naves_id: 3,
    },
    {
      id: 6,
      tripulante_id: 6,
      cargo_id: 2,
      naves_id: 3,
    },
  ],
  tripulantes: [
    {
      id: 1,
      nome: 'James T. Kirk',
      idade: 35,
    },
    {
      id: 2,
      nome: 'Spock',
      idade: 42,
    },
    {
      id: 3,
      nome: 'Kathryn Janeway',
      idade: 41,
    },
    {
      id: 4,
      nome: 'Tuvok',
      idade: 107,
    },
    {
      id: 5,
      nome: 'Benjamin Sisko',
      idade: 37,
    },
    {
      id: 6,
      nome: 'Jadzia Dax',
      idade: 28,
    },
  ],
  cargos: [
    {
      id: 1,
      nome: 'Capitão',
    },
    {
      id: 2,
      nome: 'Oficial Científico',
    },
    {
      id: 3,
      nome: 'Oficial de Segurança',
    },
    {
      id: 4,
      nome: 'Comandante',
    },
  ],
};
