import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  frame1Disabled?: boolean;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  frame1Disabled,
}) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/upload-screen");
  }, [navigate]);

  return (
    <button
      className={styles.maskGroupParent}
      onClick={onFrameButtonClick}
      disabled={frame1Disabled}
    >
      <img className={styles.maskGroupIcon} alt="" src="/undefined63.png" />
      <div className={styles.upload}>Upload</div>
    </button>
  );
};

export default FrameComponent;
