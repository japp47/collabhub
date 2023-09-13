import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Requests.module.css";
const Requests: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRequestsTextClick = useCallback(() => {
    navigate("/request-log-editor");
  }, [navigate]);

  return (
    <b className={styles.requests} onClick={onRequestsTextClick}>
      Requests
    </b>
  );
};

export default Requests;
