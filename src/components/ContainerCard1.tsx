import { FunctionComponent } from "react";
import styles from "./ContainerCard1.module.css";

type ContainerCard1Type = {
  imageDimensions?: string;
  imageId?: string;
  carImageId?: string;
};

const ContainerCard1: FunctionComponent<ContainerCard1Type> = ({
  imageDimensions,
  imageId,
  carImageId,
}) => {
  return (
    <div className={styles.leftSide8Column}>
      <img className={styles.logo1Icon} alt="" src={imageDimensions} />
      <img className={styles.signIn1} alt="" src={imageId} />
      <img className={styles.image16Icon} alt="" src={carImageId} />
      <div className={styles.allRightsReserved}>© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default ContainerCard1;
