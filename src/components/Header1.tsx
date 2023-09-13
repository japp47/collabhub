import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";
const Header1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWorkspaceClick = useCallback(() => {
    navigate("/workspace-creator");
  }, [navigate]);

  const onAnalyticsClick = useCallback(() => {
    navigate("/analytics-creator");
  }, [navigate]);

  return (
    <div className={styles.navbar}>
      <img className={styles.logo1Icon} alt="" src="/undefined74.png" />
      <div className={styles.workspaceParent}>
        <button className={styles.workspace} onClick={onWorkspaceClick}>
          Workspace
        </button>
        <b className={styles.myTeam}>My Team</b>
        <button className={styles.analytics} onClick={onAnalyticsClick}>
          Analytics
        </button>
        <b className={styles.requests}>Requests</b>
        <b className={styles.contactUs}>Contact Us</b>
        <div className={styles.services}>Services</div>
        <div className={styles.pricing}>Pricing</div>
        <div className={styles.company}>Company</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.loginButton}>
          <div className={styles.logIn}>Log In</div>
          <div className={styles.howItWorks}>How it works</div>
        </div>
        <div className={styles.signupButton}>
          <div className={styles.signUp}>Sign Up</div>
          <div className={styles.howItWorks}>How it works</div>
        </div>
      </div>
      <img className={styles.iconlybulkcall} alt="" src="/undefined75.png" />
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
      <img className={styles.cloudwaveIcon} alt="" src="/undefined77.png" />
      <img className={styles.cloudwaveIcon1} alt="" src="/undefined81.png" />
    </div>
  );
};

export default Header1;
