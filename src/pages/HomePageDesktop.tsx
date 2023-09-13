import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import ContainerCard from "../components/ContainerCard";
import PriceContainer from "../components/PriceContainer";
import TestimonialsContainer from "../components/TestimonialsContainer";
import ContainerHowWeWork from "../components/ContainerHowWeWork";
import TrustSectionForm from "../components/TrustSectionForm";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./HomePageDesktop.module.css";
const HomePageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homepageDesktop}>
      <div className={styles.homepageDesktopChild} />
      <div className={styles.homepageDesktopItem} />
      <div className={styles.homepageDesktopInner} />
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
      <Footer propTop="5838px" />
      <img className={styles.groupIcon} alt="" src="/undefined135.png" />
      <ContainerCard
        dimension="/undefined48.png"
        productDimensions="/undefined49.png"
        dimensionCode="/undefined50.png"
        dimensionValue="/undefined54.png"
        propTop="5367px"
      />
      <PriceContainer seeThePrice showSeeThePrice />
      <TestimonialsContainer
        tetimonials
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
                  src="/undefined136.png"
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
      <ContainerHowWeWork howWeWork />
      <div className={styles.trustedByCompanies}>
        <TrustSectionForm propTop="1398px" />
        <img className={styles.imageIcon} alt="" src="/undefined137.png" />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.lottiePlayerSvg}>
          <img
            className={styles.clipPathGroup}
            alt=""
            src="/undefined138.png"
          />
          <div className={styles.kUsersAroundTheGlobeParent}>
            <div className={styles.kUsersAround}>
              +10k Users around the Globe
            </div>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/undefined139.png"
            />
            <img
              className={styles.groupChild3}
              alt=""
              src="/undefined140.png"
            />
            <img
              className={styles.groupChild4}
              alt=""
              src="/undefined141.png"
            />
            <img
              className={styles.groupChild5}
              alt=""
              src="/undefined142.png"
            />
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
                  src="/undefined143.png"
                />
                <div className={styles.playVideo}>Play video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationContainer />
      <img className={styles.imageIcon1} alt="" src="/undefined137.png" />
    </div>
  );
};

export default HomePageDesktop;
