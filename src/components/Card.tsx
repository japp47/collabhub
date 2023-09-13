import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Statedecrease from "./Statedecrease";
import styles from "./Card.module.css";

type CardType = {
  name1?: string;
  amount?: string;
  footer?: string;
  figpie?: string;
  uarrowUp?: string;
  showChart?: boolean;
  showCard?: boolean;

  /** Style props */
  cardWidth?: CSSProperties["width"];
  cardHeight?: CSSProperties["height"];
  cardPosition?: CSSProperties["position"];
  cardTop?: CSSProperties["top"];
  cardLeft?: CSSProperties["left"];
  totalIncomeFontSize?: CSSProperties["fontSize"];
  totalIncomeFontWeight?: CSSProperties["fontWeight"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontSize?: CSSProperties["fontSize"];
  last30DaysFontSize?: CSSProperties["fontSize"];
  last30DaysFontWeight?: CSSProperties["fontWeight"];
  figpieIconHeight?: CSSProperties["height"];
  figpieIconWidth?: CSSProperties["width"];
  figpieIconTop?: CSSProperties["top"];
  figpieIconRight?: CSSProperties["right"];
  figpieIconBottom?: CSSProperties["bottom"];
  figpieIconLeft?: CSSProperties["left"];
  mobileFontWeight?: CSSProperties["fontWeight"];
  mobileTransform?: CSSProperties["transform"];
  otherFontWeight?: CSSProperties["fontWeight"];
  otherTransform?: CSSProperties["transform"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  divFontWeight1?: CSSProperties["fontWeight"];
  divColor?: CSSProperties["color"];
  uarrowUpIconLeft?: CSSProperties["left"];
};

const Card: FunctionComponent<CardType> = ({
  name1 = "Total Income",
  amount = "$670,000",
  footer = "Last 30 days income",
  figpie,
  uarrowUp,
  showChart = true,
  cardWidth,
  cardHeight,
  cardPosition,
  cardTop,
  cardLeft,
  totalIncomeFontSize,
  totalIncomeFontWeight,
  divFontWeight,
  divFontSize,
  last30DaysFontSize,
  last30DaysFontWeight,
  figpieIconHeight,
  figpieIconWidth,
  figpieIconTop,
  figpieIconRight,
  figpieIconBottom,
  figpieIconLeft,
  mobileFontWeight,
  mobileTransform,
  otherFontWeight,
  otherTransform,
  rectangleDivBackgroundColor,
  divFontWeight1,
  divColor,
  uarrowUpIconLeft,
  showCard,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: cardWidth,
      height: cardHeight,
      position: cardPosition,
      top: cardTop,
      left: cardLeft,
    };
  }, [cardWidth, cardHeight, cardPosition, cardTop, cardLeft]);

  const totalIncomeStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: totalIncomeFontSize,
      fontWeight: totalIncomeFontWeight,
    };
  }, [totalIncomeFontSize, totalIncomeFontWeight]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight,
      fontSize: divFontSize,
    };
  }, [divFontWeight, divFontSize]);

  const last30DaysStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: last30DaysFontSize,
      fontWeight: last30DaysFontWeight,
    };
  }, [last30DaysFontSize, last30DaysFontWeight]);

  const figpieIconStyle: CSSProperties = useMemo(() => {
    return {
      height: figpieIconHeight,
      width: figpieIconWidth,
      top: figpieIconTop,
      right: figpieIconRight,
      bottom: figpieIconBottom,
      left: figpieIconLeft,
    };
  }, [
    figpieIconHeight,
    figpieIconWidth,
    figpieIconTop,
    figpieIconRight,
    figpieIconBottom,
    figpieIconLeft,
  ]);

  const mobileStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: mobileFontWeight,
      transform: mobileTransform,
    };
  }, [mobileFontWeight, mobileTransform]);

  const otherStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: otherFontWeight,
      transform: otherTransform,
    };
  }, [otherFontWeight, otherTransform]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight1,
      color: divColor,
    };
  }, [divFontWeight1, divColor]);

  const uarrowDownIconStyle: CSSProperties = useMemo(() => {
    return {
      left: uarrowUpIconLeft,
    };
  }, [uarrowUpIconLeft]);

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.card1} />
      <div className={styles.totalIncome} style={totalIncomeStyle}>
        {name1}
      </div>
      <div className={styles.div} style={divStyle}>
        {amount}
      </div>
      <div className={styles.last30Days} style={last30DaysStyle}>
        {footer}
      </div>
      {showChart && (
        <div className={styles.chart}>
          <img
            className={styles.figpieIcon}
            alt=""
            src={figpie}
            style={figpieIconStyle}
          />
          <div className={styles.mobile} style={mobileStyle}>
            Mobile
          </div>
          <div className={styles.other} style={otherStyle}>
            Other
          </div>
        </div>
      )}
      <Statedecrease
        uarrowDown="/undefined1.png"
        statedecreaseWidth="11.03%"
        statedecreaseHeight="12.5%"
        statedecreasePosition="absolute"
        statedecreaseTop="46.09%"
        statedecreaseRight="50.34%"
        statedecreaseBottom="41.41%"
        statedecreaseLeft="38.62%"
        rectangleDivBackgroundColor="#c2eec2"
        divColor="#008000"
        divFontWeight="800"
        uarrowDownIconLeft="15.63%"
        uarrowDownIconRight="53.13%"
      />
    </div>
  );
};

export default Card;
