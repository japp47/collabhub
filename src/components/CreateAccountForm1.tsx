import { FunctionComponent, useCallback } from "react";
import CardWithInputsAndName from "./CardWithInputsAndName";
import Basedonthegivencontext from "./Basedonthegivencontext";
import { useNavigate } from "react-router-dom";
import SocialSignInContainer from "./SocialSignInContainer";
import styles from "./CreateAccountForm1.module.css";
const CreateAccountForm1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/desktop-signup-2");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/desktop-login");
  }, [navigate]);

  const onSignUpButton1Click = useCallback(() => {
    navigate("/desktop-login");
  }, [navigate]);

  return (
    <div className={styles.loginForm}>
      <div className={styles.createYourAccount}>
        <b className={styles.editor}>Create your account.</b>
      </div>
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
      <div className={styles.form}>
        <div className={styles.check}>
          <div className={styles.checkChild} />
          <div className={styles.iAgreeTo}>
            I agree to the terms and condition
          </div>
        </div>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign Up</div>
        </div>
      </div>
      <div className={styles.form1}>
        <CardWithInputsAndName
          userFullName="Full name "
          contactName="Steven Stallion"
          propWidth="98.75px"
        />
        <CardWithInputsAndName
          userFullName="Email address "
          contactName="Example@gmail.com"
          propWidth="137.5px"
        />
        <Basedonthegivencontext />
        <section className={styles.role}>
          <div className={styles.signupButtonParent}>
            <div className={styles.signupButton}>
              <img
                className={styles.fiairplayIcon}
                alt=""
                src="/undefined149.png"
              />
              <div className={styles.editor}>Editor</div>
            </div>
            <button
              className={styles.signupButton1}
              onClick={onSignUpButtonClick}
            >
              <img
                className={styles.fiairplayIcon}
                alt=""
                src="/undefined150.png"
              />
              <div className={styles.creator}>Creator</div>
            </button>
          </div>
          <div className={styles.nav}>
            <div className={styles.navChild} />
            <div className={styles.general}>General</div>
            <img className={styles.uuserIcon} alt="" src="/undefined151.png" />
          </div>
          <div className={styles.nav1}>
            <div className={styles.navItem} />
            <div className={styles.general}>General</div>
            <img className={styles.uuserIcon} alt="" src="/undefined152.png" />
          </div>
        </section>
        <div className={styles.input}>
          <div className={styles.welcomeBackContainer}>Email</div>
          <div className={styles.input1}>
            <div className={styles.input2} />
            <div className={styles.placeholder}>Example@email.com</div>
          </div>
        </div>
        <div className={styles.input3}>
          <div className={styles.welcomeBackContainer}>Password</div>
          <div className={styles.input1}>
            <div className={styles.input5} />
            <div className={styles.placeholder1}>At least 8 characters</div>
          </div>
        </div>
        <div className={styles.forgotPassword}>Forgot Password?</div>
        <div
          className={styles.alreadyHaveAnContainer}
          onClick={onAlreadyHaveAnClick}
        >
          <span>{`Already have an account? `}</span>
          <span className={styles.signIn}>Sign In</span>
        </div>
        <div className={styles.mainButton}>
          <div className={styles.welcomeBackContainer}>Sign in</div>
        </div>
        <button className={styles.signupButton2} onClick={onSignUpButton1Click}>
          <div className={styles.signUp1}>Sign Up</div>
        </button>
      </div>
      <div className={styles.or}>
        <div className={styles.orChild} />
        <div className={styles.welcomeBackContainer}>Or</div>
        <div className={styles.orChild} />
      </div>
      <SocialSignInContainer
        imageId="/undefined4.png"
        imageDimensions="/undefined5.png"
        imageIdentifier="/undefined4.png"
        imageCode="/undefined5.png"
        imageDimensionsCode="/undefined153.png"
        imageDimensionsCode2="/undefined154.png"
      />
      <div className={styles.dontYouHaveContainer}>
        <span className={styles.dontYouHaveContainer1}>
          <span>{`Don't you have an account? `}</span>
          <span className={styles.signUp2}>Sign up</span>
        </span>
      </div>
      <div className={styles.madeWith}>Made With ❤️ By Enigma</div>
    </div>
  );
};

export default CreateAccountForm1;
