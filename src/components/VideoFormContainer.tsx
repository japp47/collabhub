import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import CardContainer1 from "./CardContainer1";
import CardContainer2 from "./CardContainer2";
import styles from "./VideoFormContainer.module.css";
const VideoFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <b className={styles.video}>Video</b>
        <b className={styles.video}>Requested To</b>
        <b className={styles.video}>Action</b>
        <b className={styles.video}>Request Time</b>
        <b className={styles.video}>Your Stance</b>
      </div>
      <div className={styles.body}>
        <CardContainer
          articleTitle="A day in Tokyo !!"
          dateOrTime="23/08/2023 "
          timeOrDate="19:17:23"
          actionButtonText="Upload"
          articleSubtitle="Moody Traveller"
        />
        <CardContainer
          articleTitle="Why the FBI was formed"
          dateOrTime="24/08/2023 "
          timeOrDate="15:18:00"
          actionButtonText="Delete"
          articleSubtitle="DetectWorld"
          propLeft="143px"
          propLeft1="665px"
          propLeft2="327px"
        />
        <div className={styles.item}>
          <div className={styles.videoFile16Wrapper}>
            <img className={styles.videoFile16} alt="" src="/undefined67.png" />
          </div>
          <div className={styles.tokyoNightMarketContainer}>
            <p className={styles.tokyoNightMarket}>Tokyo Night Market</p>
            <p className={styles.tokyoNightMarket}>Tour 🏪</p>
          </div>
          <div className={styles.div}>
            <p className={styles.tokyoNightMarket}>{`25/08/2023 `}</p>
            <p className={styles.tokyoNightMarket}>09:17:23</p>
          </div>
          <div className={styles.upload}>Upload</div>
          <div className={styles.moodyTraveller}>Moody Traveller</div>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/undefined69.png" />
            <div className={styles.pending}>Pending</div>
          </div>
        </div>
        <CardContainer1
          myFirstExperience="My First Experience "
          withJapanBulletTrain="With Japan Bullet Train"
          prop="26/08/2023 "
          prop1="1:10:03"
          name1="Moody Traveller"
          frame1000000889="/undefined70.png"
        />
        <CardContainer
          articleTitle="Welcome To Osaka !!"
          dateOrTime="27/08/2023 "
          timeOrDate="08:17:23"
          actionButtonText="Upload"
          articleSubtitle="Moody Traveller"
          propLeft="154px"
          propLeft1="662px"
          propLeft2="312px"
        />
        <CardContainer1
          myFirstExperience="Real Reson Behing"
          withJapanBulletTrain="2008  Crisis"
          prop="28/08/2023 "
          prop1="06:17:23"
          name1="DetectWorld"
          frame1000000889="/undefined71.png"
          propLeft="327px"
          myFirstExperienceContaineTop="33px"
          myFirstExperienceContaineLeft="150px"
          myFirstExperienceContaineWhiteSpace="pre-wrap"
        />
        <CardContainer2
          articleTitle="Why USA invaded"
          location1="Iraq"
          dateOrTime="29/08/2023 "
          timeStamp="22:17:23"
          articleSubtitle="DetectWorld"
        />
        <CardContainer
          articleTitle="Osaka to Kyoto"
          dateOrTime="30/08/2023 "
          timeOrDate="23:17:23"
          actionButtonText="Rename"
          articleSubtitle="Moody Traveller"
          propLeft="152px"
          propLeft1="658px"
          propLeft2="312px"
        />
        <CardContainer2
          articleTitle="I dressed as a "
          location1="local Japanese"
          dateOrTime="31/08/2023 "
          timeStamp="07:17:23"
          articleSubtitle="Moody Traveller"
          propTop="29px"
          propLeft="159px"
          propLeft1="312px"
        />
        <CardContainer2
          articleTitle="Bye Japan "
          location1="Lovely Trip ❤️"
          dateOrTime="31/08/2023 "
          timeStamp="04:17:23"
          articleSubtitle="Moody Traveller"
          propTop="28px"
          propLeft="168px"
          propLeft1="312px"
        />
      </div>
    </div>
  );
};

export default VideoFormContainer;
