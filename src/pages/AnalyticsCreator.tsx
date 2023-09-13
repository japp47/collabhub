import { FunctionComponent, useCallback } from "react";
import PriceContainer from "../components/PriceContainer";
import TestimonialsContainer from "../components/TestimonialsContainer";
import ContainerHowWeWork from "../components/ContainerHowWeWork";
import TrustSectionForm from "../components/TrustSectionForm";
import Footer from "../components/Footer";
import ContainerCard from "../components/ContainerCard";
import FormContainer from "../components/FormContainer";
import TimeSpentGraphContainer from "../components/TimeSpentGraphContainer";
import Card from "../components/Card";
import WatchTimeCard from "../components/WatchTimeCard";
import { useNavigate } from "react-router-dom";
import styles from "./AnalyticsCreator.module.css";
const AnalyticsCreator: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWorkspaceClick = useCallback(() => {
    navigate("/workspace-creator");
  }, [navigate]);

  const onRequestsClick = useCallback(() => {
    navigate("/request-log-creator");
  }, [navigate]);

  return (
    <div className={styles.analyticsCreator}>
      <div className={styles.analyticsCreatorChild} />
      <div className={styles.analyticsCreatorItem} />
      <div className={styles.analyticsCreatorInner} />
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
        propBackgroundImage="url('/lahinch20home20sml5x1png@3x.png')"
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
                  src="/undefined82.png"
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
              src="/undefined30.png"
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
          <img className={styles.clipPathGroup} alt="" src="/undefined83.png" />
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
      <ContainerCard
        dimension="/undefined48.png"
        productDimensions="/undefined49.png"
        dimensionCode="/undefined50.png"
        dimensionValue="/undefined54.png"
        propTop="1318px"
      />
      <div className={styles.lineDiv} />
      <div className={styles.analyticsCreatorChild1} />
      <div className={styles.dashboard}>
        <FormContainer />
        <div className={styles.spendingChart}>
          <TimeSpentGraphContainer />
        </div>
        <Card
          name1="Total Views"
          amount="670,000"
          footer="Last 30 days views"
          figpie="/undefined105.png"
          uarrowUp="/undefined106.png"
          showChart={false}
          cardWidth="382px"
          cardHeight="197px"
          cardPosition="absolute"
          cardTop="29px"
          cardLeft="48px"
          totalIncomeFontSize="18px"
          totalIncomeFontWeight="bold"
          divFontWeight="bold"
          divFontSize="20px"
          last30DaysFontSize="15px"
          last30DaysFontWeight="bold"
          figpieIconHeight="100%"
          figpieIconWidth="100%"
          figpieIconTop="0%"
          figpieIconRight="0%"
          figpieIconBottom="0%"
          figpieIconLeft="0%"
          mobileFontWeight="bold"
          mobileTransform=" rotate(-49.44deg)"
          otherFontWeight="bold"
          otherTransform=" rotate(-49.44deg)"
          rectangleDivBackgroundColor="#c2eec2"
          divFontWeight1="bold"
          divColor="#008000"
          uarrowUpIconLeft="15.62%"
          showCard
        />
        <WatchTimeCard watchTimeHours="Watch time (Hours)" />
        <Card
          name1="Subscribers"
          amount="170,000"
          footer="Last 30 days investment"
          figpie="/undefined105.png"
          uarrowUp="/undefined108.png"
          showChart={false}
          cardWidth="382px"
          cardHeight="197px"
          cardPosition="absolute"
          cardTop="29px"
          cardLeft="1009px"
          totalIncomeFontSize="18px"
          totalIncomeFontWeight="bold"
          divFontWeight="bold"
          divFontSize="16px"
          last30DaysFontSize="15px"
          last30DaysFontWeight="bold"
          figpieIconHeight="100%"
          figpieIconWidth="100%"
          figpieIconTop="0%"
          figpieIconRight="0%"
          figpieIconBottom="0%"
          figpieIconLeft="0%"
          mobileFontWeight="bold"
          mobileTransform=" rotate(-49.44deg)"
          otherFontWeight="bold"
          otherTransform=" rotate(-49.44deg)"
          rectangleDivBackgroundColor="#f3c9c9"
          divFontWeight1="bold"
          divColor="#ff0000"
          uarrowUpIconLeft="15.62%"
        />
        <div className={styles.ellipseParent}>
          <div className={styles.ellipseDiv} />
          <div className={styles.groupChild7} />
          <b className={styles.b}>$60,000/</b>
          <b className={styles.totalRevenueGenerated}>
            Total Revenue Generated
          </b>
        </div>
        <div className={styles.limit}>
          <div className={styles.limitChild} />
          <div className={styles.dailyUserAverage}>
            Daily User Average View Time
          </div>
          <b className={styles.min15}>4:05 min / 15 min</b>
          <div className={styles.limitItem} />
          <div className={styles.limitInner} />
        </div>
      </div>
      <div className={styles.analyticsParent}>
        <div className={styles.analytics}>Analytics</div>
        <div className={styles.image20Wrapper}>
          <img className={styles.image20Icon} alt="" src="/undefined72.png" />
        </div>
        <img className={styles.image23Icon} alt="" src="/undefined109.png" />
      </div>
      <div className={styles.analyticsCreatorChild2} />
      <div className={styles.navbar}>
        <img className={styles.logo1Icon} alt="" src="/undefined74.png" />
        <div className={styles.workspaceParent}>
          <button className={styles.workspace} onClick={onWorkspaceClick}>
            Workspace
          </button>
          <b className={styles.myTeam}>My Team</b>
          <button className={styles.analytics1}>Analytics</button>
          <button className={styles.requests} onClick={onRequestsClick}>
            Requests
          </button>
          <b className={styles.contactUs}>Contact Us</b>
          <div className={styles.services}>Services</div>
          <div className={styles.pricing}>Pricing</div>
          <div className={styles.company}>Company</div>
          <div className={styles.faqs}>FAQs</div>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.loginButton}>
            <div className={styles.logIn}>Log In</div>
            <div className={styles.howItWorks}>How it works</div>
          </div>
          <div className={styles.signupButton}>
            <div className={styles.signUp}>Sign Up</div>
            <div className={styles.howItWorks}>How it works</div>
          </div>
        </div>
        <img className={styles.iconlybulkcall} alt="" src="/undefined75.png" />
        <div className={styles.cloudwaveLogo1svg}>
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <div className={styles.cloudwave1}>CloudWave</div>
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
          <img className={styles.vectorIcon} alt="" src="/undefined76.png" />
        </div>
        <img className={styles.cloudwaveIcon} alt="" src="/undefined81.png" />
      </div>
      <img className={styles.groupIcon} alt="" src="/undefined110.png" />
      <img className={styles.image22Icon} alt="" src="/undefined111.png" />
    </div>
  );
};

export default AnalyticsCreator;
