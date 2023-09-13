import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FooterType> = ({ propTop }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.copyrightCollabhub}>© Copyright Collabhub</div>
      <div
        className={styles.copyrightCloudwave}
      >{`© Copyright CloudWave `}</div>
      <div className={styles.menuitemTerms}>Terms and Conditions</div>
      <div className={styles.menuitemTerms}>Privacy Policy Users</div>
      <div className={styles.menuitemTerms}>Privacy Policy Clients</div>
    </div>
  );
};

export default Footer;
