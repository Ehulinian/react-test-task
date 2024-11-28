import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className={styles.footer__links}>
          <a href="/privacy-policy" className={styles.footer__link}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.footer__link}>
            Terms of Service
          </a>
          <a href="/contact" className={styles.footer__link}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
