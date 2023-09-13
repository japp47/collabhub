import { FunctionComponent } from "react";
import styles from "./AudienceFilterForm.module.css";
const AudienceFilterForm: FunctionComponent = () => {
  return (
    <div className={styles.pass}>
      <div className={styles.audience}>Audience</div>
      <div className={styles.isThisVideo}>
        Is this video made for kids?(required)
      </div>
      <div className={styles.yesItsMade}>Yes, it's made for kids.</div>
      <div className={styles.noItsNot}>No, it's not made for kids</div>
      <div className={styles.input}>
        <div className={styles.div}>*************</div>
        <img className={styles.vectorIcon} alt="" src="/undefined121.png" />
      </div>
      <input className={styles.passChild} type="checkbox" />
      <input className={styles.passItem} type="checkbox" />
    </div>
  );
};

export default AudienceFilterForm;
