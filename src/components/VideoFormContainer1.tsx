import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import CardContainer1 from "./CardContainer1";
import CardContainer2 from "./CardContainer2";
import styles from "./VideoFormContainer1.module.css";
const VideoFormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <b className={styles.video}>Video</b>
        <b className={styles.video}>Requested By</b>
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
          articleSubtitle="Apurva"
          propLeft="147px"
          propLeft1="662px"
          propLeft2="350px"
        />
        <CardContainer
          articleTitle="Why the FBI was formed"
          dateOrTime="24/08/2023 "
          timeOrDate="15:18:00"
          actionButtonText="Delete"
          articleSubtitle="Apurva"
          propLeft="143px"
          propLeft1="665px"
          propLeft2="350px"
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
          <div className={styles.vaibhav}>Vaibhav</div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.ucheckIcon}
                alt=""
                src="/undefined68.png"
              />
            </div>
            <div className={styles.approved}>Approved</div>
          </div>
        </div>
        <CardContainer1
          myFirstExperience="My First Experience "
          withJapanBulletTrain="With Japan Bullet Train"
          prop="26/08/2023 "
          prop1="1:10:03"
          name1="Vaibhav"
          frame1000000889="/undefined70.png"
          propLeft="347px"
          myFirstExperienceContaineTop="29px"
          myFirstExperienceContaineLeft="157px"
          myFirstExperienceContaineWhiteSpace="unset"
        />
        <CardContainer
          articleTitle="Welcome To Osaka !!"
          dateOrTime="27/08/2023 "
          timeOrDate="08:17:23"
          actionButtonText="Upload"
          articleSubtitle="Apurva"
          propLeft="154px"
          propLeft1="662px"
          propLeft2="350px"
        />
        <CardContainer2
          articleTitle="Best Things to Do "
          location1="in Osaka"
          dateOrTime="28/08/2023 "
          timeStamp="06:17:23"
          articleSubtitle="Apurva"
          propTop="33px"
          propLeft="151px"
          propLeft1="350px"
        />
        <CardContainer2
          articleTitle="Osaka’s Crazy "
          location1="Nightlife"
          dateOrTime="29/08/2023 "
          timeStamp="22:17:23"
          articleSubtitle="Apurva"
          propTop="33px"
          propLeft="165px"
          propLeft1="350px"
        />
        <CardContainer
          articleTitle="Osaka to Kyoto"
          dateOrTime="30/08/2023 "
          timeOrDate="23:17:23"
          actionButtonText="Rename"
          articleSubtitle="Vaibhav"
          propLeft="152px"
          propLeft1="658px"
          propLeft2="347px"
        />
        <CardContainer2
          articleTitle="I dressed as a "
          location1="local Japanese"
          dateOrTime="31/08/2023 "
          timeStamp="07:17:23"
          articleSubtitle="Apurva"
          propTop="29px"
          propLeft="159px"
          propLeft1="350px"
        />
        <CardContainer2
          articleTitle="Bye Japan "
          location1="Lovely Trip ❤️"
          dateOrTime="31/08/2023 "
          timeStamp="04:17:23"
          articleSubtitle="Apurva"
          propTop="28px"
          propLeft="168px"
          propLeft1="350px"
        />
      </div>
    </div>
  );
};

export default VideoFormContainer1;
