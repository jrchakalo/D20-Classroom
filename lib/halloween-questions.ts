import type { DifficultyId, Question } from './types';

/**
 * Banco de perguntas do modo Halloween.
 *
 * Todas as perguntas estão em inglês (língua do jogo).
 * As traduções em português ficam comentadas logo abaixo de cada pergunta.
 *
 * Balanceamento de cada baralho:
 * - 30 perguntas por dificuldade.
 * - 15 respostas "true" e 15 respostas "false" em cada baralho.
 * - O baralho Easy mistura perguntas fáceis com algumas médias e poucas difíceis.
 * - O baralho Medium tem maioria de perguntas médias, com fáceis e difíceis ao redor.
 * - O baralho Hard tem maioria de perguntas difíceis, com algumas médias e poucas fáceis.
 * - Alguns fatos se repetem entre baralhos, com linguagem adaptada para cada idade.
 */

const EASY: Question[] = [
  // ---------- Easy: fatos simples e vocabulário curto ----------
  {
    id: 'hw-easy-01',
    text: 'Halloween is on October 31.',
    answer: true,
    // pt: "O Halloween é no dia 31 de outubro.",
  },
  {
    id: 'hw-easy-02',
    text: 'People carve faces into pumpkins for Halloween.',
    answer: true,
    // pt: "As pessoas esculpem rostos em abóboras para o Halloween.",
  },
  {
    id: 'hw-easy-03',
    text: "A pumpkin with a carved face is called a jack-o'-lantern.",
    answer: true,
    // pt: "Uma abóbora com um rosto esculpido é chamada de jack-o'-lantern.",
  },
  {
    id: 'hw-easy-04',
    text: 'Children wear costumes on Halloween.',
    answer: true,
    // pt: "As crianças usam fantasias no Halloween.",
  },
  {
    id: 'hw-easy-05',
    text: '"Trick or treat!" is what kids say to ask for candy.',
    answer: true,
    // pt: '"Trick or treat!" é o que as crianças dizem para pedir doces.',
  },
  {
    id: 'hw-easy-06',
    text: 'Candy corn is a popular Halloween candy.',
    answer: true,
    // pt: "Candy corn é um doce popular de Halloween.",
  },
  {
    id: 'hw-easy-07',
    text: 'Witches fly on broomsticks in Halloween stories.',
    answer: true,
    // pt: "Nas histórias de Halloween, as bruxas voam em vassouras.",
  },
  {
    id: 'hw-easy-08',
    text: 'Skeletons are made of bones.',
    answer: true,
    // pt: "Esqueletos são feitos de ossos.",
  },
  {
    id: 'hw-easy-09',
    text: 'Spiders have eight legs.',
    answer: true,
    // pt: "As aranhas têm oito patas.",
  },
  {
    id: 'hw-easy-10',
    text: 'Black cats are common in Halloween decorations.',
    answer: true,
    // pt: "Gatos pretos são comuns nas decorações de Halloween.",
  },
  {
    id: 'hw-easy-11',
    text: 'Mummies are wrapped in bandages.',
    answer: true,
    // pt: "Múmias são enroladas em ataduras.",
  },
  {
    id: 'hw-easy-12',
    text: 'Orange and black are the colors of Halloween.',
    answer: true,
    // pt: "Laranja e preto são as cores do Halloween.",
  },
  {
    id: 'hw-easy-13',
    text: 'In Minecraft, you can wear a carved pumpkin on your head.',
    answer: true,
    // pt: "No Minecraft, você pode usar uma abóbora esculpida na cabeça.",
  },
  {
    id: 'hw-easy-14',
    text: 'The word "Halloween" comes from "All Hallows\' Eve".',
    answer: true,
    // pt: 'A palavra "Halloween" vem de "All Hallows\' Eve" (Véspera de Todos os Santos).',
  },
  {
    id: 'hw-easy-15',
    text: "Jack-o'-lanterns were first made from turnips.",
    answer: true,
    // pt: "As primeiras jack-o'-lanterns foram feitas de nabos.",
  },

  // ---------- Easy/médio: ainda com frases curtas, mas com uma pequena pegadinha ----------
  {
    id: 'hw-easy-16',
    text: 'Bats sleep at night.',
    answer: false,
    // pt: "Os morcegos dormem à noite. (Falso: eles são animais noturnos e dormem de dia.)",
  },
  {
    id: 'hw-easy-17',
    text: 'Pumpkins grow on trees.',
    answer: false,
    // pt: "As abóboras crescem em árvores. (Falso: elas crescem no chão, em ramas rasteiras.)",
  },
  {
    id: 'hw-easy-18',
    text: 'Halloween is a Christmas holiday.',
    answer: false,
    // pt: "O Halloween é uma festa de Natal. (Falso: é uma festa de outono.)",
  },
  {
    id: 'hw-easy-19',
    text: 'Candy is a healthy dinner.',
    answer: false,
    // pt: "Doce é um jantar saudável. (Falso: é uma brincadeira.)",
  },
  {
    id: 'hw-easy-20',
    text: "Jack-o'-lanterns are made from watermelons.",
    answer: false,
    // pt: "As jack-o'-lanterns são feitas de melancias. (Falso: são feitas de abóboras.)",
  },
  {
    id: 'hw-easy-21',
    text: 'Trick-or-treating happens in the morning.',
    answer: false,
    // pt: "O trick-or-treat acontece de manhã. (Falso: geralmente acontece à noite.)",
  },
  {
    id: 'hw-easy-22',
    text: 'Halloween is in summer.',
    answer: false,
    // pt: "O Halloween é no verão. (Falso: é no outono, no hemisfério norte.)",
  },
  {
    id: 'hw-easy-23',
    text: 'A haunted house is a real house with real ghosts.',
    answer: false,
    // pt: "Uma casa assombrada é uma casa real com fantasmas de verdade. (Falso: são atrações ou histórias.)",
  },
  {
    id: 'hw-easy-24',
    text: 'Witches fly on vacuum cleaners in old stories.',
    answer: false,
    // pt: "Nas histórias antigas, as bruxas voam em aspiradores de pó. (Falso: voam em vassouras.)",
  },
  {
    id: 'hw-easy-25',
    text: 'A werewolf turns into a cat in stories.',
    answer: false,
    // pt: "Nas histórias, um lobisomem se transforma em gato. (Falso: se transforma em lobo.)",
  },

  // ---------- Médio: uma ou duas palavras novas, mas sem complicar ----------
  {
    id: 'hw-easy-26',
    text: 'Vampires in stories sleep at night.',
    answer: false,
    // pt: "Nas histórias, os vampiros dormem à noite. (Falso: dormem durante o dia.)",
  },
  {
    id: 'hw-easy-27',
    text: "Frankenstein's monster is made of metal.",
    answer: false,
    // pt: "O monstro de Frankenstein é feito de metal. (Falso: é feito de partes de corpos.)",
  },
  {
    id: 'hw-easy-28',
    text: 'Spiders are insects.',
    answer: false,
    // pt: "Aranhas são insetos. (Falso: são aracnídeos; os insetos têm seis patas.)",
  },
  {
    id: 'hw-easy-29',
    text: 'Bats are birds.',
    answer: false,
    // pt: "Morcegos são aves. (Falso: são mamíferos.)",
  },
  {
    id: 'hw-easy-30',
    text: 'Skeletons have muscles.',
    answer: false,
    // pt: "Esqueletos têm músculos. (Falso: o esqueleto é formado por ossos.)",
  },

  // ---------- Easy extra: mais fatos simples, jogos e costumes ----------
  {
    id: 'hw-easy-31',
    text: 'Pumpkins are orange.',
    answer: true,
    // pt: "As abóboras são laranjas.",
  },
  {
    id: 'hw-easy-32',
    text: 'A witch often wears a pointed hat in stories.',
    answer: true,
    // pt: "Nas histórias, as bruxas costumam usar um chapéu pontudo.",
  },
  {
    id: 'hw-easy-33',
    text: 'Adults use knives to carve pumpkins.',
    answer: true,
    // pt: "Os adultos usam facas para esculpir abóboras.",
  },
  {
    id: 'hw-easy-34',
    text: 'Ghosts are often drawn as white sheets with eyes.',
    answer: true,
    // pt: "Fantasmas são frequentemente desenhados como lençóis brancos com olhos.",
  },
  {
    id: 'hw-easy-35',
    text: 'Owls are awake at night.',
    answer: true,
    // pt: "As corujas ficam acordadas à noite.",
  },
  {
    id: 'hw-easy-36',
    text: 'A skull protects the brain.',
    answer: true,
    // pt: "O crânio protege o cérebro.",
  },
  {
    id: 'hw-easy-37',
    text: 'People hang fake spider webs on Halloween.',
    answer: true,
    // pt: "As pessoas penduram teias de aranha falsas no Halloween.",
  },
  {
    id: 'hw-easy-38',
    text: 'Children often carry a bag or bucket for candy.',
    answer: true,
    // pt: "As crianças costumam levar uma sacola ou balde para os doces.",
  },
  {
    id: 'hw-easy-39',
    text: 'A scarecrow is often seen in autumn fields.',
    answer: true,
    // pt: "Um espantalho é comum em campos no outono.",
  },
  {
    id: 'hw-easy-40',
    text: 'Pumpkin pie is a popular autumn dessert.',
    answer: true,
    // pt: "Torta de abóbora é uma sobremesa popular no outono.",
  },
  {
    id: 'hw-easy-41',
    text: 'In Roblox, players can dress their avatars in costumes.',
    answer: true,
    // pt: "No Roblox, os jogadores podem vestir seus avatares com fantasias.",
  },
  {
    id: 'hw-easy-42',
    text: 'In Minecraft, creepers are green monsters.',
    answer: true,
    // pt: "No Minecraft, os creepers são monstros verdes.",
  },
  {
    id: 'hw-easy-43',
    text: 'A full moon often appears in Halloween pictures.',
    answer: true,
    // pt: "Uma lua cheia costuma aparecer nas imagens de Halloween.",
  },
  {
    id: 'hw-easy-44',
    text: 'Some people watch scary movies on Halloween.',
    answer: true,
    // pt: "Algumas pessoas assistem a filmes assustadores no Halloween.",
  },
  {
    id: 'hw-easy-45',
    text: 'Bats can fly.',
    answer: true,
    // pt: "Os morcegos podem voar.",
  },

  // ---------- Easy extra: erros fáceis de perceber ----------
  {
    id: 'hw-easy-46',
    text: 'Pumpkins are blue.',
    answer: false,
    // pt: "As abóboras são azuis. (Falso: geralmente são laranjas.)",
  },
  {
    id: 'hw-easy-47',
    text: 'Witches fly on bicycles in stories.',
    answer: false,
    // pt: "Nas histórias, as bruxas voam em bicicletas. (Falso: voam em vassouras.)",
  },
  {
    id: 'hw-easy-48',
    text: 'Vampires love garlic.',
    answer: false,
    // pt: "Vampiros adoram alho. (Falso: nas histórias, eles têm medo ou nojo de alho.)",
  },
  {
    id: 'hw-easy-49',
    text: 'Mummies are wrapped in paper.',
    answer: false,
    // pt: "Múmias são enroladas em papel. (Falso: são enroladas em faixas de tecido.)",
  },
  {
    id: 'hw-easy-50',
    text: 'Bats have feathers.',
    answer: false,
    // pt: "Morcegos têm penas. (Falso: eles têm pelos.)",
  },
  {
    id: 'hw-easy-51',
    text: 'Halloween is in December.',
    answer: false,
    // pt: "O Halloween é em dezembro. (Falso: é em 31 de outubro.)",
  },
  {
    id: 'hw-easy-52',
    text: 'Ghosts are made of metal.',
    answer: false,
    // pt: "Fantasmas são feitos de metal. (Falso: fantasmas são imaginários.)",
  },
  {
    id: 'hw-easy-53',
    text: 'Spiders have six legs.',
    answer: false,
    // pt: "Aranhas têm seis patas. (Falso: têm oito.)",
  },
  {
    id: 'hw-easy-54',
    text: 'Pumpkins grow underwater.',
    answer: false,
    // pt: "Abóboras crescem debaixo d'água. (Falso: crescem no solo.)",
  },
  {
    id: 'hw-easy-55',
    text: 'Candy corn is a vegetable.',
    answer: false,
    // pt: "Candy corn é um legume. (Falso: é um doce.)",
  },
  {
    id: 'hw-easy-56',
    text: 'A broom is used to eat soup.',
    answer: false,
    // pt: "Uma vassoura é usada para comer sopa. (Falso: serve para varrer.)",
  },
  {
    id: 'hw-easy-57',
    text: 'Werewolves howl at the sun.',
    answer: false,
    // pt: "Lobisomens uivam para o sol. (Falso: nas histórias, uivam para a lua.)",
  },
  {
    id: 'hw-easy-58',
    text: 'A black cat has white fur.',
    answer: false,
    // pt: "Um gato preto tem pelo branco. (Falso: tem pelo preto.)",
  },
  {
    id: 'hw-easy-59',
    text: "Jack-o'-lanterns are made of glass.",
    answer: false,
    // pt: "Jack-o'-lanterns são feitas de vidro. (Falso: são feitas de abóboras.)",
  },
  {
    id: 'hw-easy-60',
    text: 'You wear a costume only on your feet.',
    answer: false,
    // pt: "Você usa fantasia apenas nos pés. (Falso: a fantasia cobre o corpo todo.)",
  },
];

