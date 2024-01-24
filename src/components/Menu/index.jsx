import './style.css'

/*
    No react-router-dom o Link é um componente com o propósito semelhante a tag <a/> do HTML
    servindo para navegar entre as páginas da aplicação.

    Mas existe uma diferença relevante no uso de cada um deles:
    -- A tag de âncora <a/> recarrega a página para exibir o contéudo
    -- O compoente Link apenas troca de componente sem precisar 
        recarregar a página inteira
    
*/
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/posts/10'>Post 10</Link></li>
            </ul>
        </nav>
    )
}