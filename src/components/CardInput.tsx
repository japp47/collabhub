import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardInput.module.css";

type CardInputType = {
  inputType?: string;
  inputValidationMessage?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const CardInput: FunctionComponent<CardInputType> = ({
  inputType = "Password",
  inputValidationMessage,
  propAlignSelf,
  propWidth,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={styles.input}>
      <div className={styles.label}>{inputType}</div>
      <input
        className={styles.input1}
        placeholder={inputValidationMessage}
        type="text"
        style={inputStyle}
      />
    </div>
  );
};

export default CardInput;
