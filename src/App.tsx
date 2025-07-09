import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CardUsuario from './component/CardUsuario'
import { Painel } from './component/Painel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardUsuario nome={"Adriano"} tipoUsuario={'admin'} />
      {/* <Painel nome={"Lucimaria"} /> */}

      {/* //1º forma de fazer */}
      <Painel titulo="Notícias">
        <img src="caminhoDaImagem.png" alt="texto alternativo" />
      </Painel>

{/* //2ª forma de fazer */}

      <Painel
        titulo="Notícias"
        children={<img src="caminhoDaImagem.png" alt="texto alternativo" />}
      />

{/* //AS duas maneiras funcionam */}
    </>
  )
}

export default App
