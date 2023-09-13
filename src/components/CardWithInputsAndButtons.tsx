import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CardInput from "./CardInput";
import SignInFormContainer from "./SignInFormContainer";
import TypeDesktop from "./TypeDesktop1";
import styles from "./CardWithInputsAndButtons.module.css";

type CardWithInputsAndButtonsType = {
  imageLabel?: string;
  imageIdentifier?: string;

  /** Style props */
  labelCursor?: CSSProperties["cursor"];

  /** Action props */
  onFormContainerClick?: () => void;
  onMainButtonClick?: () => void;
};

const CardWithInputsAndButtons: FunctionComponent<
  CardWithInputsAndButtonsType
> = ({
  imageLabel,
  imageIdentifier,
  labelCursor,
  onFormContainerClick,
  onMainButtonClick,
}) => {
  const formStyle: CSSProperties = useMemo(() => {
    return {
      cursor: labelCursor,
    };
  }, [labelCursor]);

  return (
    <div className={styles.leftSide8Column}>
      <img className={styles.logo1Icon} alt="" src="/undefined6.png" />
      <div className={styles.loginForm}>
        <div className={styles.intro}>
          <div className={styles.welcomeBackContainer}>
            <span className={styles.welcomeBack}>{`Welcome Back `}</span>
            <span> 👋</span>
          </div>
          <div className={styles.todayIsAContainer}>
            <p
              className={styles.todayIsA}
            >{`Today is a new day. It's your day. You shape it. `}</p>
            <p className={styles.todayIsA}>
              Sign in to start managing your projects.
            </p>
          </div>
        </div>
        <div
          className={styles.form}
          style={formStyle}
          onClick={onFormContainerClick}
        >
          <CardInput
            inputType="Email"
            inputValidationMessage="Example@email.com"
            propAlignSelf="unset"
            propWidth="388px"
          />
          <CardInput
            inputType="Password"
            inputValidationMessage="At least 8 characters"
          />
          <div className={styles.forgotPassword}>Forgot Password?</div>
          <SignInFormContainer onMainButtonClick={onMainButtonClick} />
        </div>
        <div className={styles.socialSignIn}>
          <div className={styles.or}>
            <div className={styles.orChild} />
            <div className={styles.welcomeBackContainer}>Or</div>
            <div className={styles.orChild} />
          </div>
          <div className={styles.socialButtonsColumns}>
            <TypeDesktop
              google="/undefined7.png"
              facebook="/undefined8.png"
              signInWithFacebook="Sign in with Google"
              googleIcon
              showFacebookIcon={false}
            />
            <TypeDesktop
              google="/undefined7.png"
              facebook="/undefined8.png"
              signInWithFacebook="Sign in with Facebook"
              googleIcon={false}
              showFacebookIcon
            />
          </div>
        </div>
        <div className={styles.dontYouHaveContainer}>
          <span className={styles.dontYouHaveContainer1}>
            <span>{`Don't you have an account? `}</span>
            <span className={styles.signUp}>Sign up</span>
          </span>
        </div>
        <div className={styles.madeWith}>Made With ❤️ By Enigma</div>
      </div>
      <div className={styles.allRightsReserved}>© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default CardWithInputsAndButtons;