const MEDIUM: Question[] = [
  // ---------- Médio: origem, tradições e cultura pop ----------
  {
    id: 'hw-medium-01',
    text: 'Halloween comes from the ancient Celtic festival Samhain.',
    answer: true,
    // pt: "O Halloween vem do antigo festival celta Samhain.",
  },
  {
    id: 'hw-medium-02',
    text: 'Samhain marked the end of the harvest and the start of winter.',
    answer: true,
    // pt: "Samhain marcava o fim da colheita e o início do inverno.",
  },
  {
    id: 'hw-medium-03',
    text: '"Halloween" is a shortened form of "All Hallows\' Eve".',
    answer: true,
    // pt: '"Halloween" é uma forma abreviada de "All Hallows\' Eve".',
  },
  {
    id: 'hw-medium-04',
    text: 'Halloween is celebrated the night before All Saints\' Day.',
    answer: true,
    // pt: "O Halloween é comemorado na noite anterior ao Dia de Todos os Santos.",
  },
  {
    id: 'hw-medium-05',
    text: "Jack-o'-lanterns were first carved from turnips in Ireland.",
    answer: true,
    // pt: "As primeiras jack-o'-lanterns foram esculpidas em nabos na Irlanda.",
  },
  {
    id: 'hw-medium-06',
    text: 'Trick-or-treating became popular in the United States in the 20th century.',
    answer: true,
    // pt: "O trick-or-treat se popularizou nos Estados Unidos no século 20.",
  },
  {
    id: 'hw-medium-07',
    text: '"The Legend of Sleepy Hollow" features the Headless Horseman.',
    answer: true,
    // pt: '"A Lenda do Cavaleiro Sem Cabeça" tem o Cavaleiro Sem Cabeça.',
  },
  {
    id: 'hw-medium-08',
    text: "The story of Frankenstein's monster was written by Mary Shelley.",
    answer: true,
    // pt: "A história do monstro de Frankenstein foi escrita por Mary Shelley.",
  },
  {
    id: 'hw-medium-09',
    text: 'Dracula was written by Bram Stoker.',
    answer: true,
    // pt: "Drácula foi escrito por Bram Stoker.",
  },
  {
    id: 'hw-medium-10',
    text: 'In Ireland, Halloween is called "Oíche Shamhna".',
    answer: true,
    // pt: 'Na Irlanda, o Halloween é chamado de "Oíche Shamhna".',
  },
  {
    id: 'hw-medium-11',
    text: 'In "Stranger Things", the kids dress as Ghostbusters for Halloween.',
    answer: true,
    // pt: 'Em "Stranger Things", as crianças se fantasiam de Caça-Fantasmas no Halloween.',
  },
  {
    id: 'hw-medium-12',
    text: 'R.L. Stine wrote the "Goosebumps" books.',
    answer: true,
    // pt: 'R.L. Stine escreveu os livros "Goosebumps" ("Arrepios").',
  },
  {
    id: 'hw-medium-13',
    text: 'In "Coraline", the Other Mother has button eyes.',
    answer: true,
    // pt: 'Em "Coraline", a Outra Mãe tem olhos de botão.',
  },
  {
    id: 'hw-medium-14',
    text: "In Minecraft, a jack-o'-lantern works as a light source.",
    answer: true,
    // pt: "No Minecraft, uma jack-o'-lantern funciona como fonte de luz.",
  },
  {
    id: 'hw-medium-15',
    text: 'In Roblox, "Adopt Me!" has Halloween pets and events.',
    answer: true,
    // pt: 'No Roblox, "Adopt Me!" tem pets e eventos de Halloween.',
  },

  // ---------- Médio/difícil: detalhes que exigem um pouco mais de atenção ----------
  {
    id: 'hw-medium-16',
    text: '"The Nightmare Before Christmas" was directed by Tim Burton.',
    answer: false,
    // pt: 'Falso: o filme foi dirigido por Henry Selick; Tim Burton criou a história e produziu.',
  },
  {
    id: 'hw-medium-17',
    text: 'In "Brawl Stars", Halloween skins are only sold in December.',
    answer: false,
    // pt: 'Falso: skins de Halloween aparecem em eventos de outubro e em outras datas.',
  },
  {
    id: 'hw-medium-18',
    text: 'Owls can turn their heads 360 degrees.',
    answer: false,
    // pt: "Falso: as corujas giram a cabeça cerca de 270 graus, não 360.",
  },
  {
    id: 'hw-medium-19',
    text: 'In "Scooby-Doo", Scooby can talk in complete sentences.',
    answer: false,
    // pt: "Falso: Scooby fala de um jeito engraçado e quebrado, não em frases completas.",
  },
  {
    id: 'hw-medium-20',
    text: 'Halloween started in the United States.',
    answer: false,
    // pt: "Falso: o Halloween tem origem celta, na Europa.",
  },
  {
    id: 'hw-medium-21',
    text: 'In "Harry Potter", Hogwarts students do not celebrate Halloween.',
    answer: false,
    // pt: "Falso: Hogwarts celebra o Halloween com um banquete.",
  },
  {
    id: 'hw-medium-22',
    text: 'In "Hocus Pocus", the Sanderson sisters live in New York.',
    answer: false,
    // pt: 'Falso: a história se passa em Salem, Massachusetts.',
  },
  {
    id: 'hw-medium-23',
    text: 'In "Stranger Things", Vecna is the hero of Season 4.',
    answer: false,
    // pt: "Falso: Vecna é o vilão principal da 4ª temporada.",
  },
  {
    id: 'hw-medium-24',
    text: 'In "Five Nights at Freddy\'s", Freddy Fazbear is a robot rabbit.',
    answer: false,
    // pt: "Falso: Freddy é um urso; Bonnie é o coelho.",
  },
  {
    id: 'hw-medium-25',
    text: 'In "Coraline", the Other Mother wants to help Coraline go home.',
    answer: false,
    // pt: "Falso: a Outra Mãe quer prender Coraline no outro mundo.",
  },
  {
    id: 'hw-medium-26',
    text: "The jack-o'-lantern tradition started in the United States.",
    answer: false,
    // pt: "Falso: a tradição das jack-o'-lanterns começou na Irlanda e na Escócia, com nabos esculpidos.",
  },
  {
    id: 'hw-medium-27',
    text: 'Candy corn is made from chocolate and caramel.',
    answer: false,
    // pt: "Falso: candy corn é feito principalmente de açúcar e xarope de milho.",
  },
  {
    id: 'hw-medium-28',
    text: 'Orange and black are Halloween colors because of the summer sun and the ocean.',
    answer: false,
    // pt: "Falso: o laranja lembra a colheita e as abóboras; o preto lembra a escuridão e a morte.",
  },
  {
    id: 'hw-medium-29',
    text: 'Halloween is the biggest commercial holiday in the US, bigger than Christmas.',
    answer: false,
    // pt: "Falso: o Halloween é o segundo maior feriado comercial dos EUA, atrás do Natal.",
  },
  {
    id: 'hw-medium-30',
    text: 'Día de los Muertos is just another name for Halloween.',
    answer: false,
    // pt: "Falso: o Día de los Muertos é uma celebração mexicana diferente, com origens e tradições próprias.",
  },

  // ---------- Médio extra: tradições, filmes e jogos ----------
  {
    id: 'hw-medium-31',
    text: 'In the United States, Halloween is the second-biggest commercial holiday after Christmas.',
    answer: true,
    // pt: "Nos Estados Unidos, o Halloween é a segunda maior data comercial, atrás do Natal.",
  },
  {
    id: 'hw-medium-32',
    text: 'Día de los Muertos is celebrated in Mexico around the same time as Halloween.',
    answer: true,
    // pt: "O Día de los Muertos é celebrado no México na mesma época do Halloween.",
  },
  {
    id: 'hw-medium-33',
    text: 'Bobbing for apples is a traditional Halloween game.',
    answer: true,
    // pt: '"Bobbing for apples" (pescar maçãs com a boca) é uma brincadeira tradicional de Halloween.',
  },
  {
    id: 'hw-medium-34',
    text: 'Pumpkin carving became popular in the US after Irish immigrants arrived.',
    answer: true,
    // pt: "Esculpir abóboras se popularizou nos EUA depois da chegada de imigrantes irlandeses.",
  },
  {
    id: 'hw-medium-35',
    text: 'In "Hocus Pocus", the Sanderson sisters live in Salem.',
    answer: true,
    // pt: 'Em "Abracadabra", as irmãs Sanderson vivem em Salem.',
  },
  {
    id: 'hw-medium-36',
    text: 'In "The Nightmare Before Christmas", Jack Skellington is the Pumpkin King.',
    answer: true,
    // pt: 'Em "O Estranho Mundo de Jack", Jack Skellington é o Rei das Abóboras.',
  },
  {
    id: 'hw-medium-37',
    text: 'In "Goosebumps", Slappy is a ventriloquist dummy.',
    answer: true,
    // pt: 'Em "Goosebumps", Slappy é um boneco de ventríloquo.',
  },
  {
    id: 'hw-medium-38',
    text: 'In "Scooby-Doo", the Mystery Machine is the gang\'s van.',
    answer: true,
    // pt: 'Em "Scooby-Doo", a Máquina de Mistério é a van do grupo.',
  },
  {
    id: 'hw-medium-39',
    text: 'In "Pokémon", Gastly is a Ghost-type Pokémon.',
    answer: true,
    // pt: 'Em "Pokémon", Gastly é um Pokémon do tipo Fantasma.',
  },
  {
    id: 'hw-medium-40',
    text: 'In "Fortnite", the Halloween event is called "Fortnitemares".',
    answer: true,
    // pt: 'Em "Fortnite", o evento de Halloween se chama "Fortnitemares".',
  },
  {
    id: 'hw-medium-41',
    text: 'In "Minecraft", bats can be found in dark caves.',
    answer: true,
    // pt: "No Minecraft, morcegos podem ser encontrados em cavernas escuras.",
  },
  {
    id: 'hw-medium-42',
    text: 'In "The Legend of Zelda", Poes are ghost-like enemies.',
    answer: true,
    // pt: 'Em "The Legend of Zelda", os Poes são inimigos parecidos com fantasmas.',
  },
  {
    id: 'hw-medium-43',
    text: 'Candy apples are a common Halloween treat.',
    answer: true,
    // pt: "Maçãs do amor são um doce comum de Halloween.",
  },
  {
    id: 'hw-medium-44',
    text: 'Soul cakes were small cakes given out during souling.',
    answer: true,
    // pt: 'Soul cakes eram bolinhos distribuídos durante o "souling".',
  },
  {
    id: 'hw-medium-45',
    text: 'In "Roblox", "Piggy" is a horror-style game.',
    answer: true,
    // pt: 'No Roblox, "Piggy" é um jogo de estilo terror.',
  },

  // ---------- Médio extra: detalhes trocados ----------
  {
    id: 'hw-medium-46',
    text: 'Samhain was celebrated in the spring.',
    answer: false,
    // pt: "Falso: Samhain era celebrado no início do inverno, em 1º de novembro.",
  },
  {
    id: 'hw-medium-47',
    text: 'The Celts carved pumpkins to scare away spirits.',
    answer: false,
    // pt: "Falso: os celtas esculpiam nabos, não abóboras.",
  },
  {
    id: 'hw-medium-48',
    text: 'Trick-or-treating began in the 21st century.',
    answer: false,
    // pt: "Falso: o trick-or-treat já existia no século 20 e tem raízes mais antigas.",
  },
  {
    id: 'hw-medium-49',
    text: 'In "The Nightmare Before Christmas", Jack Skellington is a vampire.',
    answer: false,
    // pt: "Falso: Jack Skellington é um esqueleto e o Rei das Abóboras.",
  },
  {
    id: 'hw-medium-50',
    text: 'In "Goosebumps", Slappy is a friendly teddy bear.',
    answer: false,
    // pt: "Falso: Slappy é um boneco de ventríloquo assustador.",
  },
  {
    id: 'hw-medium-51',
    text: 'In "Scooby-Doo", Shaggy is the leader of the group.',
    answer: false,
    // pt: "Falso: Fred é o líder; Salsicha (Shaggy) é o amigo medroso.",
  },
  {
    id: 'hw-medium-52',
    text: 'In "Pokémon", Pikachu is a Ghost-type Pokémon.',
    answer: false,
    // pt: "Falso: Pikachu é do tipo Elétrico.",
  },
  {
    id: 'hw-medium-53',
    text: 'In "Minecraft", bats are hostile mobs.',
    answer: false,
    // pt: "Falso: morcegos são passivos e não atacam o jogador.",
  },
  {
    id: 'hw-medium-54',
    text: 'In "Roblox", "Piggy" is a racing game.',
    answer: false,
    // pt: "Falso: é um jogo de terror com quebra-cabeças.",
  },
  {
    id: 'hw-medium-55',
    text: 'Día de los Muertos is celebrated in Brazil.',
    answer: false,
    // pt: "Falso: é uma tradição mexicana, embora existam celebrações parecidas em outros países.",
  },
  {
    id: 'hw-medium-56',
    text: 'Bobbing for apples is a Christmas game.',
    answer: false,
    // pt: "Falso: é uma brincadeira tradicional de Halloween.",
  },
  {
    id: 'hw-medium-57',
    text: 'Soul cakes were made with chocolate.',
    answer: false,
    // pt: "Falso: eram bolinhos simples, geralmente com especiarias e frutas secas.",
  },
  {
    id: 'hw-medium-58',
    text: 'Pumpkin pie is a traditional Easter dessert.',
    answer: false,
    // pt: "Falso: é uma sobremesa típica do outono e do Dia de Ação de Graças.",
  },
  {
    id: 'hw-medium-59',
    text: 'Black cats are considered bad luck in every culture.',
    answer: false,
    // pt: "Falso: em algumas culturas, como no Japão e no Reino Unido, gatos pretos dão sorte.",
  },
  {
    id: 'hw-medium-60',
    text: 'The word "witch" comes from the Latin word for "candy".',
    answer: false,
    // pt: 'Falso: "witch" vem do inglês antigo "wicce", não do latim para doce.',
  },
];

