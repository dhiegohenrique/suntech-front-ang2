[![Build Status](https://travis-ci.org/dhiegohenrique/suntech-front.svg?branch=master)](https://travis-ci.org/dhiegohenrique/suntech-front-ang2)

Requisitos:
1) NPM 4.0.5 ou superior (https://www.npmjs.com/get-npm);
2) angular-cli (https://github.com/angular/angular-cli);
3) O backend deve estar rodando (https://github.com/dhiegohenrique/suntech-back);

Para rodar, na pasta raíz, executar:
1) npm install;
2) npm start;
3) a aplicação estará rodando em: http://localhost:4200

Para rodar os testes via [Karma](https://karma-runner.github.io):
1) npm test;

Para rodar os testes end-to-end via [Protractor](http://www.protractortest.org/):
1) O backend deve estar rodando (https://github.com/dhiegohenrique/suntech-back);
2) npm run e2e;

A cada commit, serão realizados testes unitários no Travis. Se passarem, o deploy será realizado em https://suntech-front-ang2.herokuapp.com/