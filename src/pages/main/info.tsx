import {forwardRef} from 'react';

const Info = forwardRef((props, ref) => {

  return (
    <div ref={ref} className='h-screen'>
      <h2>Какой-то контент будет здесь</h2>
    </div>
  );
});

export default Info;