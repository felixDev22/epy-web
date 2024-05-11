// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../constants/styles';
import { heroPic } from '../assets';
import { MdArrowForward } from 'react-icons/md';


const Hero = () => {
  return (
    <section id="home" className={`${styles.heroWrapper} ${styles.paddingY}`}>
      <div className={`${styles.titleWrapper}`}>
        <p className={`text-purple-400 ${styles.paragraph}`}>
          CONVENIENT, SECURE AND REWARDING
        </p>

        <h1 className={`${styles.h1}`}>
          SIMPLE & FAST<br></br>
          <span className={`${styles.h1Gradient}`}>DIGITAL </span>
          PAYMENT<br></br>SOLUTIONS
        </h1>
        <div className={`${styles.pWidth}`}>
          <p className={`${styles.paragraph}`}>
            Unlock convenience with our swift and secure digital payment
            solutions. Say goodbye to hassle, hello to efficiency!
          </p>
        </div>
        <button
          className={`${styles.button} ${styles.paragraph} flex items-center justify-center gap-2`}>
          Read More <MdArrowForward />
        </button>
      </div>
      <div className={`${styles.heroImage}`}>
        <img src={heroPic} className="w-[700px] h-auto" />
      </div>
    </section>
  );
};

export default Hero;