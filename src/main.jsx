import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

// Importações do react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Meus componentes
import { About } from './components/About'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
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

        {/* Rotas aninhadas -> caso a rota acessada seja posts, o Componente 
        Posts será exibido */}
        <Route path='/posts' element={<Posts />}>
          
          {/* Caso voce passe algum valor dentro dessa rota, o componente Post
          que representa um uníco post será renderizado. */}

          <Route path=':id' element={<Post />} />
        </Route>

        {/* Redirecionamento */}
        <Route path='/redirect' element={<Redirect />} />

        {/* Rotá para páginas não encontradas */}
        <Route path='*' element={<NotFound />} />
        

      </Routes>

    </BrowserRouter>


  </React.StrictMode>,

)
