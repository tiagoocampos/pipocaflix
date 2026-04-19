import axios from "axios"
import { useEffect, useState } from "react"

export function Home() {

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
        <div className="flex w-full justify-center flex-col items-center bg-black min-h-screen">
            <h1 className="text-2xl text-white">Lista de filmes</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-15 p-6">
                {filmes.map((filme) => {
                    return (
                        <div className="flex flex-col gap-5 text-center">
                            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition shadow-2xl duration-300 hover:shadow-orange-500/10" key={filme.id}>
                                <img className="w-full h-72 object-cover duration-700 group-hover:scale-110" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />

                                <div className="absolute inset-0 bg-linear-to-t  from-black/80 via-black/10 to-transparent" />
                                <h2 className="text-white text-sm cursor-pointer bottom-3 hover:text-orange-400 duration-200 left-3 right-3 text-center absolute">{filme.title}</h2>

                            </div>
                            <p className="text-white text-sm">Avaliação: {filme.vote_average.toFixed(1)}</p>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}