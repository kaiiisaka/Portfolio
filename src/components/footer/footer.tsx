

const Footer = () => {
  return (
    <div className='w-screen flex flex-col justify-between bg-blue-400'>
      <hr className='w-screen'/>
      <div className='py-4 px-6 flex flex-row justify-between'>
      <text>Александр Мельников</text>
        <a>{new Date().getFullYear()}</a>
      </div>
    </div>
  );
};

export default Footer;