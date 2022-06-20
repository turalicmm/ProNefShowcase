import Download from "./components/Download";
import SectionWrapper from "./components/SectionWrapper";
import Features from "./components/Features";

import assets from "./assets";
import styles from "./styles/Global.js";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your best NFT marketplace"
        description="But, Store, Collect NFT's, 
        exchange & earn crypto. 
        Join 1+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef Marketplace. Smooth colors of fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo which runs natively on all user devices. 
        You can easaly get you app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Store showcase"
        description="The app contains two screens. The first screen lists all
         NFT's while the second one shows details about specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download link="https://github.com/turalicmm/ProNef" />
      <div className="py-1 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Mustafa Turalic</span>
        </p>
      </div>
    </>
  );
};

export default App;
