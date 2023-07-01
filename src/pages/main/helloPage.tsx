import RunningSinusoidAnimation from "../../components/ui/signalsAnimations/sinus.tsx";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import {UiButton} from "../../components/ui/ui-button/ui-button.tsx";

const HelloPage = ({ targRef }) => {

  const scrollTo = () => {
    window.scrollTo({
      top: targRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className='bg-gradient-to-b from-sky-500 via-cyan-500 to-indigo-400 w-screen min-h-screen'>
        <RunningSinusoidAnimation />
        <div className='h-1/8 sm:h-1/3'>
          <h1 className='text-5xl text-center py-2'>Современный подход к Front-end разработке</h1>
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



export default HelloPage;