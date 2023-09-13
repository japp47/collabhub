import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActive.module.css";

type StateActiveType = {
  fisend?: string;
  label?: string;
  showIcons?: boolean;

  /** Style props */
  stateActiveWidth?: CSSProperties["width"];
  stateActiveHeight?: CSSProperties["height"];
  stateActivePosition?: CSSProperties["position"];
  rectangleDivCursor?: CSSProperties["cursor"];
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivPadding?: CSSProperties["padding"];
  labelWidth?: CSSProperties["width"];
  labelRight?: CSSProperties["right"];
  fisendIconWidth?: CSSProperties["width"];
  fisendIconRight?: CSSProperties["right"];
  transferFundsLeft?: CSSProperties["left"];
};

const StateActive: FunctionComponent<StateActiveType> = ({
  fisend,
  label = "Transfer Funds",
  showIcons = true,
  stateActiveWidth,
  stateActiveHeight,
  stateActivePosition,
  rectangleDivCursor,
  rectangleDivBorder,
  rectangleDivPadding,
  labelWidth,
  labelRight,
  fisendIconWidth,
  fisendIconRight,
  transferFundsLeft,
}) => {
  const stateActiveStyle: CSSProperties = useMemo(() => {
    return {
      width: stateActiveWidth,
      height: stateActiveHeight,
      position: stateActivePosition,
    };
  }, [stateActiveWidth, stateActiveHeight, stateActivePosition]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      cursor: rectangleDivCursor,
      border: rectangleDivBorder,
      padding: rectangleDivPadding,
    };
  }, [rectangleDivCursor, rectangleDivBorder, rectangleDivPadding]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      width: labelWidth,
      right: labelRight,
    };
  }, [labelWidth, labelRight]);

  const fisendIconStyle: CSSProperties = useMemo(() => {
    return {
      width: fisendIconWidth,
      right: fisendIconRight,
    };
  }, [fisendIconWidth, fisendIconRight]);

  const transferFundsStyle: CSSProperties = useMemo(() => {
    return {
      left: transferFundsLeft,
    };
  }, [transferFundsLeft]);

  return (
    <div className={styles.stateactive} style={stateActiveStyle}>
      <div className={styles.stateactiveChild} style={rectangleDiv1Style} />
      <div className={styles.label} style={labelStyle}>
        {showIcons && (
          <img
            className={styles.fisendIcon}
            alt=""
            src={fisend}
            style={fisendIconStyle}
          />
        )}
        <div className={styles.transferFunds} style={transferFundsStyle}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default StateActive;
