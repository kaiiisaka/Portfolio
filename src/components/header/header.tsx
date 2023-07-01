import {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {UiButton} from "../ui/ui-button/ui-button.tsx";


const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },[])

    return (
      <header className='flex flex-row justify-between md:px-2 align-middle pt-2 font-semibold absolute w-screen'>

        <h2 className='w-2/3 sm:w-2/12 justify-center items-center'>
          <Link to='/'>{'< Александр Мельников />'}</Link>
        </h2>

        <Menu className='hidden sm:flex sm:flex-row w-4/12 justify-center items-center'>
          <Link to='/'>
            <UiButton>Главная</UiButton>
          </Link>
          <Link to='/projects'>
            <UiButton>Проекты</UiButton>
          </Link>
          <Link to='/about'>
            <UiButton>Информация</UiButton>
          </Link>
        </Menu>

        <DateTime className='w-1/3 sm:w-2/12'>
          <div>{date.toLocaleDateString()}</div>
          <div>{date.toLocaleTimeString()}</div>
        </DateTime>
      </header>
    );
};

const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  cursor: default;
`

const Menu = styled.div`
  gap: 30px;
  justify-items: center;
  align-items: center;
`

export default Header;