import { FunctionComponent } from "react";
import PriceContainer from "../components/PriceContainer";
import TestimonialsContainer from "../components/TestimonialsContainer";
import ContainerHowWeWork from "../components/ContainerHowWeWork";
import TrustSectionForm from "../components/TrustSectionForm";
import Footer from "../components/Footer";
import ContainerCard from "../components/ContainerCard";
import AudienceFilterForm from "../components/AudienceFilterForm";
import PlaylistForm from "../components/PlaylistForm";
import StateActive from "../components/StateActive";
import Header from "../components/Header";
import styles from "./UploadScreen.module.css";
const UploadScreen: FunctionComponent = () => {
  return (
    <div className={styles.uploadScreen}>
      <div className={styles.uploadScreenChild} />
      <div className={styles.uploadScreenItem} />
      <div className={styles.uploadScreenInner} />
      <div className={styles.ourBlogs}>
        <div className={styles.heading2}>CloudWave Blogs</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.detectPowerfulApps}>
            Detect powerful apps for productivity
          </div>
          <div className={styles.theFutureOf}>
            The Future of Business: Exploring the Power of SaaS with CloudWave
          </div>
          <div className={styles.theArtOf}>
            The Art of Streamlining: A Closer Look at CloudWave in Action
          </div>
          <div className={styles.customizationAndPersonalizat}>
            Customization and Personalization: The Key Features of CloudWave
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild1} />
          <div className={styles.discoverAllArticles}>
            Discover all articles
          </div>
        </div>
      </div>
      <PriceContainer seeThePrice={false} showSeeThePrice />
      <TestimonialsContainer
        tetimonials={false}
        propBackgroundImage="url('/lahinch20home20sml5x1png1@3x.png')"
      />
      <div className={styles.reasonsToUseCloudwave}>
        <div className={styles.reasonsToUse}>Reasons To Use CollabHub</div>
        <div className={styles.heading21}>4 Reasons To Use CloudWave</div>
        <div className={styles.groupParent}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <img className={styles.svgIcon} alt="" src="/undefined26.png" />
            </div>
            <div className={styles.button1}>
              <img className={styles.svgIcon} alt="" src="/undefined27.png" />
            </div>
          </div>
          <div className={styles.divuspsItem}>
            <div className={styles.divuspsItemWrapper}>
              <img
                className={styles.icn4pngIcon}
                alt=""
                src="/undefined28.png"
              />
              <div className={styles.divuspsItemDescription}>
                <div className={styles.beVisibleSending}>
                  Be visible sending your personal
                </div>
                <div className={styles.proagendaBookingLink}>
                  ProAgenda booking link to your
                </div>
                <div className={styles.clientsInMails}>
                  clients in mails or on social media
                </div>
                <div className={styles.andEmbedIt}>
                  and embed it on your website.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divuspsItem1}>
            <div className={styles.divuspsItemWrapper1}>
              <div className={styles.uspSampleIcon3svg}>
                <img
                  className={styles.uspSampleIcon3svg1}
                  alt=""
                  src="/undefined112.png"
                />
              </div>
              <div className={styles.divuspsItemDescription1}>
                <div className={styles.saveTimeOn}>
                  Save time on your admin with
                </div>
                <div className={styles.integratedOnlinePayments}>
                  integrated online payments and
                </div>
                <div className={styles.reportingTools}>reporting tools</div>
              </div>
            </div>
          </div>
          <div className={styles.divuspsItem2} />
          <div className={styles.divuspsItem3}>
            <img
              className={styles.divuspsItemChild}
              alt=""
              src="/undefined113.png"
            />
            <div className={styles.advancedSystemsParent}>
              <div className={styles.advancedSystems}>Advanced Systems</div>
              <div className={styles.advancedSystemsEngineering}>
                Advanced Systems Engineering consists of solutions (and
                respective development), increasingly relying on intelligent
                components and subsystems to deliver improved performance for
                different and complex.
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild2} />
            <div className={styles.learnMore}>Learn more</div>
          </div>
        </div>
      </div>
      <ContainerHowWeWork howWeWork={false} />
      <div className={styles.trustedByCompanies}>
        <TrustSectionForm propTop="5442px" />
        <img className={styles.imageIcon} alt="" src="/undefined40.png" />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.lottiePlayerSvg}>
          <img
            className={styles.clipPathGroup}
            alt=""
            src="/undefined114.png"
          />
          <div className={styles.kUsersAroundTheGlobeParent}>
            <div className={styles.kUsersAround}>
              +10k Users around the Globe
            </div>
            <img className={styles.ellipseIcon} alt="" src="/undefined42.png" />
            <img className={styles.groupChild3} alt="" src="/undefined43.png" />
            <img className={styles.groupChild4} alt="" src="/undefined44.png" />
            <img className={styles.groupChild5} alt="" src="/undefined45.png" />
          </div>
        </div>
        <div className={styles.heading1Parent}>
          <div className={styles.heading1}>
            <div className={styles.simplifyYourWorkflowContainer}>
              <p className={styles.simplifyYourWorkflow}>
                Simplify Your Workflow with
              </p>
              <p className={styles.simplifyYourWorkflow}>CloudWave</p>
            </div>
            <div className={styles.simplyYourWorkflow}>
              Simply your workflow with Collabhub
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild6} />
            <div className={styles.letsDoThis}>Lets do this</div>
          </div>
          <div className={styles.divbtnsWrapper}>
            <div className={styles.link}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/undefined46.png"
                />
                <div className={styles.playVideo}>Play video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cloudwaveGivesYou}>
        CloudWave Gives You Control over Your Business
      </div>
      <Footer propTop="1794px" />
      <img className={styles.groupIcon} alt="" src="/undefined47.png" />
      <ContainerCard
        dimension="/undefined115.png"
        productDimensions="/undefined116.png"
        dimensionCode="/undefined117.png"
        dimensionValue="/undefined118.png"
        propTop="1318px"
      />
      <div className={styles.lineDiv} />
      <div className={styles.uploadScreenChild1} />
      <div className={styles.videoFile18Parent}>
        <img className={styles.videoFile18} alt="" src="/undefined119.png" />
        <div className={styles.nameParent}>
          <div className={styles.name}>
            <div className={styles.titleRequired}>Title (required)</div>
            <input
              className={styles.input}
              placeholder="Your Title"
              type="text"
            />
          </div>
          <div className={styles.email}>
            <div className={styles.description}>Description</div>
            <input
              className={styles.input1}
              placeholder="Example@gmail.com"
              type="text"
            />
          </div>
          <div className={styles.email1}>
            <div className={styles.thumbnail}>Thumbnail</div>
            <div className={styles.emailChild} />
            <div className={styles.input2}>
              <div className={styles.examplegmailcom}>Example@gmail.com</div>
            </div>
            <img
              className={styles.cloudComputing1Icon}
              alt=""
              src="/undefined120.png"
            />
          </div>
          <AudienceFilterForm />
          <div className={styles.email2}>
            <div className={styles.addSubtitle}>Add Subtitle ( .SRT, .EXT)</div>
            <button className={styles.selectWrapper}>
              <div className={styles.select}>Select</div>
            </button>
          </div>
          <PlaylistForm />
          <div className={styles.buttons}>
            <button className={styles.cancelWrapper}>
              <div className={styles.select}>Cancel</div>
            </button>
            <StateActive
              fisend="/undefined122.png"
              label="Ask Creator"
              showIcons
              stateActiveWidth="332px"
              stateActiveHeight="59px"
              stateActivePosition="relative"
              rectangleDivCursor="pointer"
              rectangleDivBorder="none"
              rectangleDivPadding="0"
              labelWidth="35.02%"
              labelRight="36.23%"
              fisendIconWidth="17.85%"
              fisendIconRight="82.15%"
              transferFundsLeft="30.34%"
            />
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp}>Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.uploadOnYoutubeParent}>
        <b className={styles.uploadOnYoutube}>Upload On Youtube</b>
        <div className={styles.image20Wrapper}>
          <img className={styles.image20Icon} alt="" src="/undefined72.png" />
        </div>
        <img className={styles.youtube1Icon} alt="" src="/undefined123.png" />
      </div>
      <div className={styles.uploadScreenChild2} />
      <Header
        imageDimensions="/undefined124.png"
        propCursor="unset"
        propBorderRadius="unset"
      />
    </div>
  );
};

export default UploadScreen;
