import { useEffect, useState } from "react"
import api from "../services/api";

export default function Home() {

    const [filmes, setFilmes] = useState();
    useEffect(() => {
        async function loadFilmes() {
            const res = api.get("movie/now_playing", {
                params: {
                    api_key: "245b86ade96a31ce140e2999f69d0c7f",
                    language: "pt-BR",
                    page: 1
                }
            })
            console.log(res);
        }

        loadFilmes();
    }, [])
    return (
        <div>
            <h1>Bem-vindo a página Home</h1>

        </div>
    )
}