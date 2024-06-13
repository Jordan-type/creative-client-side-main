import Blogs from "./home/Blogs";
import Expertise from "./home/Expertise";
import Hero from "./home/Hero";
import Quality from "./home/Quality";
import Services from "./home/Services";

const Home = () => {
    return (
        <div className="font-garamond">
            <Hero />
            <Services />
            <Expertise />
            <Quality />
            <Blogs />
        </div>
    );
};
export default Home;
