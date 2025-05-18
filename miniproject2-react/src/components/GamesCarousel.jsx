import Carousel from '../components/Carousel';
import BatmanArkhamAsylum from '../assets/BatmanArkhamAsylum.jpg';
import BatmanArkhamCity from '../assets/BatmanArkhamCity.jpg';
import BatmanArkhamOrigins from '../assets/BatmanArkhamOrigins.jpg';
import BatmanArkhamKnight from '../assets/BatmanArkhamKnight.jpg';
import GothamKnights from '../assets/GothamKnights.jpg';

const gameImages = [BatmanArkhamAsylum, BatmanArkhamCity, BatmanArkhamOrigins, BatmanArkhamKnight, GothamKnights];

const Games = () => {
  return (
    <div>
      <Carousel imageUrls={gameImages} />
    </div>
  );
};

export default Games;
