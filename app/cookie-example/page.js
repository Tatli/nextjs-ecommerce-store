import { getCookie } from '../../util/cookies';
import SetCookieForm from './SetCookieForm';

export default function setCookiePage() {
  const getCookieValue = getCookie('testCookie');
  console.log(getCookieValue);
  // const parsedCookie = JSON.parse(getCookieValue);

  return (
    <div>
      <div>Cookie value: {getCookieValue}</div>
      <SetCookieForm />
    </div>
  );
}
