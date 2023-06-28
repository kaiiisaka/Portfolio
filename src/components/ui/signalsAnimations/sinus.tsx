import React, { useRef, useEffect } from 'react';

const RunningSinusoidAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = canvas.getContext('2d');

    const amplitude = canvas.height / 5;
    const frequency = 0.02;
    const speed = 1.5;
    const y = canvas.height / 2;
    let offsetX = 0;

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 5) {
        const offsetY = Math.sin((x + offsetX) * frequency) * amplitude;
        ctx.lineTo(x, y + offsetY);
      }

      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      offsetX += speed;

      requestAnimationFrame(drawFrame);
    };

    drawFrame();
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight/3} />;
};

export default RunningSinusoidAnimation;
