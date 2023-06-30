import {useRef} from "react";
import Main from "./pages/main/main.tsx";
import Info from "./pages/main/info.tsx";

function App() {

  const targRef = useRef();

  return (
    <div>
      <Main targRef={targRef}/>
      <Info ref={targRef} />
    </div>
  )
}

export default App
