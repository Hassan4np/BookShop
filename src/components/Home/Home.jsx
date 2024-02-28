import Bannar from "../Page/Bannar";
import Bannar_2 from "../Page/Bannar_2";
import BookCover from "../Products/Bookcover/BookCover";
import Booklist from "../Products/Booklist/HotDell";
import Category from "../Products/Category/Category";
import Chat from "../Products/Chat/Chat";
import FeatureBooks from "../Products/FeatureBooks/FeatureBooks";
import Galary from "../Products/Galary/Galary";
import LesastNews from "../Products/LesestNews/LesastNews";
import Pay_Icone from "../Products/Pay_Icone/Pay_Icone";
import Review from "../Products/Review/Review";
import SocialSection from "../Products/SocialSection/SocialSection";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Bannar_2></Bannar_2>
            <Category></Category>
            <Booklist></Booklist>
            <FeatureBooks></FeatureBooks>
            <BookCover></BookCover>
            <Review></Review>
            <LesastNews></LesastNews>
            <Pay_Icone></Pay_Icone>
            <Galary></Galary>
            <Chat></Chat>
            <SocialSection></SocialSection>
       
        
        </div>
    );
};

export default Home;