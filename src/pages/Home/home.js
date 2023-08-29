import React from "react";
import styles from './home.module.css';


const catImage = 'https://petkeen.com/wp-content/uploads/2021/04/black-smoke-with-white-Turkish-Angora-cat_Nynke-van-Holten_shutterstock.jpg';

const Home = () => {
    return (
        <div className={styles.container}>
            <img className={styles.cat} src={catImage} alt="catImage" />
            <p className={styles.paragraph}>
                While the connection between coat color and personality is largely anecdotal, many pet owners maintain that their black and white cats are extraordinarily friendly, intelligent, vocal, and active. Either way, these dashing felines have charmed their way into the hearts of many ardent animal lovers.
            </p>
        </div>
    );
};

export default Home;