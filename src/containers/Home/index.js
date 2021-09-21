import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { FaCubes, BsFillHeartFill, GiRibbonMedal, AiFillStar, AiFillDatabase } from 'react-icons/all';
import { Main } from '../../style/StyleHome';
import All from './All';
import SwitchSelector from 'react-switch-selector';
import { BsSearch } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import Axios from "../../utils/axios";

export default function Index() {

  const { t } = useTranslation()

  const [tabName, setTabName] = useState('all');
  const [lactose, setLactose] = useState('');
  const [vegan, setVegan] = useState('');
  const [gluten, setGluten] = useState('');



  /*   useEffect(() => {
      Axios.get('/users')
        .then(({ data }) => {
          if (data.success) {
            console.log(data)
          }
          else {
            console.log(data);
          }
        })
        .catch(err => {
          console.log(err);
        })
  
  
    }, [])
   */





  const handleCLick = type => {
    setTabName(type);
    Axios.get('/users')
      .then(({ data }) => {
        if (data) {
          console.log(data);
        }
        else {
          console.log('error');
        }
      })
      .catch(err => {
        console.log(err);
      })
  };
  /* console.log(vegan) */

  //REACT SWITCH TOGGLER

  const options = [
    {
      label: 'No',
      value: "no",
      selectedBackgroundColor: "#bc0000",
    },
    {
      label: "Yes",
      value: "yes",
      selectedBackgroundColor: "#ff2c68"
    }
  ];

  const onLactose = (newValue) => {
    setLactose(newValue)
  };

  const onVegan = (newValue) => {
    setVegan(newValue)
  };

  const onGluten = (newValue) => {
    setGluten(newValue)
  };

  console.log(lactose);
  console.log(vegan);
  console.log(gluten);


  const initialSelectedIndex = options.findIndex(({ value }) => value === "");



  return (
    <Main>

      <div className="top">
        <form action="">
          <button type="submit"><BsSearch /></button>
          <input type="text" placeholder={t('Search.1')} />
        </form>
        <div className="top__switch" style={{ width: 100, height: 25 }}>
          <SwitchSelector
            onChange={onLactose}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#ffcfdc"}
            fontColor={"#f5f6fa"}
            fontSize={"20px"}
          />
          <span className="label">
            {t('Lactose.1')}
          </span>
        </div>
        <div className="top__switch" style={{ width: 100, height: 25 }}>
          <SwitchSelector
            onChange={onVegan}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#ffcfdc"}
            fontColor={"#f5f6fa"}
            fontSize={"20px"}
          />
          <span className="label">
            {t('Vegan.1')}
          </span>
        </div>
        <div className="top__switch" style={{ width: 100, height: 25 }}>
          <SwitchSelector
            onChange={onGluten}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#ffcfdc"}
            fontColor={"#f5f6fa"}
            fontSize={"20px"}
          />
          <span className="label">
            {t('Gluten.1')}
          </span>
        </div>
      </div>

      <Carousel />
      <div className="tab">
        <ul className="tab__list">
          <li className={`tab__list-item ${tabName === 'all' ? 'active' : ''}`}
            onClick={() => handleCLick('all')}
          >
            <span className="icons">
              <FaCubes />
            </span>
            {t('AllCategories.1')}
          </li>
          <li className="tab__list-item"
            onClick={() => handleCLick('pop')}
          >
            <span className="icons">
              <BsFillHeartFill />
            </span>
            {t('Popular.1')}
          </li>
          <li className="tab__list-item"
            onClick={() => handleCLick('best')}
          >
            <span className="icons">
              <GiRibbonMedal />
            </span>
            {t('BestSellers.1')}
          </li>
          <li className="tab__list-item"
            onClick={() => handleCLick('fav')}
          >
            <span className="icons">
              <AiFillStar />
            </span>
            {t('Favorites.1')}
          </li>
          <li className="tab__list-item"
            onClick={() => handleCLick('last')}
          >
            <span className="icons">
              <AiFillDatabase />
            </span>
            {t('Favorites.1')}
          </li>
        </ul>
      </div>
      {
        tabName === 'all' ?
          <All />
          :
          null
      }

    </Main>
  );

}
