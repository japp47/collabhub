import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer1.module.css";

type CardContainer1Type = {
  myFirstExperience?: string;
  withJapanBulletTrain?: string;
  prop?: string;
  prop1?: string;
  name1?: string;
  frame1000000889?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  myFirstExperienceContaineTop?: CSSProperties["top"];
  myFirstExperienceContaineLeft?: CSSProperties["left"];
  myFirstExperienceContaineWhiteSpace?: CSSProperties["whiteSpace"];
};

const CardContainer1: FunctionComponent<CardContainer1Type> = ({
  myFirstExperience,
  withJapanBulletTrain,
  prop,
  prop1,
  name1,
  frame1000000889,
  propLeft,
  myFirstExperienceContaineTop,
  myFirstExperienceContaineLeft,
  myFirstExperienceContaineWhiteSpace,
}) => {
  const moodyTraveller1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const myFirstExperienceContainerStyle: CSSProperties = useMemo(() => {
    return {
      top: myFirstExperienceContaineTop,
      left: myFirstExperienceContaineLeft,
      whiteSpace: myFirstExperienceContaineWhiteSpace,
    };
  }, [
    myFirstExperienceContaineTop,
    myFirstExperienceContaineLeft,
    myFirstExperienceContaineWhiteSpace,
  ]);

  return (
    <div className={styles.item}>
      <div className={styles.videoFile16Parent}>
        <img className={styles.videoFile16} alt="" src="/undefined67.png" />
        <div
          className={styles.myFirstExperienceContainer}
          style={myFirstExperienceContainerStyle}
        >
          <p className={styles.myFirstExperience}>{myFirstExperience}</p>
          <p className={styles.myFirstExperience}>{withJapanBulletTrain}</p>
        </div>
      </div>
      <div className={styles.div}>
        <p className={styles.myFirstExperience}>{prop}</p>
        <p className={styles.myFirstExperience}>{prop1}</p>
      </div>
      <div className={styles.upload}>Upload</div>
      <div className={styles.moodyTraveller} style={moodyTraveller1Style}>
        {name1}
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src={frame1000000889} />
        <div className={styles.rejected}>Rejected</div>
      </div>
    </div>
  );
};

export default CardContainer1;
