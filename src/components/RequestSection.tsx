import { FunctionComponent } from "react";
import styles from "./RequestSection.module.css";

type RequestSectionType = {
  requestCount?: string;
  groupDiv?: boolean;
};

const RequestSection: FunctionComponent<RequestSectionType> = ({
  requestCount,
  groupDiv,
}) => {
  return (
    <div className={styles.requestsParent}>
      <div className={styles.requests}>{requestCount}</div>
      {!groupDiv && (
        <div className={styles.image20Wrapper}>
          <img className={styles.image20Icon} alt="" src="/undefined72.png" />
        </div>
      )}
    </div>
  );
};

export default RequestSection;
