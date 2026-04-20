import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./pages/Filme"
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { Erro } from "./pages/Erro";


export function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Erro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}