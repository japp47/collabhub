import { FunctionComponent } from "react";
import styles from "./PriceContainer.module.css";

type PriceContainerType = {
  seeThePrice?: boolean;
  showSeeThePrice?: boolean;
};

const PriceContainer: FunctionComponent<PriceContainerType> = ({
  seeThePrice,
  showSeeThePrice,
}) => {
  return (
    !seeThePrice && (
      <div className={styles.seeThePrice}>
        <div className={styles.divflexWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.seeThePriceWrapper}>
              {showSeeThePrice && (
                <div className={styles.seeThePrice1}>See the price</div>
              )}
            </div>
            <div className={styles.letsBuildYourContainer}>
              <p className={styles.letsBuildYour}>
                Lets build your next digital
              </p>
              <p className={styles.letsBuildYour}>adventure</p>
            </div>
            <div className={styles.letsWorkTogetherContainer}>
              <span className={styles.letsWorkTogetherContainer1}>
                <p className={styles.letsBuildYour}>{`Lets Work Together `}</p>
                <p className={styles.letsBuildYour}>And Grow Together</p>
              </span>
            </div>
          </div>
          <img
            className={styles.illustration1pngIcon}
            alt=""
            src="/undefined23.png"
          />
        </div>
      </div>
    )
  );
};

export default PriceContainer;
