import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import { Link } from "react-router-dom";

export default function FilmeCard({ filme }) {

    const nota = filme.vote_average / 2;
    const estrelasCheias = Math.round(nota);
    const estrelasVazias = 5 - estrelasCheias;

    return (
        <div className="flex flex-col gap-4 text-center">


            <div className="group relative overflow-hidden rounded-2xl 
                             transition duration-500 
                            hover:shadow-orange-500/10 shadow-2xl">


                <img
                    className="w-full h-72 object-cover transition duration-1000 
                               group-hover:opacity-80 group-hover:blur-[2px] group-hover:scale-120"
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                />


                <div className="absolute inset-0 
                                bg-linear-to-t from-black/90 via-black/40 to-transparent" />


                <Button
                    className="absolute inset-0 left-40 z-10"
                    variant="none"
                >
                    <Toggle >
                        <Heart
                            className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                            fill="currentColor"
                        />
                    </Toggle>
                </Button>


                <div className="absolute bottom-0 left-0 right-0 p-4 
                                translate-y-4 
                                group-hover:translate-y-0 
                                transition-all duration-500
                                cursor-pointer">


                    <h2 className="text-white text-sm font-semibold mb-2 group-hover:text-orange-400">
                        {filme.title}
                    </h2>


                    <p className="text-white/70 text-xs leading-snug 
                                  opacity-0 max-h-0 overflow-hidden
                                  group-hover:opacity-100 group-hover:max-h-40
                                  transition-all duration-500">
                        {filme.overview.length > 100
                            ? filme.overview.substring(0, 100) + "..."
                            : filme.overview}
                    </p>
                    <Link to={`/filme/${filme.id}`} className="text-white bg-orange-400 rounded-md  p-1 text-xs mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Ver detalhes
                    </Link>


                </div>
            </div>


            <div className="flex justify-center items-center gap-1 text-yellow-400">
                {[...Array(estrelasCheias)].map((_, i) => (
                    <Star key={`cheia-${i}`} fill="currentColor" size={16} />
                ))}

                {[...Array(estrelasVazias)].map((_, i) => (
                    <Star key={`vazia-${i}`} size={16} />
                ))}
            </div>


            <p className="text-white text-[12px]">
                {nota ? nota.toFixed(1) : "Avaliação indisponível"}
            </p>

        </div>
    );
}