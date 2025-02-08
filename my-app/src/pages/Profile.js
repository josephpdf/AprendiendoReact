import { useParams } from "react-router-dom"

export default function Profile() {
    const { name } = useParams();
    return (
        <div>
            <p>Desde perfil, con el nombre de {name}</p>
        </div>
    )
}