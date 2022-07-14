import * as React from 'react';
import ImageBoxes from './modules/views/ImageBoxes';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AboutUs from './modules/views/AboutUs';
import Process from './modules/views/Process';
import Contact from './modules/views/Contact';
import CWDAppBar from './modules/views/CWDAppBar';
import withRoot from './modules/withRoot';
import Testimonials from './modules/views/Testimonials';

function Index() {
  return (
    <React.Fragment>
      <CWDAppBar />
      <ProductHero />
      <AboutUs />
      <ImageBoxes />
      <Process />
      <Testimonials />
      <Contact />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
