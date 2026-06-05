import { useEffect, useRef } from "react";

export default function AudioReactiveSection({
  audioRef,
  playing,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!playing || !audioRef.current) return;

    const audio = audioRef.current;

    const audioContext = new (
      window.AudioContext ||
      window.webkitAudioContext
    )();

    const analyser =
      audioContext.createAnalyser();

    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.8;

    const source =
      audioContext.createMediaElementSource(
        audio
      );

    source.connect(analyser);
    analyser.connect(
      audioContext.destination
    );

    const bufferLength =
      analyser.frequencyBinCount;

    const dataArray =
      new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const render = () => {
      animationFrame =
        requestAnimationFrame(render);

      analyser.getByteFrequencyData(
        dataArray
      );

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const barWidth =
        canvas.width / bufferLength;

      let x = 0;

      for (
        let i = 0;
        i < bufferLength;
        i++
      ) {
        const barHeight =
          Math.max(
            dataArray[i] * 2.5,
            5
          );

        const gradient =
          ctx.createLinearGradient(
            0,
            0,
            0,
            canvas.height
          );

        gradient.addColorStop(
          0,
          "#7dd3fc"
        ); // sky-300

        gradient.addColorStop(
          1,
          "#f9a8d4"
        ); // pink-300

        ctx.fillStyle = gradient;

        ctx.fillRect(
          x,
          canvas.height - barHeight,
          barWidth - 2,
          barHeight
        );

        x += barWidth;
      }
    };

    render();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );
      audioContext.close();
    };
  }, [playing, audioRef]);

  return (
    <canvas
      ref={canvasRef}
      width={1600}
      height={180}
      className="
        fixed
        bottom-0
        left-0
        w-full
        h-[180px]
        opacity-30
        pointer-events-none
        z-0
      "
    />
  );
}