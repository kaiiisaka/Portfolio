import {useEffect, useState} from "react";
import styled from "styled-components";

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
      <div className='gap-3 flex flex-row justify-between md:px-2 align-middle pt-2 font-semibold'>

        <h2 className='ml-6'>Alexandr <br/> Melnikov</h2>

        <Menu className='invisible sm:visible flex-col sm:flex-row'>
          <a>Главная</a>
          <a>Проекты</a>
          <a>Информация</a>
        </Menu>

        <DateTime>
          <div>{date.toLocaleDateString()}</div>
          <div>{date.toLocaleTimeString()}</div>
        </DateTime>
      </div>
    );
};

const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const Menu = styled.div`
  gap: 30px;
  display: inline-flex;
  justify-items: center;
  align-items: center;
`

export default Header;