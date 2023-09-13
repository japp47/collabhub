import { FunctionComponent } from "react";
import styles from "./SectionUploadForm.module.css";
const SectionUploadForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <video className={styles.videoFile11} controls>
          <source src="/10_- debug ui - personal - microsoft​ edge 2023-05-22 22-51-56.mp4" />
        </video>
        <img className={styles.videoFile12} alt="" src="/undefined57.png" />
        <img className={styles.videoFile13} alt="" src="/undefined57.png" />
        <img className={styles.videoFile14} alt="" src="/undefined57.png" />
        <img className={styles.videoFile15} alt="" src="/undefined57.png" />
      </div>
      <div className={styles.dragAndDrop}>
        <div className={styles.dragAndDropChild} />
        <img
          className={styles.nounDragAndDrop22458861Icon}
          alt=""
          src="/undefined132.png"
        />
        <button className={styles.browseButton}>
          <img className={styles.googleIcon} alt="" src="/undefined133.png" />
          <div className={styles.browseYourFile}>Browse Your File</div>
          <b className={styles.orRegisterWith}>Or register with Google</b>
        </button>
        <div className={styles.or}>
          <div className={styles.orChild} />
          <div className={styles.or1}>Or</div>
          <div className={styles.orChild} />
        </div>
        <b className={styles.dragAndDrop1}>Drag and Drop it here</b>
      </div>
      <div className={styles.myFiles}>My Files</div>
      <div className={styles.upload}>Upload</div>
    </div>
  );
};

export default SectionUploadForm;
