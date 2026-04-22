import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api.js"
import { useLoading } from "../hooks/useLoading.jsx";
import { Loading } from "../components/Loading.jsx";


export default function Filme() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [filme, setFilme] = useState({})

    const { loading, startLoading, stopLoading } = useLoading(true)
    useEffect(() => {
        async function loadFilme() {
            startLoading();
            try {
                const res = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "245b86ade96a31ce140e2999f69d0c7f",
                        language: "pt-BR",
                    }
                })
                setFilme(res.data)
                console.log(res.data)
            } catch (error) {
                navigate("/", { replace: true })
                console.log(error, "Erro ao buscar filme")
                return;
            } finally {
                stopLoading();
            }



        }
        loadFilme();

        return () => {
            console.log("componente desmontado")
        }
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <div className="flex flex-col md:items-start  md:justify-between w-full mt-5  h-screen">
            <div className="flex w-[90%] flex-col md:flex-row md:justify-center items-center gap-5 mt-10 md:w-[80%] mx-auto">

                <img className="" src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`} alt={filme.title} />

                <div className="flex flex-col items-center md:items-baseline gap-5">
                    <h1 className="text-white object-cover">{filme.title}</h1>
                    <p className="text-white text-sm">{filme.overview}</p>
                </div>
            </div>
        </div>
    )
}