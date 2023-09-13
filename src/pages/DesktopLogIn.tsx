import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardWithInputsAndButtons from "../components/CardWithInputsAndButtons";
import styles from "./DesktopLogIn.module.css";
const DesktopLogIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFormContainerClick = useCallback(() => {
    navigate("/workspace-editor");
  }, [navigate]);

  return (
    <div className={styles.desktopLogin}>
      <div className={styles.mainContainer}>
        <CardWithInputsAndButtons
          imageLabel="/undefined156.png"
          imageIdentifier="/undefined156.png"
          labelCursor="pointer"
          onFormContainerClick={onFormContainerClick}
        />
        <div className={styles.art}>
          <img className={styles.signIn1} alt="" src="/undefined9.png" />
          <img className={styles.loginArt} alt="" src="/undefined10.png" />
        </div>
      </div>
    </div>
  );
};

export default DesktopLogIn;
