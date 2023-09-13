import { FunctionComponent } from "react";
import styles from "./ContainerHowWeWork.module.css";

type ContainerHowWeWorkType = {
  howWeWork?: boolean;
};

const ContainerHowWeWork: FunctionComponent<ContainerHowWeWorkType> = ({
  howWeWork,
}) => {
  return (
    !howWeWork && (
      <div className={styles.howWeWork}>
        <div className={styles.heading2}>How We Work</div>
        <img className={styles.image16Icon} alt="" src="/undefined31.png" />
        <div className={styles.divcontainerwidget1661163226}>
          <img
            className={styles.individual20illistrationpngIcon}
            alt=""
            src="/undefined32.png"
          />
        </div>
        <img className={styles.image17Icon} alt="" src="/undefined33.png" />
        <div className={styles.solution}>
          <div className={styles.configuration}>Solution</div>
          <div className={styles.solutionInChemistry}>
            Solution, in chemistry, a homogenous mixture of two or more
            substances in relative.
          </div>
          <div className={styles.uploadYourContent}>
            Upload your content in the dashboard and let the editors do your
            work for you
          </div>
        </div>
        <div className={styles.configuratoin}>
          <div className={styles.configuration}>Configuration</div>
          <div className={styles.configureYourAccount}>
            Configure your account by adding editor and managing their roles and
            access
          </div>
          <div className={styles.configurationManagementCan}>
            Configuration management can be used to maintain an understanding of
            the status of system components.
          </div>
        </div>
        <div className={styles.getStarted}>
          <div className={styles.getStarted1}>Get started</div>
          <div className={styles.createYourAccount}>
            Create your account with us and integrate your creative platform
          </div>
          <div className={styles.ourWorldIs}>
            Our world is becoming more and more obsessed with comparison and
            validation.
          </div>
        </div>
      </div>
    )
  );
};

export default ContainerHowWeWork;
