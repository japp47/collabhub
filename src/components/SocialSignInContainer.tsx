import { FunctionComponent } from "react";
import TypeDesktop from "./TypeDesktop1";
import styles from "./SocialSignInContainer.module.css";

type SocialSignInContainerType = {
  imageId?: string;
  imageDimensions?: string;
  imageIdentifier?: string;
  imageCode?: string;
  imageDimensionsCode?: string;
  imageDimensionsCode2?: string;
};

const SocialSignInContainer: FunctionComponent<SocialSignInContainerType> = ({
  imageId,
  imageDimensions,
  imageIdentifier,
  imageCode,
  imageDimensionsCode,
  imageDimensionsCode2,
}) => {
  return (
    <div className={styles.socialSignIn}>
      <div className={styles.socialButtonsColumns}>
        <TypeDesktop
          google="/undefined18.png"
          facebook="/undefined19.png"
          signInWithFacebook="Sign in with Google"
          googleIcon
          showFacebookIcon={false}
        />
        <TypeDesktop
          google="/undefined18.png"
          facebook="/undefined19.png"
          signInWithFacebook="Sign in with Facebook"
          googleIcon={false}
          showFacebookIcon
        />
      </div>
      <button className={styles.googleSignup}>
        <img className={styles.googleIcon} alt="" src={imageDimensionsCode} />
        <div className={styles.signUpWith}>Sign Up with Google</div>
      </button>
      <button className={styles.googleSignup}>
        <img
          className={styles.facebookIcon}
          alt=""
          src={imageDimensionsCode2}
        />
        <div className={styles.signUpWith1}>Sign Up with Facebook</div>
      </button>
    </div>
  );
};

export default SocialSignInContainer;
