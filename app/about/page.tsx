import type { Metadata } from 'next';
import styles from '../page.module.scss';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page. Information about the shop.',
};

export default function AboutPage() {
  // This is an object
  const myComplexObject = { name: 'Tatli', hobby: 'Coding' };

  // This is a JS string
  const myComplexObjectAsString = JSON.stringify(myComplexObject);
  console.log(myComplexObjectAsString);

  // Convert Objects as string to JS object
  // console.log(myComplexObjectIntoJsonAgain);
  return (
    <main className={styles.main}>
      <div>This is my about page</div>
      <h2> JSON.stringify and JSON.parse </h2>
      {/* Don't forget that objects cant be displayed before they are stringified */}
      <div>{JSON.stringify([undefined, false, '', null])}</div>
      {/* Objects need to be stringified before they can be printed */}
      <div>{JSON.stringify(myComplexObject)}</div>
      {/* You can print properties of objects though */}
      <div>{myComplexObject.name}</div>
      {/* Objects are not valid as a React child
      <div>{myComplexObject[0]}</div> */}
    </main>
  );
}
