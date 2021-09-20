import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './style';
import { ReactComponent as ProfileImage } from '../../assets/profile.svg';
import { FaSignOutAlt, ImHome, IoSettings, BiDrink, FaHamburger, FaCocktail, GiFrenchFries, GiBeerBottle } from 'react-icons/all'
import { useTranslation } from 'react-i18next'

export default function Header(props) {

  const { t, i18n } = useTranslation();

  const handleLang = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const signOut = () => {
    localStorage.clear()
    window.location.reload(false);
  }

  const userData = JSON.parse(localStorage.getItem('userData'))


  return (
    <StyledHeader className="sidebar">
      <ProfileImage className="sidebar__image" fill="red" width="30px" height="30px" />
      <h3 className="sidebar__name">{userData.firstName}</h3>
      <div className="sidebar__links">
        <NavLink to="/" exact className="sidebar__link-item">
          <ImHome className="sidebar__link-icon" />
          {t('Home.1')}
        </NavLink>
        <NavLink to="/hotdrinks" exact className="sidebar__link-item">
          <BiDrink className="sidebar__link-icon" />
          {t('HotDrinks.1')}
        </NavLink>
        <NavLink to="/salads" exact className="sidebar__link-item">
          <ImHome className="sidebar__link-icon" />
          {t('Salads.1')}
        </NavLink>
        <NavLink to="/sandwiches" exact className="sidebar__link-item">
          <FaHamburger className="sidebar__link-icon" />
          {t('Sandwiches.1')}
        </NavLink>
        <NavLink to="/shakes" exact className="sidebar__link-item">
          <FaCocktail className="sidebar__link-icon" />
          {t('Shakes.1')}
        </NavLink>
        <NavLink to="/snaks" exact className="sidebar__link-item">
          <GiFrenchFries className="sidebar__link-icon" />
          {t('Snacks.1')}
        </NavLink>
        <NavLink to="/softdrinks" exact className="sidebar__link-item">
          <GiBeerBottle className="sidebar__link-icon" />
          {t('SoftDrinks.1')}
        </NavLink>
        <NavLink to="/products" exact className="sidebar__link-item">
          <GiBeerBottle className="sidebar__link-icon" />
          {t('Products.1')}
        </NavLink>
        <select onChange={handleLang} className="lang" name="lang" id="lang">
          <option>{t('Language.1')}</option>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="chi">Chi</option>
        </select>
      </div>

      <div className="sidebar__links settings">
        <NavLink to="/settings" exact className="sidebar__link-item">
          <IoSettings className="sidebar__link-icon" />
          {t('Settings.1')}
        </NavLink>
        <NavLink onClick={signOut} to="/login" exact className="sidebar__link-item">
          <FaSignOutAlt className="sidebar__link-icon" />
          {t('SignOut.1')}
        </NavLink>
      </div>
    </StyledHeader>
  )
}
