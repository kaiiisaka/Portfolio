import Header from "../../components/header/header.tsx";
import RunningSinusoidAnimation from "../../components/ui/signalsAnimations/sinus.tsx";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const Main = ({ targRef }) => {

  const scrollTo = () => {
    window.scrollTo({
      top: targRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className='bg-gradient-to-b from-sky-500 via-cyan-500 to-indigo-400 w-screen min-h-screen'>
        <Header />
        <RunningSinusoidAnimation />
        <div className='h-1/8 sm:h-1/3'>
          <h1 className='text-5xl text-center py-2'>Innovations in frontend development</h1>
          <Marquee className='text-3xl justify-between pt-4 opacity-30' direction={"right"} speed={100}>
            | HTML | CSS | JavaScript | TypeScript | React.JS | Redux | Redux Toolkit | Jest |
            TailwindCSS | Styled.components | Git | Unix systems | Bash
          </Marquee>
        </div>
        <RunningSinusoidAnimation />
        <h3 className='text-2xl text-center'>
          <UiButton onClick={scrollTo}>Scroll down ↓</UiButton>
        </h3>
      </div>
    </div>
  );
};

const UiButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    top: 90%;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #000;
    transform: translate(-50%);
    transition: width 0.3s ease-in-out;
  }
  
  &:hover::after {
    width: 100%;
  }
`

export default Main;