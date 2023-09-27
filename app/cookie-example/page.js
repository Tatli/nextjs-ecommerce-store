import { getCookie } from '../../util/cookies';
import SetCookieForm from './setCookieForm';

export default function SetCookiePage() {
  const getCookieValue = getCookie('testCookie');
  console.log(getCookieValue);

  return (
    <>
      <div>Cookie value: {getCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
