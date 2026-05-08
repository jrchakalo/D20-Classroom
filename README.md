<div align="center">
   <h1>🎲 D20 Classroom</h1>
   <p>
      <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js" />
      <img src="https://img.shields.io/badge/React-18-61dafb" alt="React" />
      <img src="https://img.shields.io/badge/TypeScript-5-3178c6" alt="TypeScript" />
      <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8" alt="TailwindCSS" />
   </p>
</div>

## Sobre
Uma aplicação interativa de "Verdadeiro ou Falso" desenvolvida para servir como dinâmica de quebra-gelo em aulas de programação para crianças (7 a 14 anos). A aplicação é integrada com o mundo físico: os alunos rolam um dado de 20 lados (D20) na vida real, e o professor seleciona o número correspondente na tela para revelar uma curiosidade aleatória.

## Funcionalidades
- **Dashboard Interativo:** Grid lúdico e responsivo numerado de 1 a 20.
- **Sistema de Aleatoriedade:** Perguntas sorteadas aleatoriamente do banco de dados local, com lógica para evitar repetição imediata.
- **Feedback Audiovisual:** Efeitos sonoros e visuais (cores e animações) distintos para respostas corretas e incorretas.
- **Gerenciamento de Áudio:** Trilha sonora de fundo em loop com controle de mute/unmute.
- **UI/UX Infantil:** Interface colorida, amigável e com elementos de gamificação.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

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

## Licença
Este projeto está sob a licença MIT. Veja a [LICENSE](LICENSE).

## Autor
[<img src="https://avatars.githubusercontent.com/jrchakalo?v=4" width=115><br><sub>Júnior Silva</sub>](https://github.com/jrchakalo)
