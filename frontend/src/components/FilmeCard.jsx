import { Star } from "lucide-react";

export default function FilmeCard({ filme }) {

    const nota = filme.vote_average / 2;
    const estrelasCheias = Math.floor(nota);
    const temMeiaEstrela = nota % 1 >= 0.5;
    const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0);

    return (
        <div className="flex flex-col gap-4 text-center">
            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition duration-300 hover:shadow-orange-500/10 shadow-2xl">

                <img
                    className="w-full h-72 object-cover duration-700 group-hover:scale-110"
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <h2 className="absolute bottom-3 left-3 right-3 px-2 text-white text-sm text-center hover:text-orange-400 transition">
                    {filme.title}
                </h2>
            </div>

            {/* ⭐ estrelas */}
            <div className="flex justify-center items-center gap-1 text-yellow-400">

                {/* estrelas cheias */}
                {[...Array(estrelasCheias)].map((_, i) => (
                    <Star key={`cheia-${i}`} fill="currentColor" size={16} />
                ))}

                {/* meia estrela REAL */}
                {temMeiaEstrela && (
                    <div className="relative w-4 h-4">
                        <Star className="absolute text-yellow-400" size={16} />
                        <div className="absolute overflow-hidden w-1/2">
                            <Star fill="currentColor" className="text-yellow-400" size={16} />
                        </div>
                    </div>
                )}

                {/* estrelas vazias */}
                {[...Array(estrelasVazias)].map((_, i) => (
                    <Star key={`vazia-${i}`} size={16} />
                ))}
            </div>

            {/* nota numérica */}
            <p className="text-white text-sm">
                {filme.vote_average?.toFixed(1) || "N/A"}
            </p>
        </div>
    );
}