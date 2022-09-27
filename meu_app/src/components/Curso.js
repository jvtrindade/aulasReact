import React from 'react'

import {Turmas} from './Turmas'

// const pessoa = {nome: 'João', idade: 17}
// const {nome: nomeCompleto, idade} = pessoa // faz a mesma coisa que: const nome = pessoa.nome; const idade = pessoa.idade. A ORDEM NÃO IMPORTA, MAS PRECISA USAR O MESMO NOME. O primeiro caso tá renomeando

// const carro = ['Fiat', '500']
// const [marca, modelo] = carro // A ORDEM IMPORTA, então marca recebe o primeiro, modelo o segundo 

export const Curso = ({nome, turmas}) => 
<>
    <div>{nome}</div> {/* o que está nos parametros é um objeto e vem de atributos lá no index geral. Esse nome vem do atributo  */}
    
    {turmas.length > 0 && <Turmas turmas={turmas}/>}
    {turmas.length === 0 && <div>Não possui turmas</div>}



    {/* {turmas.length > 0 && (<ul> // assim é o if
        {turmas.map(turma => <li key={turma}>{turma}</li>)} // para cada turma, ele coloca o nome que vem lá do atributo na tag. O key é tipo um id
    </ul>)} */}
    
</>