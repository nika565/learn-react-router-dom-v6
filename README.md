# React Router DOM

O React Router DOM é uma biblioteca para navegação em aplicativos React que são renderizados no navegador. Ele fornece um conjunto de componentes que ajudam a gerenciar a navegação em uma aplicação de página única (SPA), permitindo que os usuários naveguem entre diferentes partes da aplicação sem a necessidade de recarregar a página.

## Instalação do react-router-dom:

```bash
npm i react-router-dom
```

## Exemplo de uso:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

// Importações do react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Meus componentes
import { About } from './components/About'
import { Home } from './components/Home'
import { Menu } from './components/Menu'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* Tudo relacionado com o react-router-dom precisa estar entre
		BrowserRouter */}
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

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,

)
```

## Link vs tag “a”:

```jsx
import './style.css'

/*
    No react-router-dom, o Link é um componente com o propósito semelhante a tag 
		"<a/>" servindo para navegar entre as páginas da aplicação.

    Mas existe uma diferença relevante no uso de cada um deles:
    -- A tag de âncora <a/> recarrega a página para exibir o contéudo
    -- O componente Link apenas troca de componente sem precisar 
        recarregar a página inteira
    
*/
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
```

## URL Params e Query Strings:

Primeiro, devemos adicionar uma rota especificando para o react-router-dom que vamos usar URL params:

```jsx
<BrowserRouter>

      {/* Routes serve para guardar nossas rotas */}
      <Routes>

        {/* Utilizando parâmetros na minha rota */}
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts' element={<Post />} />

      </Routes>

    </BrowserRouter>
```

Capturando os parâmetros no meu componente:

```jsx
// Hooks para lidar com urlParams e query strings
import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

/*
    Manipulação de parâmetros e query strings com react-router-dom
*/

export const Post = () => {

		// Retorna um objeto com os parâmetros de rota
    const { id } = useParams()

		// Retorna um array com as query strings 
    const [ qs ] = useSearchParams()
     
    return (
        <div>
            <h1>Post {`Param: ${id}`} {`Query String: ${qs.get('page')}`}</h1>
        </div>
    )
}
```