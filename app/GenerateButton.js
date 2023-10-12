'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GenerateButton() {
  const [color, setColor] = useState('');
  const router = useRouter();

  // // If you want to use cookies in a Client with document.cookie (so a node function) you have to use a useEffect
  //
  // useEffect(() => {
  //   // WE DON'T USE document.cookie!!!
  //   // DON'T COPY THIS!!!
  //
  //   // Get all Cookies
  //   const allCookies = document.cookie;
  //   console.log(allCookies);
  //   // Get specific Cookie "cookieValue" (Split cookies(cookie properties))
  //   const buttonColor = document.cookie
  //     .split('; ') // split it at "; "
  //     .find((row) => row.startsWith('cookieValue=')) // Name of the cookie
  //     ?.split('=')[1]; // split again and take [1](second) value of split

  //   // Set an initial color (If buttonColor is undefined, calculate a random one)
  //   setColor(
  //     buttonColor || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  //   );
  // }, []);

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          // Create new random hex color
          const newColor = `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`;
          // Set value of buttonColor
          document.cookie = `buttonColor=${newColor}`;
          // Set Color to a random HEX value
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
