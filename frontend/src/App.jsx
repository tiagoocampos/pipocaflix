import { Header } from "./components/Header"
import { RoutesApp } from "./routes"


function App() {


  return (
    <div className="flex justify-center items-center w-full flex-col">
      <Header />
      <RoutesApp />
    </div>
  )
}

export default App
