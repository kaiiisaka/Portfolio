import {forwardRef} from 'react';
import photo from '../../assets/my_photo.jpeg'

const Info = forwardRef((props, ref) => {

  return (
    <div ref={ref} className='min-h-screen w-screen flex
    flex-col justify-start sm:justify-around
    items-center gap-2 bg-gradient-to-b from-indigo-400 via-teal-500 to-blue-400 pb-3'>
      <h2 className='text-2xl md:text-4xl mt-4 sm:mt-0 h-1/6'>
        Обо мне
      </h2>
      <div className='flex flex-col sm:flex-row gap-2 items-center justify-around h-4/6'>
        <div className='w-3/6 sm:h-1/2 sm:w-1/3 flex items-center mt-2 sm:mt-0'>
          <img src={photo} alt='Me' className='rounded-2xl h-fit w-fit border-cyan-700 border-2'/>
        </div>
        <div className='w-11/12 sm:w-1/2 h-1/2 flex items-center justify-center'>
          <p className='border-cyan-700 border-2 rounded-2xl p-2'>
            Привет! Меня зовут Александр, мне 22 года, я Frontend Web разработчик.
            Рад приветствовать на моей странице! Имею более года опыта коммерческой
            разработки, до которой занимался развитием своих навыков в небольших pet
            проектах, а также решениями задач на leetcode.<br/>
            Мой основной стек: <br/>
            <ol style={{listStyleType: "disc", marginLeft: '1rem'}}>
              <li>React.js;</li>
              <li>TypeScript;</li>
              <li>TailwindCSS;</li>
              <li>Styled.components;</li>
              <li>Redux;</li>
              <li>Vite.</li>
            </ol>
            Также я активно изучаю Node.js и развиваю навыки решения различных задач.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Info;