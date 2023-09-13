import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer2.module.css";

type CardContainer2Type = {
  articleTitle?: string;
  location1?: string;
  dateOrTime?: string;
  timeStamp?: string;
  articleSubtitle?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const CardContainer2: FunctionComponent<CardContainer2Type> = ({
  articleTitle,
  location1,
  dateOrTime,
  timeStamp,
  articleSubtitle,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const whyUSAInvadedContainerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const detectWorldStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.item}>
      <div className={styles.videoFile16Parent}>
        <img className={styles.videoFile16} alt="" src="/undefined67.png" />
        <div
          className={styles.whyUsaInvadedContainer}
          style={whyUSAInvadedContainerStyle}
        >
          <p className={styles.whyUsaInvaded}>{articleTitle}</p>
          <p className={styles.whyUsaInvaded}>{location1}</p>
        </div>
      </div>
      <div className={styles.div}>
        <p className={styles.whyUsaInvaded}>{dateOrTime}</p>
        <p className={styles.whyUsaInvaded}>{timeStamp}</p>
      </div>
      <div className={styles.upload}>Upload</div>
      <div className={styles.detectworld} style={detectWorldStyle}>
        {articleSubtitle}
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.ucheckIcon} alt="" src="/undefined68.png" />
        </div>
        <div className={styles.approved}>Approved</div>
      </div>
    </div>
  );
};

export default CardContainer2;
