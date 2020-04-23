import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';

// components
import Header from './components/Header';
import Navigation from './components/Navigation';

// pages
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Approach from './pages/Approach';
import Services from './pages/Services';

import './styles/App.scss';

function debounce(fn: () => void, ms: number) {
  let timer: ReturnType<typeof setTimeout> | null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function (this: any) {
      timer = null;
      fn.apply(this, arguments as any);
    }, ms);
  };
}

type RouteT = {
  path: string;
  name: string;
  Component: React.FC;
};

const routes: RouteT[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/about-us', name: 'About us', Component: About },
  { path: '/case-studies', name: 'Case studies', Component: CaseStudies },
];

const App: React.FC = () => {
  const [dimensions, setDimensions] = React.useState<{
    height: number;
    width: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    let vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  });

  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }: RouteT) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
};

export default App;
