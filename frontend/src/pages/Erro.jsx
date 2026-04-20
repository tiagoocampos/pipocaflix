import { Link } from "react-router-dom";

export function Erro() {
    return (
        <div className="text-white gap-5 w-full flex-col h-screen flex justify-center items-center">
            <div className="text-center">
                <h2>404</h2>
                <h2>Ops! Página não encontrada</h2>
            </div>
            <Link className="text-orange-500" to="/">Voltar para a home</Link>
        </div>
    )
}