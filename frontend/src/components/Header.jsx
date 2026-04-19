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

                    <div className="flex justify-center items-center w-full mt-10">
                        <Link className="bg-gray-200 p-2 w-[95%] rounded-lg" to="/favoritos">Meus filmes</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}