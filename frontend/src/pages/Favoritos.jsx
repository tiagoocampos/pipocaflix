import { useEffect, useState } from "react"
import FilmeCard from "../components/FilmeCard"

export function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const savedFilmes = JSON.parse(localStorage.getItem("savedFilmes")) || []
        setFilmes(savedFilmes)
    }, [])

    if (filmes.length === 0) {
        return (
            <div className="flex w-full justify-center flex-col items-center bg-black min-h-screen">
                <h1 className="text-2xl text-white">Seus favoritos</h1>
                <p className="text-white/70 mt-4">Nenhum filme salvo nos favoritos ainda.</p>
            </div>
        )
    }

    return (
        <div className="flex w-full justify-center flex-col items-center bg-black min-h-screen">
            <h1 className="text-2xl text-white p-6">Seus favoritos</h1>
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
