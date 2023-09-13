import { FunctionComponent } from "react";
import styles from "./ChatboxContainer.module.css";
const ChatboxContainer: FunctionComponent = () => {
  return (
    <div className={styles.chatbox}>
      <div className={styles.chatboxChild} />
      <div className={styles.circularChipParent}>
        <div className={styles.circularChip}>
          <div className={styles.circularChipChild} />
          <img className={styles.usearchIcon} alt="" src="/undefined79.png" />
        </div>
        <div className={styles.transferOption}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined80.png" />
          <div className={styles.mathewParent}>
            <div className={styles.mathew}>Mathew</div>
            <div className={styles.instantTransferBetweenContainer}>
              <p
                className={styles.instantTransferBetween}
              >{`Instant transfer between `}</p>
              <p className={styles.instantTransferBetween}>your own accounts</p>
            </div>
          </div>
        </div>
        <div className={styles.transferOption1}>
          <div className={styles.transferOptionItem} />
          <img
            className={styles.uusersAltIcon}
            alt=""
            src="/undefined126.png"
          />
          <div className={styles.jessyParent}>
            <div className={styles.jessy}>Jessy</div>
            <div className={styles.instantTransferTo}>
              Instant transfer to other eWallet users
            </div>
          </div>
        </div>
        <div className={styles.transferOption2}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined62.png" />
          <div className={styles.ramParent}>
            <div className={styles.ram}>Ram</div>
            <div className={styles.transferToYour}>
              Transfer to your mobile account
            </div>
          </div>
        </div>
        <div className={styles.transferOption3}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined62.png" />
          <div className={styles.ramParent}>
            <div className={styles.ram}>Rahul</div>
            <div className={styles.transferToYour}>
              Transfer to your mobile account
            </div>
          </div>
        </div>
        <div className={styles.transferOption4}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined80.png" />
          <div className={styles.mathewParent}>
            <div className={styles.mathew}>Sara</div>
            <div className={styles.instantTransferBetweenContainer}>
              <p
                className={styles.instantTransferBetween}
              >{`Instant transfer between `}</p>
              <p className={styles.instantTransferBetween}>your own accounts</p>
            </div>
          </div>
        </div>
        <div className={styles.transferOption5}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined80.png" />
          <div className={styles.mathewParent}>
            <div className={styles.mathew}>Arjun</div>
            <div className={styles.instantTransferBetweenContainer}>
              <p
                className={styles.instantTransferBetween}
              >{`Instant transfer between `}</p>
              <p className={styles.instantTransferBetween}>your own accounts</p>
            </div>
          </div>
        </div>
        <div className={styles.transferOption6}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined62.png" />
          <div className={styles.ramParent}>
            <div className={styles.ram}>Ankita</div>
            <div className={styles.transferToYour}>
              Transfer to your mobile account
            </div>
          </div>
        </div>
        <div className={styles.transferOption7}>
          <div className={styles.transferOptionChild} />
          <img className={styles.uuserIcon} alt="" src="/undefined62.png" />
          <div className={styles.ramParent}>
            <div className={styles.ram}>Saurav</div>
            <div className={styles.transferToYour}>
              Transfer to your mobile account
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chats}>Chats</div>
    </div>
  );
};

export default ChatboxContainer;
