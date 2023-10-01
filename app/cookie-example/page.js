import { getCookie } from '../../util/cookies';
<<<<<<< HEAD
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
=======
import SetCookieForm from './setCookieForm';

export default function SetCookiePage() {
  const getCookieValue = getCookie('testCookie');
  console.log(getCookieValue);

  return (
    <>
      <div>Cookie value: {getCookieValue}</div>
      <SetCookieForm />
    </>
>>>>>>> f93a6707ca86d859caae8d81ac069cd9aee3b68b
  );
}
