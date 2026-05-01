import { toast } from "sonner";

export function saveFilme(filme){
    
    const saved = JSON.parse(localStorage.getItem("savedFilmes")) || []

    const exists = saved.some(item => item.id === filme.id);

    if(exists){
        console.log("Filme ja esta salvo!")
        toast.error("o filme já esta salvo nos seus favoritos", {position: "top-center"})
        return;
    }

    saved.push(filme);
    localStorage.setItem("savedFilmes", JSON.stringify(saved))
    console.log("FILME SALVO", filme)
    toast.success("Adicionado aos favoritos", {position: "top-center"})
   
}