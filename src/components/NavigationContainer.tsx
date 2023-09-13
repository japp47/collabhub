import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationContainer.module.css";
const NavigationContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInButtonClick = useCallback(() => {
    navigate("/desktop-login");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/desktop-signup");
  }, [navigate]);

  return (
    <div className={styles.navbar}>
      <img className={styles.logo1Icon} alt="" src="/undefined144.png" />
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.services}>Services</div>
        <div className={styles.pricing}>Pricing</div>
        <div className={styles.company}>Company</div>
        <div className={styles.faqs}>FAQs</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.loginButton} onClick={onLogInButtonClick}>
          <div className={styles.logIn}>Log In</div>
          <div className={styles.howItWorks}>How it works</div>
        </button>
        <button className={styles.signupButton} onClick={onSignUpButtonClick}>
          <div className={styles.signUp}>Sign Up</div>
          <div className={styles.howItWorks}>How it works</div>
        </button>
      </div>
      <img className={styles.iconlybulkcall} alt="" src="/undefined145.png" />
      <div className={styles.cloudwaveLogo1svg}>
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <div className={styles.cloudwave}>CloudWave</div>
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
      </div>
    </div>
  );
};

export default NavigationContainer;
