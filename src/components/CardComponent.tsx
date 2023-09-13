import { FunctionComponent } from "react";
import styles from "./CardComponent.module.css";

type CardComponentType = {
  showCard?: boolean;
};

const CardComponent: FunctionComponent<CardComponentType> = ({ showCard }) => {
  return showCard && <div className={styles.card} />;
};

export default CardComponent;
