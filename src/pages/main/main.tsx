import {useRef} from "react";
import HelloPage from "./helloPage.tsx";
import Info from "./info.tsx";
import Footer from "../../components/footer/footer.tsx";

function Main() {

  const targRef = useRef();

  return (
    <div>
      <HelloPage targRef={targRef}/>
      <Info ref={targRef} />
      <Footer />
    </div>
  )
}

export default Main
