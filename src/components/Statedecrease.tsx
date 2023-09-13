import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Statedecrease.module.css";

type StatedecreaseType = {
  uarrowDown?: string;

  /** Style props */
  statedecreaseWidth?: CSSProperties["width"];
  statedecreaseHeight?: CSSProperties["height"];
  statedecreasePosition?: CSSProperties["position"];
  statedecreaseTop?: CSSProperties["top"];
  statedecreaseRight?: CSSProperties["right"];
  statedecreaseBottom?: CSSProperties["bottom"];
  statedecreaseLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  divColor?: CSSProperties["color"];
  divFontWeight?: CSSProperties["fontWeight"];
  uarrowDownIconLeft?: CSSProperties["left"];
  uarrowDownIconRight?: CSSProperties["right"];
};

const Statedecrease: FunctionComponent<StatedecreaseType> = ({
  uarrowDown,
  statedecreaseWidth,
  statedecreaseHeight,
  statedecreasePosition,
  statedecreaseTop,
  statedecreaseRight,
  statedecreaseBottom,
  statedecreaseLeft,
  rectangleDivBackgroundColor,
  divColor,
  divFontWeight,
  uarrowDownIconLeft,
  uarrowDownIconRight,
}) => {
  const statedecreaseStyle: CSSProperties = useMemo(() => {
    return {
      width: statedecreaseWidth,
      height: statedecreaseHeight,
      position: statedecreasePosition,
      top: statedecreaseTop,
      right: statedecreaseRight,
      bottom: statedecreaseBottom,
      left: statedecreaseLeft,
    };
  }, [
    statedecreaseWidth,
    statedecreaseHeight,
    statedecreasePosition,
    statedecreaseTop,
    statedecreaseRight,
    statedecreaseBottom,
    statedecreaseLeft,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
      fontWeight: divFontWeight,
    };
  }, [divColor, divFontWeight]);

  const uarrowDownIconStyle: CSSProperties = useMemo(() => {
    return {
      left: uarrowDownIconLeft,
      right: uarrowDownIconRight,
    };
  }, [uarrowDownIconLeft, uarrowDownIconRight]);

  return (
    <div className={styles.statedecrease} style={statedecreaseStyle}>
      <div className={styles.statedecreaseChild} style={rectangleDivStyle} />
      <div className={styles.div} style={div1Style}>
        8%
      </div>
      <img
        className={styles.uarrowDownIcon}
        alt=""
        src={uarrowDown}
        style={uarrowDownIconStyle}
      />
    </div>
  );
};

export default Statedecrease;
