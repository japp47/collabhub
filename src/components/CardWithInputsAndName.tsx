import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardWithInputsAndName.module.css";

type CardWithInputsAndNameType = {
  userFullName?: string;
  contactName?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const CardWithInputsAndName: FunctionComponent<CardWithInputsAndNameType> = ({
  userFullName,
  contactName,
  propWidth,
}) => {
  const fullNameContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.name}>
      <div className={styles.fullNameContainer} style={fullNameContainerStyle}>
        <span>{userFullName}</span>
        <span className={styles.span}>*</span>
      </div>
      <input className={styles.input} placeholder={contactName} type="text" />
    </div>
  );
};

export default CardWithInputsAndName;
