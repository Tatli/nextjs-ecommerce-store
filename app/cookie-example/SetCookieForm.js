'use client';
import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    // In order to use formActions you have to enable serverActions inside of your next.js config file
    <form>
      <input
        // Value of our cookie
        value={cookieValue}
        onChange={(e) => setCookieValue(e.currentTarget.value)}
      />
      {/* Perform Action -> Run function createCookie() in ./actions  */}
      {/* Don't forget FormActions are ALWAYS async and need an await */}
      <button formAction={async () => await createCookie(cookieValue)}>
        SetCookie
      </button>
    </form>
  );
}
