import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Toggle } from "./ui/toggle";

export default function FilmeCard({ filme }) {



    const nota = filme.vote_average / 2;
    const estrelasCheias = Math.round(nota);
    const estrelasVazias = 5 - estrelasCheias



    return (
        <div className="flex flex-col gap-4 text-center">
            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition duration-300 hover:shadow-orange-500/10 shadow-2xl">

                <img
                    className="w-full h-72 object-cover duration-700 group-hover:scale-110 group-hover:opacity-20 group-hover:blur-[2px]"
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <h2 className="absolute bottom-3 cursor-pointer left-3 right-3 px-2 text-white text-sm text-center hover:text-orange-400 transition">
                    {filme.title}

                </h2>
                <div className="absolute text-[12px] bottom-0 left-0 right-0 p-3
                translate-y-full opcaity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500

                ">
                    <p className="text-white">{filme.overview}</p>
                </div>
                <Button className="absolute inset-0 left-40" variant="none"><Toggle><Heart className="text-pink-600" fill="currentColor" /></Toggle></Button>

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