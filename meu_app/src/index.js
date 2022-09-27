import React from 'react';
import ReactDOM from 'react-dom/client';

// const Soma = (a,b) => ({soma: a+b}) // coloca parênteses para que ele entenda que chaves é um objeto. Arrow Function não aceita 'this'. 

// const Alerta = () => <div>Olá João Ryan! Por que tu colocou aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?</div>
// // mesma coisa que uma função (mas se tiver só uma coisa, ele entende que depois do => é um return)




// import NomeQualquer from './components/Alerta' // aqui ele importa o principal (o export default Alerta nesse caso). Pode colocar qualquer nome para o arquivo
// import {Alerta2} from './components/Alerta' // aqui ele importa o específico. Tem que usar o msm nome e usar entre chaves. Se quiser cahamar de outro nome tem que usar assim: {Alerta 2 as Alerta}
// import NomeQualquer, {Alerta2} from './components/Alerta' // aqui ele pega o default e o outro
import {Alerta2, Curso} from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*componente funcional -> aparece o que foi colocado na function*/}
    <Alerta2/>
    <Curso turmas={['1º INFO', '2º INFO', '3º INFO']} nome="Técnico em Informática para a Internet"/> {/*passa esse atributo para a função criada no Curso.js*/}
    <Curso turmas={[]} nome=":( Técnico em Agropecuária :("/>
  </React.StrictMode>
);