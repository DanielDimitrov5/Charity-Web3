import React from 'react';
import { Carousel, Col, Row, Statistic } from 'antd';

const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#9fa8d1',
};

const Banner = () => {

    const onChange = (currentSlide) => {
    };
    return (

        <Carousel afterChange={onChange} autoplay>
            <div>
                <h3 style={contentStyle}>Charity causes: 0</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Total Funds collecte: 0</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Goals copleated: 0</h3>
            </div>
        </Carousel>

    );
}

export default Banner;
