import React, { Fragment } from 'react';
import Banner from '../views/Banner';
import Slider from '../views/cardSlider/Slider';
import Everyone from '../views/Everyone';
import Nesting from '../views/Nesting/Nesting';
import Publishers from '../views/publishers';


const Home = () => {
    return (
        <Fragment>
            <Banner/>
            <Everyone/>
            <Nesting/>
            <Publishers/>
            <Slider/>
        </Fragment>
    );
};

export default Home;