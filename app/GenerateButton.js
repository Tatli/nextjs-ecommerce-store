'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('123fee');
  const router = useRouter();

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
  }, []);

  return (
    <div>
      <button
        className={style.generateButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          // Set Color to a random HEX value
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;

          document.cookie = `buttonColor=${newColor}`;
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
