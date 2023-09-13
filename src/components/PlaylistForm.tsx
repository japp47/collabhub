import { FunctionComponent } from "react";
import styles from "./PlaylistForm.module.css";
const PlaylistForm: FunctionComponent = () => {
  return (
    <div className={styles.playlist}>
      <div className={styles.input}>
        <div className={styles.examplegmailcom}>Example@gmail.com</div>
      </div>
      <select className={styles.playlistChild} />
      <div className={styles.playlist1}>Playlist</div>
    </div>
  );
};

export default PlaylistForm;
