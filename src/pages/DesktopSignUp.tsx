import { FunctionComponent } from "react";
import ContainerCard1 from "../components/ContainerCard1";
import CreateAccountForm1 from "../components/CreateAccountForm1";
import styles from "./DesktopSignUp.module.css";
const DesktopSignUp: FunctionComponent = () => {
  return (
    <div className={styles.desktopSignup}>
      <div className={styles.mainContainer}>
        <ContainerCard1
          imageDimensions="/undefined146.png"
          imageId="/undefined147.png"
          carImageId="/undefined148.png"
        />
        <CreateAccountForm1 />
        <div className={styles.art}>
          <img className={styles.loginArt} alt="" src="/undefined155.png" />
        </div>
      </div>
    </div>
  );
};

export default DesktopSignUp;
