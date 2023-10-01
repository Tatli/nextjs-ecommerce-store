'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('');
  const router = useRouter();

<<<<<<< HEAD
  // If you want to use cookies in a Client with document.cookie (so a node function) you have to use a useEffect
  useEffect(() => {
    // WE DON'T USE document.cookie!!!
    // Don't copy this
    // Get all Cookies
    const allCookies = document.cookie;
    console.log(allCookies);
    // Get specific Cookie "cookieValue" (Split cookies(cookie properties))
    const buttonColor = document.cookie
      .split('; ') // split it at "; "
      .find((row) => row.startsWith('cookieValue=')) // Name of the cookie
      ?.split('=')[1]; // split again and take [1](second) value of split

    // Set an initial color (If buttonColor is undefined, calculate a random one)
    setColor(
      buttonColor || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    );
=======
  // const allCookies = document.cookie;

  // console.log(allCookies);

  useEffect(() => {
    // WE DONT USE document.cookie in next.js!!!
    const allCookies = document.cookie;
    const buttonColor = allCookies
      .split('; ')
      .find((row) => row.startsWith('cookieValue='))
      ?.split('=')[1];
    // -------------------------------

    setColor(buttonColor || Math.floor(Math.random() * 16777215).toString(16));
>>>>>>> f93a6707ca86d859caae8d81ac069cd9aee3b68b
  }, []);

  return (
    <div>
      <button
        className={style.generateButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          // Create new random hex color
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;
          // Set value of cookieValue
          document.cookie = `buttonColor=${newColor}`;
          // Set Color to a random HEX value
<<<<<<< HEAD
=======
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;

          document.cookie = `buttonColor=${newColor}`;
>>>>>>> f93a6707ca86d859caae8d81ac069cd9aee3b68b
          setColor(newColor);
          // Refresh the page
          router.refresh();
        }}
      >
        Generate
      </button>
    </div>
  );
}
