import React, { useRef, useEffect } from 'react';

const SawtoothWaveAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let amplitude = canvas.height/2;
    let frequency = 0.5;
    let speed = 1.5;
    let y = canvas.height / 2;
    let offsetX = 0;

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 5) {
        const offsetY = ((x + offsetX) % amplitude) * frequency;
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

export default SawtoothWaveAnimation;
