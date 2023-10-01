import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box } from '@mui/material';
import pathExampleSmall from '../img/example_small.png'

const Root = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={6}
        >
            <Slider>
                <Slide index={0}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={1}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className='mini__icon'>
                        <Box
                            component="img"
                            src={pathExampleSmall}
                        />
                    </div>
                </Slide>
            </Slider>
        </CarouselProvider>
    );
}

export default Root