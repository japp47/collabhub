import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";
const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.balance}>
      <div className={styles.balanceChild} />
      <b className={styles.editorsGraph}>Editors Graph</b>
      <img
        className={styles.fimoreVerticalIcon}
        alt=""
        src="/undefined84.png"
      />
      <div className={styles.barchartFrame534}>
        <img
          className={styles.verticalGridLines}
          alt=""
          src="/undefined85.png"
        />
        <img
          className={styles.horizontalGridLines}
          alt=""
          src="/undefined86.png"
        />
        <div className={styles.leftLabels}>
          <b className={styles.leftLabel534}>400K</b>
          <b className={styles.leftLabel5341}>300K</b>
          <b className={styles.leftLabel5342}>200K</b>
          <b className={styles.leftLabel5343}>100K</b>
          <b className={styles.leftLabel5344}>0K</b>
        </div>
        <div className={styles.bottomLabels}>
          <b className={styles.bottomLabel534}>{`Editor1 `}</b>
          <b className={styles.bottomLabel5341}>Editor 2</b>
          <b className={styles.bottomLabel5342}>Editor 3</b>
          <b className={styles.bottomLabel5343}>Editor 4</b>
          <b className={styles.bottomLabel5344}>Editor 5</b>
          <b className={styles.bottomLabel5345}>Editor 6</b>
          <b className={styles.bottomLabel5346}>Editor 7</b>
        </div>
        <div className={styles.dataSeries}>
          <div className={styles.series0}>
            <div className={styles.rect5340} />
            <div className={styles.rect53401} />
            <div className={styles.rect53402} />
            <div className={styles.rect53403} />
            <div className={styles.rect53404} />
            <div className={styles.rect53405} />
            <div className={styles.rect53406} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
