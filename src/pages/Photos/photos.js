import React from "react";
import styles from './photos.module.css';

const catOne = 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIyNDM2MDk1/black-and-white-cat-breeds.webp';
const catTwo ='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIyMzcwNTU5/black-and-white-cat-breeds.webp';
const catThree ='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIxOTc3MzQz/black-and-white-cat-breeds.webp';
const catFour ='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIxODQ2Mjcx/black-and-white-cat-breeds.webp';
const catFive ='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIyOTYwMzgz/black-and-white-cat-breeds.webp';
const catSix ='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc4NzY1OTM3MzIyNTAxNjMx/black-and-white-cat-breeds.webp';

const Photos = () => {
    return (
        <div className={styles.container} >
            <div className={styles.grid} >
                <img className={styles.cat} src={catFive} alt="catOne" />
                <img  className={styles.cat} src={catTwo} alt="catOne" />
                <img  className={styles.cat} src={catThree} alt="catOne" />
                <img  className={styles.cat} src={catFour} alt="catOne" />
                <img className={styles.cat} src={catOne} alt="catOne" />
                <img  className={styles.cat} src={catSix} alt="catOne" />
            </div>
        </div>


    );
};

export default Photos;