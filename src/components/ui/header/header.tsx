import {useEffect, useState} from "react";

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
      <div className='gap-3 flex flex-row justify-around'>
        <h2>Alexandr Melnikov</h2>
        <div>{date.toLocaleDateString()}</div>
        <div>{date.toLocaleTimeString()}</div>
      </div>
    );
};

export default Header;