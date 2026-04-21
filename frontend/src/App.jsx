
import { Toaster } from "sonner"
import Header from "./components/Header"
import { RoutesApp } from "./routes"



function App() {


  return (
    <div className="flex justify-center items-center w-full flex-col bg-black">
      <Toaster />
      <RoutesApp />

    </div>
  )
}

export default App
