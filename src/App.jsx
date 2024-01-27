import { useEffect, useState } from "react";
import styled from "styled-components";

export default function App() {
  const [data, setData] = useState(null);
  const [newAdvice, setNewAdvice] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [newAdvice]);

  const getNewAdvice = () => setNewAdvice(!newAdvice);

  return (
    <StyledApp>
      <div className="card">
        <p className="advice-number">Advice #{data && data.slip.id}</p>
        <p className="advice-description">"{data && data.slip.advice}"</p>
        <div className="divider">
          <img src="/icons/pattern-divider-desktop.svg" alt="divider icon" />
        </div>
        <button onClick={getNewAdvice}>
          <img src="/icons/icon-dice.svg" alt="Dice icon" />
        </button>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--Dark-Grayish-Blue);
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    position: relative;
    width: 350px;
    height: fit-content;
    padding: 20px;
    background-color: var(--Grayish-Blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2em 2em 6em var(--Dark-Blue);
    border-radius: 10px;

    .advice-number {
      color: var(--Neon-Pink);
      margin: 20px 0;
      font-size: 15px;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .advice-description {
      color: var(--Light-Cyan);
      text-align: center;
      font-size: 30px;
      font-weight: 800;
      line-height: 45px;
    }

    .divider {
      width: 100%;
      margin: 15px 0 45px;

      img {
        width: inherit;
      }
    }

    button {
      position: absolute;
      bottom: -35px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: var(--Neon-Pink);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      cursor: pointer;
      box-shadow: 0 0 3em var(--Neon-Pink);
    }
  }
`;
