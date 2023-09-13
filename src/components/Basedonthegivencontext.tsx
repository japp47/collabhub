import { FunctionComponent } from "react";
import styles from "./Basedonthegivencontext.module.css";
const Basedonthegivencontext: FunctionComponent = () => {
  return (
    <div className={styles.pass}>
      <div className={styles.password}>
        <span>{`Password `}</span>
        <span className={styles.span}>*</span>
      </div>
      <input className={styles.input} placeholder="********" type="text" />
    </div>
  );
};

export default Basedonthegivencontext;
