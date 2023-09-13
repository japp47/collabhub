import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  articleTitle?: string;
  dateOrTime?: string;
  timeOrDate?: string;
  actionButtonText?: string;
  articleSubtitle?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  articleTitle,
  dateOrTime,
  timeOrDate,
  actionButtonText,
  articleSubtitle,
  propLeft,
  propLeft1,
  propLeft2,
}) => {
  const aDayInStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const uploadStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const moodyTravellerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={styles.item}>
      <div className={styles.videoFile16Parent}>
        <img className={styles.videoFile16} alt="" src="/undefined67.png" />
        <div className={styles.aDayIn} style={aDayInStyle}>
          {articleTitle}
        </div>
      </div>
      <div className={styles.div}>
        <p className={styles.p}>{dateOrTime}</p>
        <p className={styles.p}>{timeOrDate}</p>
      </div>
      <div className={styles.upload} style={uploadStyle}>
        {actionButtonText}
      </div>
      <div className={styles.moodyTraveller} style={moodyTravellerStyle}>
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

export default CardContainer;
