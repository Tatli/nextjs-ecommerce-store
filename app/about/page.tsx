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
      <h1>About AccessIT 🚀</h1>
      <p>
        Welcome to AccessIT, your gateway to a world of technology solutions
        that empower your business and enhance your digital journey. At
        AccessIT, we're more than just an IT company - we're your trusted
        partner in harnessing the full potential of technology to drive your
        success. 💼
      </p>
      <hr />
      <h2>Our Mission 🌐</h2>
      <p>
        Our mission is simple yet profound: We aim to provide businesses with
        cutting-edge IT solutions that streamline operations, boost
        productivity, and pave the way for sustainable growth. With a deep
        understanding of the rapidly evolving tech landscape, we ensure our
        clients stay at the forefront of innovation. 📈
      </p>
      <h2>Who We Are 🙌</h2>
      <p>
        AccessIT is a team of passionate, forward-thinking, and tech-savvy
        professionals dedicated to delivering excellence in every aspect of our
        work. With a diverse skill set that spans IT strategy, cybersecurity,
        cloud computing, and more, we're equipped to tackle the most complex
        challenges and bring your digital aspirations to life.
      </p>
      <h2>Our Values 🌟</h2>
      <ol>
        <li>
          Innovation: We thrive on pushing the boundaries of what's possible.
          We're committed to staying ahead of the curve and delivering
          innovative solutions that give you a competitive edge. 🚀
        </li>
        <li>
          Integrity: Trust is at the core of everything we do. We operate with
          unwavering integrity, ensuring your peace of mind and the security of
          your data. 🔐
        </li>
        <li>
          Collaboration: We believe in the power of collaboration. Your success
          is our success, and we work closely with you to tailor solutions that
          meet your unique needs. 🤝
        </li>
        <li>
          Client-Centric: Your satisfaction is our top priority. We go the extra
          mile to understand your goals and provide the solutions that will help
          you achieve them. 🎯
        </li>
      </ol>

      <h2>What We Offer 🛡️</h2>

      <ul>
        <li>
          IT Consulting: Our expert consultants offer invaluable insights and
          strategic guidance to optimize your IT infrastructure. 💬
        </li>
        <li>
          Cybersecurity: Protect your business with our robust cybersecurity
          solutions that shield you from ever-evolving threats. 🛡️
        </li>
        <li>
          Managed Services: Let us handle the day-to-day IT management, so you
          can focus on your core business activities. 🤖
        </li>
        <li>
          Cloud Solutions: Seamlessly transition to the cloud with our expert
          guidance and support. ☁️
        </li>
        <li>
          Tech Support: AccessIT is your dedicated IT support team, ready to
          assist you whenever you need it. 🛠️
        </li>
      </ul>

      <h2>Our Promise 🤞</h2>
      <p>
        When you partner with AccessIT, you're not just getting a service
        provider; you're gaining a committed ally in your journey towards
        technological excellence. We promise to deliver solutions that align
        perfectly with your business objectives, ensuring that technology
        becomes an enabler, not a barrier. 🤝
      </p>

      <h2>Let's Connect 📞</h2>
      <p>
        We're excited to learn more about your business and discuss how AccessIT
        can be the catalyst for your digital success. Contact us today to start
        a conversation about your unique IT needs and goals. Together, we'll
        pave the path to a brighter, more efficient, and tech-savvy future. 🌞
      </p>

      <h3>Welcome to AccessIT - Your Access to IT Excellence! 🚀</h3>
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
