<div align="center">
   <h1>🎲 D20 Classroom</h1>
   <p>
      <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js" />
      <img src="https://img.shields.io/badge/React-19-61dafb" alt="React" />
      <img src="https://img.shields.io/badge/TypeScript-5-3178c6" alt="TypeScript" />
      <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8" alt="TailwindCSS" />
   </p>
</div>

## Sobre
Uma aplicação interativa de "Verdadeiro ou Falso" desenvolvida para servir como dinâmica de quebra-gelo em aulas de programação para crianças (7 a 14 anos). A aplicação é integrada com o mundo físico: os alunos rolam um dado de 20 lados (D20) na vida real, e o professor seleciona o número correspondente na tela para revelar uma curiosidade aleatória.

## Modos de jogo
- **Halloween Mode:** perguntas em inglês sobre Halloween, com filmes, cultura pop, jogos e folclore brasileiro. O baralho é dividido em **Easy**, **Medium** e **Hard**, com 60 perguntas por dificuldade, 20 em cada um dos três níveis internos (*Starter*, *Core* e *Challenge*), sempre balanceado em 30 verdadeiras e 30 falsas.
- **Classroom Classic:** o baralho original de temas variados (jogos, tecnologia, anime e curiosidades), em português.

### Competição de Halloween
No modo Halloween, o professor pode escolher entre o **D20 Roll** e a **Competition**:

- Cadastre os alunos pelo nome (é possível colar a lista inteira separada por vírgulas ou quebras de linha).
- Escolha a ordem dos alunos: **em ordem** ou **aleatória** a cada fase.
- Cada fase faz **uma pergunta por aluno**. Quem acerta avança; quem erra é eliminado.
- A competição termina quando resta um campeão, quando todos são eliminados ou quando a última fase termina com mais de um sobrevivente (co-campeões).
- A lista de alunos e as configurações ficam salvas no navegador para a próxima aula.

**Escadas de dificuldade:**
- **Easy:** Easy Starter → Easy Core → Easy Challenge → Medium Starter → Medium Core.
- **Medium:** Medium Starter → Medium Core → Medium Challenge → Hard Starter.
- **Hard:** Hard Starter → Hard Core → Hard Challenge.
- **Progressive:** 2 ou 3 rodadas em cada dificuldade, começando no Easy e terminando no Hard.

O baralho de Halloween foi revisado para crianças e pré-adolescentes brasileiros: as perguntas de ano de lançamento de filmes/livros foram removidas, o contexto foi ajustado e foram incluídas referências ao folclore e à cultura do Brasil, como Saci, Curupira, Iara, Boitatá, Cuca, mula-sem-cabeça, boto e Dia do Saci.

## Funcionalidades
- **Dashboard Interativo:** grid lúdico e responsivo numerado de 1 a 20. Os números podem se repetir, como em uma rolagem real de D20.
- **Dificuldades:** baralhos Easy, Medium e Hard com 60 perguntas cada, balanceados em 30 verdadeiras e 30 falsas, com três níveis internos por baralho.
- **Competição:** modo knockout para a sala, com cadastro de alunos, escadas de dificuldade, ordem sequencial ou aleatória e tela de campeão.
- **Curiosidades:** toda pergunta do modo Halloween mostra uma explicação curta ("Did you know?") depois da resposta.
- **Sistema de Aleatoriedade:** perguntas sorteadas sem repetição até o baralho acabar.
- **Feedback Audiovisual:** efeitos sonoros e visuais (cores e animações) distintos para respostas corretas e incorretas.
- **Tema de Halloween:** fundo animado com lua, morcegos com asas batendo, estrelas, neblina e abóbora.
- **Atalhos de teclado:** `T`/`F` para responder, `Enter` para continuar e `Esc` para fechar.
- **Acessibilidade:** foco visível, suporte a `prefers-reduced-motion` e navegação por teclado.
- **Gerenciamento de Áudio:** música tema de Halloween, efeitos sonoros e controle de volume com mute/unmute. O volume escolhido fica salvo no navegador.
- **UI/UX Infantil:** interface colorida, amigável e com elementos de gamificação.

## Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Motion + canvas-confetti

## Requisitos
- Node.js 18+

## Variáveis de ambiente
Nenhuma variável de ambiente é estritamente necessária para rodar este projeto localmente, pois o banco de perguntas é gerenciado internamente (via array).

## Como rodar localmente
1. Instale as dependências: `npm install` ou `yarn install`
2. Execute o servidor de desenvolvimento: `npm run dev`
3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts
- `npm run dev` - Inicia o servidor de desenvolvimento.
- `npm run build` - Cria a versão de produção.
- `npm run start` - Inicia o servidor de produção.

## Créditos
- Música do modo Halloween: ["Danse Macabre - Busy Strings"](https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100556), de Kevin MacLeod (incompetech.com), licenciada sob [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## Licença
Este projeto está sob a licença MIT. Veja a [LICENSE](LICENSE).

## Autor
[<img src="https://avatars.githubusercontent.com/jrchakalo?v=4" width=115><br><sub>Júnior Silva</sub>](https://github.com/jrchakalo)
