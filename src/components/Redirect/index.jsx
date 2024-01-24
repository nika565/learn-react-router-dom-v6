import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Redirect = () => {

    // Estado para representar os segundos
    const [time, setTime] = useState(3);
    const timeout = useRef(0)

    // Serve para redirecionar a página
    const navigate = useNavigate()

    useEffect(() => {

        // Mudando o valor do temporizador
        timeout.current = setTimeout(() => {
            setTime(t => t-1)
        }, 1000)

        // Quando atingir zero, o usuário será redirecionado
        if (time <= 0) {
            navigate('/about', {
                state: `This is the state: ${Math.random()}`,
            })
        }
        
        // Parando o contador
        return () => {
            clearTimeout(timeout.current)
        }

    }, [time])

    return (
        <div>
            <h1>Você sera redirecionado em: {time}</h1>
        </div>
    )
}