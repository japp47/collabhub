import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TrustSectionForm.module.css";

type TrustSectionFormType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const TrustSectionForm: FunctionComponent<TrustSectionFormType> = ({
  propTop,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.section} style={sectionStyle}>
      <div className={styles.divlogosWrapper}>
        <div className={styles.heading3}>
          <div className={styles.weAreTrustedContainer}>
            <p className={styles.weAreTrusted}>
              We are trusted by more than 1.000
            </p>
            <p className={styles.weAreTrusted}>Companies worldwide</p>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.pinterestParent}>
          <div className={styles.pinterest}>Pinterest</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined34.png" />
        </div>
        <div className={styles.facebookParent}>
          <div className={styles.pinterest}>Facebook</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined35.png" />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.linkedinParent}>
          <div className={styles.pinterest}>LinkedIn</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined36.png" />
        </div>
        <div className={styles.youtubeParent}>
          <div className={styles.pinterest}>YouTube</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined37.png" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.instagramParent}>
          <div className={styles.pinterest}>Instagram</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined38.png" />
        </div>
        <div className={styles.discordParent}>
          <div className={styles.pinterest}>Discord</div>
          <img className={styles.maskGroupIcon} alt="" src="/undefined39.png" />
        </div>
      </div>
    </div>
  );
};

export default TrustSectionForm;
