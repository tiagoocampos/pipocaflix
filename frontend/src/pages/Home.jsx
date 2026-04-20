import axios from "axios"
import { useEffect, useState } from "react"
import FilmeCard from "../components/FilmeCard";
import { Spinner } from "../components/ui/spinner";

export function Home() {
    const [loading, setLoading] = useState(true);
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
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        getFilmes();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center h-screen items-center mx-auto">
                <Spinner className="text-white size-20" />
            </div>

        )
    }

    return (
        <div className="flex w-full justify-center flex-col items-center bg-black min-h-screen">
            <h1 className="text-2xl text-white">Lista de filmes</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-15 p-6">
                {filmes.map((filme) => {

                    return (
                        <FilmeCard key={filme.id} filme={filme} />


                    )
                })}
            </div>
        </div>
    )
}