
import { useEffect, useState } from "react"
import api from "../services/api";

export default function Filme() {
    const [filmes, setFilmes] = useState();
    useEffect(() => {
        async function loadFilmes() {
            const res = api.get("")
        }

        loadFilmes();
    }, [])

    return (
        <div>
            <h1>Pagina de Filmes</h1>
        </div>
    )
}