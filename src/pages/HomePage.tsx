import HeroSection from '../components/Home/HeroSection';
import WhyBpmSection from '../components/Home/WhyBpmSection';
import CardList from '../components/Home/CardList';
import HomeCTA from '../components/Home/HomeCTA';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyBpmSection />
      <CardList />
      <HomeCTA />
    </div>
  );
};

export default HomePage;