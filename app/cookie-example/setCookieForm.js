'use client';
import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    // Warning: In order to use Server Action you need to update the next.js action with serverActions = true
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={async () => await createCookie(cookieValue)}>
        Set Cookie
      </button>
    </form>
  );
}
