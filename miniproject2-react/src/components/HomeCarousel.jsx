import Carousel from '../components/Carousel';
import BatmanAnimatedSeries1 from '../assets/BatmanAnimatedSeries1.jpg';
import BatmanAnimatedSeries2 from '../assets/BatmanAnimatedSeries2.jpg';
import DK1 from '../assets/DK1.jpg';
import DK2 from '../assets/DK2.jpg';
import BatmanArkhamAsylum from '../assets/BatmanArkhamAsylum.jpg';
import BatmanArkhamCity from '../assets/BatmanArkhamCity.jpg';
import BatmanArkhamOrigins from '../assets/BatmanArkhamOrigins.jpg';
import BatmanArkhamKnight from '../assets/BatmanArkhamKnight.jpg';

const homeImages = [BatmanAnimatedSeries1, BatmanAnimatedSeries2, DK1, DK2, BatmanArkhamAsylum, BatmanArkhamCity, BatmanArkhamOrigins, BatmanArkhamKnight];

const Home = () => {
  return (
    <div>
      <Carousel imageUrls={homeImages} />
    </div>
  );
};

export default Home;
