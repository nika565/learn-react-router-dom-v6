import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

// Importações do react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Meus componentes
import { About } from './components/About'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Post } from './components/Post'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* Tudo relacionado com o react-router-dom precisa estar entre BrowserRouter */}
    <BrowserRouter>

      {/* Meu componente de menu: ele esta fora de router pois ele serve como
      um componente global, ou seja, ele vai estar em toda a minha aplicação
      mas ainda sim é necessário que ele esteja dentro de um BrowserRouter */}
      <Menu />

      {/* Routes serve para guardar nossas rotas */}
      <Routes>

        {/* Criando uma rota, passando o caminho em que ela vai representar 
        e o componente a ser renderizado */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Utilizando parâmetros na minha rota */}
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts' element={<Post />} />

      </Routes>

    </BrowserRouter>


  </React.StrictMode>,

)
