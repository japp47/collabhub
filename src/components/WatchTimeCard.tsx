import { FunctionComponent } from "react";
import CardComponent from "./CardComponent";
import Statedecrease from "./Statedecrease";
import styles from "./WatchTimeCard.module.css";

type WatchTimeCardType = {
  watchTimeHours?: string;
};

const WatchTimeCard: FunctionComponent<WatchTimeCardType> = ({
  watchTimeHours,
}) => {
  return (
    <div className={styles.card}>
      <CardComponent showCard />
      <b className={styles.watchTimeHours}>{watchTimeHours}</b>
      <b className={styles.b}>220,000</b>
      <b className={styles.last30Days}>Last 30 days expenditure</b>
      <Statedecrease
        uarrowDown="/undefined107.png"
        statedecreaseWidth="11.03%"
        statedecreaseHeight="12.5%"
        statedecreasePosition="absolute"
        statedecreaseTop="46.09%"
        statedecreaseRight="50.34%"
        statedecreaseBottom="41.41%"
        statedecreaseLeft="38.62%"
        rectangleDivBackgroundColor="#c2eec2"
        divColor="#008000"
        divFontWeight="bold"
        uarrowDownIconLeft="15.63%"
        uarrowDownIconRight="53.12%"
      />
    </div>
  );
};

export default WatchTimeCard;
