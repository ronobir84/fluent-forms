import BuildForms from "../BuildForms/BuildForms";
import CollectFully from "../CollectFully/CollectFully";
import Connect from "../Connect/Connect";
import Craft from "../Craft/Craft";
import Fully from "../Fully/Fully";
import HomeBanner from "../HomeBanner/HomeBanner";
import NextLevel from "../NextLevel/NextLevel";
import Powerful from "../Powerful/Powerful";

 

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
        </div>
    );
};

export default Home;