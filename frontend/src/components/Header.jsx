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
import { Menu } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="flex justify-around bg-black w-full h-15 items-center text-white">
            <Link className="text-3xl" to="/">Pipoca<span className="text-orange-500">Flix</span></Link>
            <Link className="hidden md:flex" to="/favoritos">Meus filmes</Link>
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
                                <SheetClose side="left">Fechar</SheetClose>
                                <SheetHeader className="flex gap-10">
                                    <div>
                                        <SheetTitle>Entrar</SheetTitle>
                                        <SheetDescription>Faça login na sua conta</SheetDescription>
                                    </div>
                                    <Input placeholder="Email" />
                                    <Input placeholder="Senha" />
                                    <Button className="bg-orange-500">Fazer login</Button>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </SheetContent>
            </Sheet>


        </header>
    )
}