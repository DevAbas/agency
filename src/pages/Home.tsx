import React, { useEffect, useState } from 'react';
import { homeAnimation } from '../animations/homeAnimation';
import IntroOverlay from '../components/IntroOverlay';
import Banner from '../components/Banner';
import Cases from '../components/Cases';

const Home: React.FC = () => {
  const [completedAnimation, setCompletedAnimation] = useState<Boolean>(false);

  const completeAnimation = (): void => {
    setCompletedAnimation(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {!completedAnimation ? <IntroOverlay /> : null}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
