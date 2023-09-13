import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialsContainer.module.css";

type TestimonialsContainerType = {
  tetimonials?: boolean;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const TestimonialsContainer: FunctionComponent<TestimonialsContainerType> = ({
  tetimonials,
  propBackgroundImage,
}) => {
  const lahinch20home20sml5x1pngStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    !tetimonials && (
      <div className={styles.tetimonials}>
        <div className={styles.heading2}>Recommended by the Greatest</div>
        <div className={styles.testimonialsParent}>
          <div className={styles.testimonials}>
            <div className={styles.divtabSlidesItemNumber}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.divtabSlidesItemContent}>
              <div className={styles.divtabSlidesItemContentW}>
                <div className={styles.divtabSlidesItemContentM}>
                  <div
                    className={styles.lahinch20home20sml5x1png}
                    style={lahinch20home20sml5x1pngStyle}
                  >
                    <img
                      className={styles.lahinch20home20sml5x1pngIcon}
                      alt=""
                      src="/undefined24.png"
                    />
                  </div>
                  <div className={styles.johnDoeCeo}>
                    John Doe, CEO of TechWorld Solutions
                  </div>
                </div>
                <div className={styles.divtabSlidesItemQuote}>
                  <div className={styles.svg}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/undefined25.png"
                    />
                  </div>
                  <div className={styles.iCouldntBelieve}>
                    I couldn't believe the transformative impact CloudWave had
                    on our business! With their cutting-edge software, we
                    streamlined our operations, enhanced productivity, and
                    witnessed remarkable growth. The seamless integration and
                    user-friendly interface make it a joy to work with. Thank
                    you, CloudWave, for taking our business to new heights!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.label}>
            <div className={styles.divtabSlidesItemNumber1}>
              <div className={styles.div1}>2</div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.divtabSlidesItemNumber2}>
              <div className={styles.div1}>3</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TestimonialsContainer;
