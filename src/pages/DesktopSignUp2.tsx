import { FunctionComponent } from "react";
import ContainerCard1 from "../components/ContainerCard1";
import CreateAccountForm from "../components/CreateAccountForm";
import styles from "./DesktopSignUp2.module.css";
const DesktopSignUp2: FunctionComponent = () => {
  return (
    <div className={styles.desktopSignup2}>
      <div className={styles.mainContainer}>
        <ContainerCard1
          imageDimensions="/undefined11.png"
          imageId="/undefined12.png"
          carImageId="/undefined13.png"
        />
        <CreateAccountForm />
        <div className={styles.art}>
          <img className={styles.loginArt} alt="" src="/undefined22.png" />
        </div>
      </div>
    </div>
  );
};

export default DesktopSignUp2;
