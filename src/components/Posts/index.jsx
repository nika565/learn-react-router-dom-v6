import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

/*
    Manipulação de parâmetros e query strings com react-router-dom
*/

export const Posts = () => {

    const {id} = useParams()
    const [qs] = useSearchParams()
    
    return (
        <div>
            <h1>Post {`Param: ${id}`} {`Query String: ${qs.get('page')}`}</h1>
            <Outlet />
        </div>
    )
}