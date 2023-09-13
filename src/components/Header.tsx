import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  imageDimensions?: string;

  /** Style props */
  propCursor?: CSSProperties["cursor"];
  propBorderRadius?: CSSProperties["borderRadius"];

  /** Action props */
  onWorkspaceTextClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  imageDimensions,
  propCursor,
  propBorderRadius,
  onWorkspaceTextClick,
}) => {
  const workspaceStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const ellipseIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.navbar}>
      <img className={styles.logo1Icon} alt="" src="/undefined74.png" />
      <div className={styles.workspaceParent}>
        <b
          className={styles.workspace}
          onClick={onWorkspaceTextClick}
          style={workspaceStyle}
        >
          Workspace
        </b>
        <b className={styles.myCreators}>My Creators</b>
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
      <img
        className={styles.navbarChild}
        alt=""
        src={imageDimensions}
        style={ellipseIconStyle}
      />
    </div>
  );
};

export default Header;
