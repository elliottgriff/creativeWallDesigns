import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import Contact from './modules/views/Contact';
import CWDAppBar from './modules/views/CWDAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <CWDAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <Contact />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
