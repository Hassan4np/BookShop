import Bannar from "../Page/Bannar";
import Bannar_2 from "../Page/Bannar_2";
import BookCover from "../Products/Bookcover/BookCover";
import Booklist from "../Products/Booklist/HotDell";
import FeatureBooks from "../Products/FeatureBooks/FeatureBooks";
import Review from "../Products/Review/Review";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Bannar_2></Bannar_2>
            <Booklist></Booklist>
            <FeatureBooks></FeatureBooks>
            <BookCover></BookCover>
            <Review></Review>
        
        </div>
    );
};

export default Home;