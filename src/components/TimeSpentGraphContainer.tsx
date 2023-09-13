import { FunctionComponent } from "react";
import styles from "./TimeSpentGraphContainer.module.css";
const TimeSpentGraphContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.timeSpentGraphWrapper}>
        <b className={styles.timeSpentGraph}>Time Spent Graph</b>
      </div>
      <img
        className={styles.fimoreVerticalIcon}
        alt=""
        src="/undefined84.png"
      />
      <div className={styles.lineChart}>
        <div className={styles.rectangle} />
        <img className={styles.xAxisGridIcon} alt="" src="/undefined87.png" />
        <img className={styles.yAxisGridIcon} alt="" src="/undefined88.png" />
        <img className={styles.yAxisGridIcon} alt="" src="/undefined88.png" />
        <img className={styles.xAxisGridIcon} alt="" src="/undefined87.png" />
        <b className={styles.mon}>Mon</b>
        <b className={styles.tue}>Tue</b>
        <b className={styles.wed}>Wed</b>
        <b className={styles.thur}>Thur</b>
        <b className={styles.fri}>Fri</b>
        <b className={styles.sat}>Sat</b>
        <b className={styles.sun}>Sun</b>
        <b className={styles.b}>0</b>
        <b className={styles.b1}>25</b>
        <b className={styles.b2}>50</b>
        <b className={styles.b3}>75</b>
        <b className={styles.b4}>100</b>
        <b className={styles.b5}>125</b>
        <img className={styles.lineIcon} alt="" src="/undefined89.png" />
        <img className={styles.lineIcon1} alt="" src="/undefined90.png" />
        <img className={styles.markerIcon} alt="" src="/undefined91.png" />
        <img className={styles.markerIcon1} alt="" src="/undefined92.png" />
        <img className={styles.markerIcon2} alt="" src="/undefined93.png" />
        <img className={styles.markerIcon3} alt="" src="/undefined94.png" />
        <img className={styles.markerIcon4} alt="" src="/undefined95.png" />
        <img className={styles.markerIcon5} alt="" src="/undefined96.png" />
        <img className={styles.markerIcon6} alt="" src="/undefined97.png" />
        <img className={styles.markerIcon7} alt="" src="/undefined98.png" />
        <img className={styles.markerIcon8} alt="" src="/undefined99.png" />
        <img className={styles.markerIcon9} alt="" src="/undefined100.png" />
        <img className={styles.markerIcon10} alt="" src="/undefined101.png" />
        <img className={styles.markerIcon11} alt="" src="/undefined102.png" />
        <img className={styles.markerIcon12} alt="" src="/undefined103.png" />
        <img className={styles.markerIcon13} alt="" src="/undefined104.png" />
      </div>
    </div>
  );
};

export default TimeSpentGraphContainer;
