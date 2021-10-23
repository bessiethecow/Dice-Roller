import './App.css';
import React from 'react';
import ReactDice from 'react-dice-complete';
import { useState, useEffect } from 'react';
import 'react-dice-complete/dist/react-dice-complete.css';

const COLORS = [
  '#189AB4',
  '#76B947',
  '#9932CC',
  '#E97451',
  '#CC7722',
  '#EF66EA',
];

const App = () => {
  const [sumOfDice, setSumOfDice] = useState(0);
  const diceColor = COLORS[Math.floor(COLORS.length * Math.random())];

  const prime = (n) => {
    for (let i = 2; i * i <= n; ++i) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };

  const rollDoneCallback = (num) => {
    setSumOfDice(num);
  };

  const rollAll = () => {
    ReactDice.reactDice.rollAll();
  };

  useEffect(() => {
    rollAll();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Bessie's Epic Dice Roller</h1>
      </div>
      <div
        style={{
          marginInline: '20rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ReactDice
          rollTime={2.4}
          margin={30}
          dieSize={75}
          numDice={18}
          defaultRoll={6}
          faceColor={diceColor}
          dotColor={'#FFFFFF'}
          rollDone={rollDoneCallback}
          ref={(dice) => (ReactDice.reactDice = dice)}
        />
      </div>
      <div
        stlye={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <button
            onClick={() => {
              console.log('clicked button');
              rollAll();
            }}
            style={{
              marginTop: '1.3rem',
              backgroundColor: '#38AEE6',
              border: 'none',
              color: 'white',
              borderRadius: '8px',
              padding: '15px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              minWidth: '15%',
              marginLeft: '34%',
            }}
          >
            roll the dang dice
          </button>
          <button
            style={{
              marginTop: '1.3rem',
              backgroundColor: '#FF8A8A',
              border: 'none',
              color: 'white',
              borderRadius: '8px',
              padding: '15px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '2%',
              minWidth: '15%',
              marginRight: '34 %',
            }}
            onClick={() => {
              window.open('https://youtu.be/QtBDL8EiNZo');
            }}
          >
            special shuffle <em>roll</em>
          </button>
        </div>
        <p style={{ fontSize: '2.5rem', textAlign: 'center' }}>
          <b>{sumOfDice}</b>{' '}
          <em>
            {(prime(sumOfDice) && ' (prime) ') ||
              (sumOfDice > 0 && sumOfDice % 3 === 0 && '(multiple of 3)') ||
              ' (nothing special)'}
          </em>
        </p>
      </div>
    </>
  );
};

export default App;
