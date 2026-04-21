import { Link } from "react-router-dom";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowLeft, Menu } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

export default function Header() {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem("user");
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error(error)
            return null
        }

    });

    const headers = { "Content-Type": "application/json" }

    const [emailLogin, setEmailLogin] = useState("")
    console.log(emailLogin)
    const [passwordLogin, setPasswordLogin] = useState("")

    async function login() {
        if (emailLogin === "") {
            toast.error("Digite seu email", { position: "top-center" })
            return
        }

        if (passwordLogin === "") {
            toast.error("Digite sua senha", { position: "top-center" })
            return
        }
        setLoading(true)

        try {

            const res = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    email: emailLogin,
                    password: passwordLogin
                })
            })
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message, { position: "top-center" })
                setPasswordLogin("")
                return
            }
            console.log(data)


            setUser(data.user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            toast.success(data.message, { position: "top-center" })
            console.log(data.message)
        } catch (error) {
            console.error("Erro no servidor", error)
            toast.error("Erro ao realizar o login", { position: "top-center" })
        } finally {
            setLoading(false)
        }
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null)
    }

    return (
        <header className="flex justify-around bg-black w-full h-15 items-center text-white">
            <Link className="text-3xl" to="/">Pipoca<span className="text-orange-500">Flix</span></Link>

            {user ? (
                <div className="flex items-center gap-5">
                    <Link className="hidden md:flex" to="/favoritos">Meus filmes</Link>
                    <Button onClick={logout} className="hidden md:flex">Sair</Button>
                    <Sheet>
                        <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="bg-black text-white">
                                <SheetTitle><Link className="text-2xl text-white" to="/">Pipoca<span className="text-orange-500">Flix</span></Link></SheetTitle>
                                <SheetDescription>Navegação</SheetDescription>
                            </SheetHeader>

                            <div className="flex justify-center flex-col items-center  w-full mt-10">
                                <Button>Sair</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            ) : (
                <>
                    <div className="flex gap-10 items-center">

                        <Sheet>
                            <SheetTrigger className="bg-orange-500 hidden md:flex p-2 cursor-pointer duration-200 hover:bg-orange-300 text-white rounded-2xl">Entrar</SheetTrigger>
                            <SheetContent>
                                <SheetClose side="left">Fechar</SheetClose>
                                <SheetHeader className="flex gap-10">
                                    <div>
                                        <SheetTitle>Entrar</SheetTitle>
                                        <SheetDescription>Faça login na sua conta</SheetDescription>
                                    </div>
                                    <Input value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} type="email" placeholder="Email" />
                                    <Input value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} type="password" placeholder="Senha" />
                                    {loading && <div className="flex mx-auto items-center gap-2"><Spinner /><span>Carregando...</span></div>}

                                    <Button onClick={login} className="bg-orange-500 hover:bg-orange-300 cursor-pointer">Fazer login</Button>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                        <Sheet>
                            <SheetTrigger className="text-orange-500 hidden md:flex p-2 cursor-pointer  rounded-2xl">Criar conta</SheetTrigger>
                            <SheetContent>
                                <SheetClose side="left">Fechar</SheetClose>
                                <SheetHeader className="flex gap-10">
                                    <div>
                                        <SheetTitle>Criar conta</SheetTitle>
                                        <SheetDescription>Crie sua conta</SheetDescription>
                                    </div>
                                    <Input placeholder="Digite seu nome" />
                                    <Input placeholder="Digite seu email" />
                                    <Input placeholder="Digite sua senha" />
                                    <Input placeholder="Confirme sua senha" />
                                    <Button className="bg-orange-500">Fazer login</Button>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>


                    <Sheet>
                        <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="bg-black text-white">
                                <SheetTitle><Link className="text-2xl text-white" to="/">Pipoca<span className="text-orange-500">Flix</span></Link></SheetTitle>
                                <SheetDescription>Navegação</SheetDescription>
                            </SheetHeader>

                            <div className="flex justify-center flex-col items-center w-full mt-10">
                                {/* <Link className="bg-orange-500 text-white text-center p-2 w-[95%] rounded-lg" to="/favoritos">Meus filmes</Link> */}

                                <Sheet>
                                    <SheetTrigger className="bg-orange-500 p-2 w-[90%] cursor-pointer duration-200 hover:bg-orange-300 text-white rounded-2xl">Entrar</SheetTrigger>
                                    <SheetContent>
                                        <SheetClose side="left"><ArrowLeft /></SheetClose>
                                        <SheetHeader className="flex gap-10">
                                            <div>
                                                <SheetTitle>Entrar</SheetTitle>
                                                <SheetDescription>Faça login na sua conta</SheetDescription>
                                            </div>
                                            <Input placeholder="Email" />
                                            <Input placeholder="Senha" />
                                            <Button onClick={login} className="bg-orange-500">Fazer login</Button>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </SheetContent>
                    </Sheet>
                </>
            )}


        </header>
    )
}