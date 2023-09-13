import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  dimension?: string;
  productDimensions?: string;
  dimensionCode?: string;
  dimensionValue?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  dimension,
  productDimensions,
  dimensionCode,
  dimensionValue,
  propTop,
}) => {
  const footer1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.footer} style={footer1Style}>
      <div className={styles.cloudwave}>
        <img className={styles.vectorIcon} alt="" src={dimension} />
        <img className={styles.vectorIcon1} alt="" src={productDimensions} />
        <img className={styles.vectorIcon2} alt="" src={dimensionCode} />
        <img className={styles.vectorIcon3} alt="" src="/undefined51.png" />
        <img className={styles.vectorIcon4} alt="" src="/undefined52.png" />
        <img className={styles.vectorIcon5} alt="" src="/undefined53.png" />
        <img className={styles.vectorIcon6} alt="" src={dimensionValue} />
        <div className={styles.cloudwave1}>CloudWave</div>
      </div>
      <div className={styles.utility}>
        <div className={styles.heading3}>Utility</div>
        <div className={styles.menuitemHelp}>Privacy Policy</div>
        <div className={styles.menuitemBlog}>Terms Of Use</div>
        <div className={styles.menuitemPricing}>404 Page</div>
        <div className={styles.menuitemAbout}>Protected Page</div>
      </div>
      <div className={styles.company}>
        <div className={styles.heading31}>Company</div>
        <div className={styles.menuitemHelp1}>About</div>
        <div className={styles.menuitemBlog1}>FAQs</div>
        <div className={styles.menuitemPricing1}>Contact</div>
        <div className={styles.menuitemAbout1}>Blog</div>
      </div>
      <div className={styles.product}>
        <div className={styles.heading32}>Product</div>
        <div className={styles.menuitemBooking}>How It Works</div>
        <div className={styles.menuitemOnline}>Services</div>
        <div className={styles.menuitemOnline1}>Pricing</div>
      </div>
      <img className={styles.logo1Icon} alt="" src="/undefined55.png" />
    </div>
  );
};

export default ContainerCard;
