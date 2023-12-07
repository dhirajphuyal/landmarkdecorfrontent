import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.css';

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <img
        className={styles.ImageOne}
        src={require('../public/images/jeremywongweddingsK8KiCHh4WU4unsplash1.jpg')}
        alt="Wedding photo"
      />
      <p className={styles.TextContent}>
        We’re passionate about pushing the envelope, and discovering what excites you so we can pour that into every tiny, yet impactful detail – making sure your day is yours. As highly experienced wedding professionals, we have a proven track record of delivering exceptional events that exceed clients’ expectations. We are known for our meticulous attention to detail, creative vision, and unwavering commitment to making each wedding a unique and unforgettable experience. With a deep understanding of the latest wedding trends, we bring a fresh and innovative approach to event planning while also ensuring that the core elements of each celebration are executed flawlessly. Whether it’s creating a beautiful and romantic setting, coordinating with vendors, or managing logistics, we handle every aspect of the wedding planning process with care and precision. Above all, we believe that the key to a successful wedding is open communication and a strong relationship with our clients. We take the time to truly understand your vision and work closely with you to bring your dream wedding to life. With our exceptional organizational skills, calm demeanor, and expertise in the industry, we have earned our reputation for a reason.
      </p>
      <h2 className={styles.Title}>LAndMark.Decor</h2>
      <p className={styles.FollowUs}>Follow us on Instagram</p>
      <div className={styles.TeamPhotos}>
        <img
          className={styles.ImageTwo}
          src={require('../public/images/micheilehendersongnm2op0m2pwunsplash1.jpg')}
          alt="Team member photo"
        />
        <img
          className={styles.ImageThree}
          src={require('../public/images/zanepersaudjLUkQEUylEunsplash1.jpg')}
          alt="Team member photo"
        />
        <img
          className={styles.ImageFour}
          src={require('../public/images/thomaswilliamQ3PzwHKpEdcunsplash2.jpg')}
          alt="Team member photo"
        />
      </div>
      <Link to="/menu">
        <img
          className={styles.Vector}
          src={require('../public/images/Vector.svg')}
          alt="Menu icon"
        />
      </Link>
    </div>
  );
};

export default AboutPage;
