import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Your Fitness Journey Starts Here</h1>
        <p className={styles.subtitle}>
          Personalized training plans for remote or in-person coaching.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Join Now</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;