const HARD: Question[] = [
  // ---------- Difícil: história, folclore e detalhes de filmes ----------
  {
    id: 'hw-hard-01',
    text: 'Samhain is pronounced "sow-in".',
    answer: true,
    // pt: 'Samhain se pronuncia "sow-in" (com o som de "cow").',
  },
  {
    id: 'hw-hard-02',
    text: 'The Celts believed the boundary between the living and the dead was thinnest at Samhain.',
    answer: true,
    // pt: "Os celtas acreditavam que a fronteira entre os vivos e os mortos era mais fina em Samhain.",
  },
  {
    id: 'hw-hard-03',
    text: 'The Celts lit bonfires and wore costumes to ward off evil spirits at Samhain.',
    answer: true,
    // pt: "No Samhain, os celtas acendiam fogueiras e usavam fantasias para afastar espíritos malignos.",
  },
  {
    id: 'hw-hard-04',
    text: 'The name "jack-o\'-lantern" comes from the tale of Stingy Jack.',
    answer: true,
    // pt: 'O nome "jack-o\'-lantern" vem da história de Stingy Jack ("Jack, o Avarento").',
  },
  {
    id: 'hw-hard-05',
    text: 'In the Stingy Jack tale, Jack carried a burning coal inside a carved turnip.',
    answer: true,
    // pt: "Na história de Stingy Jack, ele carregava uma brasa acesa dentro de um nabo esculpido.",
  },
  {
    id: 'hw-hard-06',
    text: '"Souling" involved baking and sharing soul cakes.',
    answer: true,
    // pt: 'O "souling" envolvia assar e distribuir bolos das almas (soul cakes).',
  },
  {
    id: 'hw-hard-07',
    text: 'Irish and Scottish immigrants helped make Halloween popular in the United States.',
    answer: true,
    // pt: "Imigrantes irlandeses e escoceses ajudaram a popularizar o Halloween nos Estados Unidos.",
  },
  {
    id: 'hw-hard-08',
    text: 'The word "Halloween" was first written down in the 18th century.',
    answer: true,
    // pt: 'A palavra "Halloween" foi registrada pela primeira vez no século 18.',
  },
  {
    id: 'hw-hard-09',
    text: 'In Scotland, "guising" involved dressing up and performing for treats.',
    answer: true,
    // pt: 'Na Escócia, o "guising" consistia em se fantasiar e fazer uma apresentação para ganhar doces.',
  },
  {
    id: 'hw-hard-10',
    text: 'Mary Shelley wrote "Frankenstein" for a ghost-story contest at Villa Diodati.',
    answer: true,
    // pt: 'Mary Shelley escreveu "Frankenstein" para um concurso de histórias de fantasma na Villa Diodati.',
  },
  {
    id: 'hw-hard-11',
    text: 'Bram Stoker\'s "Dracula" was published in 1897.',
    answer: true,
    // pt: 'O "Drácula" de Bram Stoker foi publicado em 1897.',
  },
  {
    id: 'hw-hard-12',
    text: '"Nosferatu" (1922) was an unauthorized adaptation of "Dracula".',
    answer: true,
    // pt: '"Nosferatu" (1922) foi uma adaptação não autorizada de "Drácula".',
  },
  {
    id: 'hw-hard-13',
    text: 'John Carpenter directed the 1978 film "Halloween".',
    answer: true,
    // pt: 'John Carpenter dirigiu o filme "Halloween" de 1978.',
  },
  {
    id: 'hw-hard-14',
    text: 'In Minecraft, wearing a carved pumpkin stops endermen from getting angry when you look at them.',
    answer: true,
    // pt: "No Minecraft, usar uma abóbora esculpida impede que os endermen fiquem irritados quando você olha para eles.",
  },
  {
    id: 'hw-hard-15',
    text: 'The Sanderson sisters in "Hocus Pocus" are named Winifred, Sarah, and Mary.',
    answer: true,
    // pt: 'As irmãs Sanderson de "Abracadabra" se chamam Winifred, Sarah e Mary.',
  },

  // ---------- Difícil: afirmações falsas com detalhes trocados ----------
  {
    id: 'hw-hard-16',
    text: 'Halloween is a federal holiday in the United States.',
    answer: false,
    // pt: "Falso: o Halloween não é um feriado federal nos Estados Unidos.",
  },
  {
    id: 'hw-hard-17',
    text: 'Halloween is only celebrated in the United States.',
    answer: false,
    // pt: "Falso: o Halloween é celebrado em vários países, com tradições diferentes.",
  },
  {
    id: 'hw-hard-18',
    text: '"Souling" was a tradition of carving pumpkins.',
    answer: false,
    // pt: 'Falso: o "souling" era sobre os bolos das almas, não sobre esculpir abóboras.',
  },
  {
    id: 'hw-hard-19',
    text: 'The word "Halloween" comes from a French phrase meaning "summer\'s end".',
    answer: false,
    // pt: 'Falso: "Halloween" vem de "All Hallows\' Eve", não de uma frase francesa.',
  },
  {
    id: 'hw-hard-20',
    text: 'Samhain was a Roman festival.',
    answer: false,
    // pt: "Falso: Samhain era um festival celta.",
  },
  {
    id: 'hw-hard-21',
    text: 'In the Stingy Jack tale, Jack was allowed into heaven.',
    answer: false,
    // pt: "Falso: Jack foi recusado no céu e no inferno, e ficou vagando pela Terra.",
  },
  {
    id: 'hw-hard-22',
    text: '"Nosferatu" was an official adaptation approved by Bram Stoker\'s estate.',
    answer: false,
    // pt: 'Falso: foi uma adaptação não autorizada; o estúdio foi processado pela família de Stoker.',
  },
  {
    id: 'hw-hard-23',
    text: 'In "Hocus Pocus", the Sanderson sisters are named Winifred, Sarah, and Emily.',
    answer: false,
    // pt: "Falso: a terceira irmã se chama Mary, não Emily.",
  },
  {
    id: 'hw-hard-24',
    text: 'Ghostface\'s mask was inspired by a clown painting.',
    answer: false,
    // pt: 'Falso: o visual foi inspirado no quadro "O Grito", de Edvard Munch.',
  },
  {
    id: 'hw-hard-25',
    text: 'In "Coraline", the Other Mother has button eyes but normal human hands.',
    answer: false,
    // pt: "Falso: as mãos da Outra Mãe se transformam em agulhas de costura.",
  },
  {
    id: 'hw-hard-26',
    text: 'In "Scream", the killers use a shotgun.',
    answer: false,
    // pt: "Falso: os assassinos usam uma faca.",
  },
  {
    id: 'hw-hard-27',
    text: 'In Minecraft, bats drop leather when killed.',
    answer: false,
    // pt: "Falso: morcegos no Minecraft não soltam item nenhum.",
  },
  {
    id: 'hw-hard-28',
    text: 'In "Overwatch", the Halloween event is called "Spooky Season".',
    answer: false,
    // pt: 'Falso: o evento se chama "Halloween Terror".',
  },
  {
    id: 'hw-hard-29',
    text: 'In "Pokémon", Mimikyu is a Fire-type Pokémon.',
    answer: false,
    // pt: "Falso: Mimikyu é dos tipos Fantasma e Fada.",
  },
  {
    id: 'hw-hard-30',
    text: 'In "The Book of Life", the Land of the Dead is ruled by Dracula.',
    answer: false,
    // pt: 'Falso: em "O Livro da Vida" ("The Book of Life"), a Terra dos Mortos é governada por La Muerte e Xibalba.',
  },

  // ---------- Difícil extra: folclore, literatura e cinema ----------
  {
    id: 'hw-hard-31',
    text: 'The name "Samhain" is often translated as "summer\'s end".',
    answer: true,
    // pt: 'O nome "Samhain" costuma ser traduzido como "fim do verão".',
  },
  {
    id: 'hw-hard-32',
    text: 'All Saints\' Day is celebrated on November 1.',
    answer: true,
    // pt: "O Dia de Todos os Santos é celebrado em 1º de novembro.",
  },
  {
    id: 'hw-hard-33',
    text: 'A "dumb supper" was a silent Halloween meal meant to invite spirits.',
    answer: true,
    // pt: 'Um "dumb supper" era uma refeição silenciosa de Halloween para convidar espíritos.',
  },
  {
    id: 'hw-hard-34',
    text: '"Snap Apple" is a traditional Halloween game in Ireland.',
    answer: true,
    // pt: '"Snap Apple" é uma brincadeira tradicional de Halloween na Irlanda.',
  },
  {
    id: 'hw-hard-35',
    text: 'Robert Burns wrote a poem called "Halloween" in 1785.',
    answer: true,
    // pt: 'Robert Burns escreveu um poema chamado "Halloween" em 1785.',
  },
  {
    id: 'hw-hard-36',
    text: 'Washington Irving published "The Legend of Sleepy Hollow" in 1820.',
    answer: true,
    // pt: 'Washington Irving publicou "A Lenda do Cavaleiro Sem Cabeça" em 1820.',
  },
  {
    id: 'hw-hard-37',
    text: 'Edgar Allan Poe published "The Raven" in 1845.',
    answer: true,
    // pt: 'Edgar Allan Poe publicou "O Corvo" em 1845.',
  },
  {
    id: 'hw-hard-38',
    text: 'Max Schreck played Count Orlok in the 1922 film "Nosferatu".',
    answer: true,
    // pt: 'Max Schreck interpretou o Conde Orlok no filme "Nosferatu", de 1922.',
  },
  {
    id: 'hw-hard-39',
    text: 'John Carpenter\'s "Halloween" was made on a small budget and became a major hit.',
    answer: true,
    // pt: 'O "Halloween" de John Carpenter foi feito com orçamento baixo e se tornou um grande sucesso.',
  },
  {
    id: 'hw-hard-40',
    text: 'Michael Myers\'s mask in "Halloween" was based on a Captain Kirk mask.',
    answer: true,
    // pt: 'A máscara de Michael Myers em "Halloween" foi baseada em uma máscara do Capitão Kirk.',
  },
  {
    id: 'hw-hard-41',
    text: '"The Shining" was directed by Stanley Kubrick.',
    answer: true,
    // pt: '"O Iluminado" foi dirigido por Stanley Kubrick.',
  },
  {
    id: 'hw-hard-42',
    text: 'In "Coraline", the Other Mother is voiced by Teri Hatcher.',
    answer: true,
    // pt: 'Em "Coraline", a Outra Mãe tem a voz de Teri Hatcher.',
  },
  {
    id: 'hw-hard-43',
    text: 'In "The Nightmare Before Christmas", Chris Sarandon voices Jack and Danny Elfman sings for him.',
    answer: true,
    // pt: 'Em "O Estranho Mundo de Jack", Chris Sarandon dubla Jack e Danny Elfman canta por ele.',
  },
  {
    id: 'hw-hard-44',
    text: 'In "Minecraft", bats were added in the Pretty Scary Update.',
    answer: true,
    // pt: 'No Minecraft, os morcegos foram adicionados na atualização "Pretty Scary".',
  },
  {
    id: 'hw-hard-45',
    text: 'In "Dead by Daylight", Michael Myers appears as a killer.',
    answer: true,
    // pt: 'Em "Dead by Daylight", Michael Myers aparece como assassino.',
  },

  // ---------- Difícil extra: afirmações falsas com detalhes trocados ----------
  {
    id: 'hw-hard-46',
    text: 'Samhain was celebrated in midsummer.',
    answer: false,
    // pt: "Falso: era celebrado no início do inverno, não no meio do verão.",
  },
  {
    id: 'hw-hard-47',
    text: 'The Celts believed spirits were weakest at Samhain.',
    answer: false,
    // pt: "Falso: acreditavam que a fronteira entre vivos e mortos era mais fina, não mais fraca.",
  },
  {
    id: 'hw-hard-48',
    text: 'Soul cakes were given as payment for carving pumpkins.',
    answer: false,
    // pt: "Falso: eram ligadas a rezas pelas almas, não ao trabalho de esculpir abóboras.",
  },
  {
    id: 'hw-hard-49',
    text: 'Robert Burns wrote "Dracula".',
    answer: false,
    // pt: 'Falso: "Drácula" foi escrito por Bram Stoker. Robert Burns escreveu poesia.',
  },
  {
    id: 'hw-hard-50',
    text: '"The Legend of Sleepy Hollow" was written by Edgar Allan Poe.',
    answer: false,
    // pt: 'Falso: foi escrito por Washington Irving.',
  },
  {
    id: 'hw-hard-51',
    text: 'The 1978 film "Halloween" was directed by Wes Craven.',
    answer: false,
    // pt: 'Falso: foi dirigido por John Carpenter.',
  },
  {
    id: 'hw-hard-52',
    text: 'In "Halloween", Michael Myers\'s mask was based on a clown mask.',
    answer: false,
    // pt: "Falso: foi baseada em uma máscara do Capitão Kirk, de Star Trek.",
  },
  {
    id: 'hw-hard-53',
    text: '"The Shining" was directed by Alfred Hitchcock.',
    answer: false,
    // pt: "Falso: foi dirigido por Stanley Kubrick.",
  },
  {
    id: 'hw-hard-54',
    text: 'In "Coraline", the Other Mother is voiced by Dakota Fanning.',
    answer: false,
    // pt: "Falso: Dakota Fanning dubla a Coraline; a Outra Mãe é dublada por Teri Hatcher.",
  },
  {
    id: 'hw-hard-55',
    text: 'In "The Nightmare Before Christmas", Jack Skellington is voiced by Tim Burton.',
    answer: false,
    // pt: "Falso: Tim Burton criou a história, mas Jack é dublado por Chris Sarandon.",
  },
  {
    id: 'hw-hard-56',
    text: 'In "Minecraft", bats were added in the Aquatic Update.',
    answer: false,
    // pt: 'Falso: foram adicionados na "Pretty Scary Update"; a Aquatic Update trouxe outros conteúdos.',
  },
  {
    id: 'hw-hard-57',
    text: 'In "Dead by Daylight", Michael Myers is a survivor.',
    answer: false,
    // pt: "Falso: ele é um dos assassinos do jogo.",
  },
  {
    id: 'hw-hard-58',
    text: 'In "Overwatch", the Halloween event is called "Winter Wonderland".',
    answer: false,
    // pt: 'Falso: o evento de Halloween se chama "Halloween Terror"; "Winter Wonderland" é o evento de inverno.',
  },
  {
    id: 'hw-hard-59',
    text: 'In "Pokémon", Mimikyu is a Dragon-type Pokémon.',
    answer: false,
    // pt: "Falso: Mimikyu é dos tipos Fantasma e Fada.",
  },
  {
    id: 'hw-hard-60',
    text: 'In "Five Nights at Freddy\'s", Chica is the rabbit.',
    answer: false,
    // pt: "Falso: Chica é a galinha; Bonnie é o coelho.",
  },
];

export const HALLOWEEN_QUESTIONS: Record<DifficultyId, Question[]> = {
  easy: EASY,
  medium: MEDIUM,
  hard: HARD,
};
