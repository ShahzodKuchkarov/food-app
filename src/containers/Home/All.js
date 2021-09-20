import React from 'react'
import Card from './Card'
import HotDrinks from '../../assets/home/hot-drinks.jpg'
import Salad from '../../assets/home/salad.jpg'
import Sandwich from '../../assets/home/sandwich.jpg'
import Shakes from '../../assets/home/shakes.jpg'
import Snacks from '../../assets/home/snacks.jpg'
import SoftDrinks from '../../assets/home/softdrinks.jpg'
import { Link } from 'react-router-dom'
import { Main } from '../../style/StyleAll';
import { useTranslation } from 'react-i18next'



export default function All() {
    const { t } = useTranslation();

    return (
        <Main>
            <div className="top">
                <Link >
                    <Card
                        img={HotDrinks}
                        label={t('HotDrinks.1')}
                    />
                </Link>
                <Link>
                    <Card
                        img={Salad}
                        label={t('Salads.1')}
                    />
                </Link>
                <Link>
                    <Card
                        img={Sandwich}
                        label={t('Sandwiches.1')}
                    />
                </Link>
                <Link to="/shakes">
                    <Card
                        img={Shakes}
                        label={t('Shakes.1')}
                    />
                </Link>
                <Link>
                    <Card
                        img={Snacks}
                        label={t('Snacks.1')}
                    />
                </Link>
                <Link>
                    <Card
                        img={SoftDrinks}
                        label={t('SoftDrinks.1')}
                    />
                </Link>
            </div>
        </Main>
    )
}
