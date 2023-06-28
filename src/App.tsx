import Header from "./components/ui/header/header.tsx";
import RunningSinusoidAnimation from "./components/ui/signalsAnimations/sinus.tsx";
import SawtoothWaveAnimation from "./components/ui/signalsAnimations/saw.tsx";

function App() {

  return (
    <body className='bg-gradient-to-br from-sky-500 to-indigo-500 text-white min-h-screen max-h-full w-screen'>
        <Header />
        <hr/>
    <RunningSinusoidAnimation/>
    <SawtoothWaveAnimation />
    </body>
  )
}

export default App
