import BuildForms from "../BuildForms/BuildForms";
import Client from "../Client/Client";
import CollectFully from "../CollectFully/CollectFully";
import Connect from "../Connect/Connect";
import Craft from "../Craft/Craft";
import Frequently from "../Frequently/Frequently";
import Fully from "../Fully/Fully";
import HomeBanner from "../HomeBanner/HomeBanner";
import NextLevel from "../NextLevel/NextLevel";
import PowerSection from "../PowerSection/PowerSection";
import Powerful from "../Powerful/Powerful";
import Seehow from "../Seehow/Seehow";
import WatchSection from "../WatchSection/WatchSection";

 

const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div>
                <Powerful></Powerful>
            </div>
            <div>
                <BuildForms></BuildForms>
            </div>
            <div>
                <CollectFully></CollectFully>
            </div>
            <div>
                <Fully></Fully>
            </div>
            <div>
                <Connect></Connect>
            </div>
            <div>
                <Craft></Craft>
            </div>
            <div>
                <NextLevel></NextLevel>
            </div>
            <div>
                <WatchSection></WatchSection>
            </div>
            <div>
                <Seehow></Seehow>
            </div>
            <div>
                <PowerSection></PowerSection>
            </div>
            <div>
                <Client></Client>
            </div>
            <div>
                <Frequently></Frequently>
            </div>
        </div>
    );
};

export default Home;