import {useEffect, useState} from 'react'
import './Game.css'

function Game() {
  const [position, setPosition] = useState<number>(-300);
  let direction = 1;

  useEffect(() => {

    const calcPosition = () => {
      setPosition((prev) => {
        if (prev >= 1260) {
          direction = -1;
        }
        if (prev <= 460) {
          direction = 1;
        }
        const x = prev + direction * 4;
        console.log("x=", x, direction);
        return x;
      });
    }
    const interval = setInterval(() => {
      calcPosition();
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
      <>
        <div style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "#000",
          width: "1920px",
          height: "1080px",
          border: "#333 2px solid "
        }}>
          <div style={{
            animation: `rot 3500ms linear infinite`,
            position: "absolute",
            top: "350px",
            left: `${position}px`
          }}>
            <img src="imp.png"/>
            <strong><p style={{color: "green"}}>x:{position}</p></strong>
          </div>
        </div>
      </>
  )
}

export default Game
