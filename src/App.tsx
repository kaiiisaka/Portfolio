import Main from "./pages/main/main.tsx";
import AppRouter from "./router/appRouter.tsx";
import Header from "./components/header/header.tsx";

function App() {

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
