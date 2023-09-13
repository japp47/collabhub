import { FunctionComponent } from "react";
import styles from "./TypeDesktop1.module.css";

type TypeDesktopType = {
  google?: string;
  facebook?: string;
  signInWithFacebook?: string;
  googleIcon?: boolean;
  showFacebookIcon?: boolean;
};

const TypeDesktop: FunctionComponent<TypeDesktopType> = ({
  google,
  facebook,
  signInWithFacebook,
  googleIcon,
  showFacebookIcon,
}) => {
  return (
    <div className={styles.typedesktop}>
      {!googleIcon && <img className={styles.googleIcon} alt="" src={google} />}
      {showFacebookIcon && (
        <img className={styles.facebookIcon} alt="" src={facebook} />
      )}
      <div className={styles.signInWith}>{signInWithFacebook}</div>
    </div>
  );
};

export default TypeDesktop;
