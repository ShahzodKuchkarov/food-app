import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

export default function SimpleSlider() {

    const { t } = useTranslation()

    var settings = {
        fade: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='first slider'>
                    <h3>{t('Off.1')}</h3>
                    <h4>{t('AllSalads.1')}</h4>
                </div>
                <div className='second slider'>
                    <h3>{t('Off.1')}</h3>
                    <h4>{t('AllSalads.1')}</h4>
                </div>
                <div className='third slider'>
                    <h3>{t('Off.1')}</h3>
                    <h4>{t('AllSalads.1')}</h4>
                </div>
                <div className='forth slider'>
                    <h3>{t('Off.1')}</h3>
                    <h4>{t('AllSalads.1')}</h4>
                </div>
            </Slider>

        </div>

    );
}