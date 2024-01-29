import BuildForms from "../BuildForms/BuildForms";
import HomeBanner from "../HomeBanner/HomeBanner";
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
        </div>
    );
};

export default Home;