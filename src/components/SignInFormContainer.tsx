import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SignInFormContainer.module.css";

type SignInFormContainerType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onMainButtonClick?: () => void;
};

const SignInFormContainer: FunctionComponent<SignInFormContainerType> = ({
  propDisplay,
  onMainButtonClick,
}) => {
  const signInStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <button className={styles.mainButton} onClick={onMainButtonClick}>
      <div className={styles.signIn} style={signInStyle}>
        Sign in
      </div>
    </button>
  );
};

export default SignInFormContainer;
