import React, { memo } from 'react'
import HeroSection from './HeroSection'
import Services from './Services';
import FAQ from './FAQ';
import InqurieNow from './InqurieNow';

const HomePage = memo(() => (
    <>
        <HeroSection />
        <Services />
        <FAQ />
        <InqurieNow />
    </>
));

export default HomePage;
