import axios from "axios"
import { useEffect, useState } from "react"

export function Teste() {

    const [filmes, setFilmes] = useState([])
    async function getFilmes() {
        try {
            const res = await axios({
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/movie",
                params: {
                    api_key: "245b86ade96a31ce140e2999f69d0c7f",
                    language: "pt-BR",
                }
            });

            console.log(res.data.results);
            setFilmes(res.data.results);
        } catch (error) {
            console.log(error, "Erro ao buscar filmes");
        }

    }
    useEffect(() => {
        getFilmes();
    }, [])

    return (
        <div className="flex bg-black min-h-screen">
            <h1 className="text-2xl">Lista de filmes</h1>
            <div className="grid grid-cols-2 gap-4 p-6">
                {filmes.map((filme) => {
                    return (
                        <div key={filme.id}>
                            <img className="w-full h-72 object-cover" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                            <div>
                                <h2>{filme.title}</h2>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}