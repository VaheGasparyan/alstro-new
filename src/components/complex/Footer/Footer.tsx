import styles from './footer.module.scss';
import MapComponent from '../Map/map';

const Footer = () => {
    return <footer id='footer' className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.contacts}>
                <h2>Contact Us</h2>
                <div className={styles.info}>
                    <div className={styles.info_item}>
                        <span className={styles.title}>
                            Do you have any questions or suggestions?
                        </span>
                        <a href="#">contact@yourcompany.com</a>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.title}>
                            Do you need support? Give us a call.
                        </span>
                        <a href="#">+43 720 11 52 78</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.map_wrapper}>
            <MapComponent />
        </div>
    </footer>
};

export default Footer;