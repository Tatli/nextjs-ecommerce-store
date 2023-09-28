import SetCookieForm from './SetCookieForm';

export default function setCookiePage() {
  return (
    <div>
      <div>Cookie value: {props.}</div>
      <SetCookieForm />
    </div>
  );
}
