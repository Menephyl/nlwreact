interface MeuBotaoProps{
  texto: string
}

function MeuBotao(props:MeuBotaoProps){
  return <button className="button">{props.texto}</button>

}

export function App() {
return(
  <div>
   <MeuBotao texto="Clique Aqui"/>
   <MeuBotao texto="Botao 2"/>
   <MeuBotao texto="Botao 3"/>
   <MeuBotao texto="oi"/>
  </div>
  )
}
  // return <h1>Hello World</h1>


    //  return(
//   <div>
//     <MeuBotao/>
//     <MeuBotao/>
//     <MeuBotao/>
//     <MeuBotao/>
//     <MeuBotao/>
//     <MeuBotao/>
//     <MeuBotao/>
//   </div>
//   )
 


