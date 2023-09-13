import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardWithInputsAndButtons from "../components/CardWithInputsAndButtons";
import styles from "./DesktopLogIn2.module.css";
const DesktopLogIn2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMainButtonClick = useCallback(() => {
    navigate("/workspace-creator");
  }, [navigate]);

  return (
    <div className={styles.desktopLogin2}>
      <div className={styles.mainContainer}>
        <CardWithInputsAndButtons
          imageLabel="/undefined7.png"
          imageIdentifier="/undefined7.png"
          onMainButtonClick={onMainButtonClick}
        />
        <div className={styles.art}>
          <img className={styles.signIn1} alt="" src="/undefined9.png" />
          <img className={styles.loginArt} alt="" src="/undefined10.png" />
        </div>
      </div>
    </div>
  );
};

export default DesktopLogIn2;
