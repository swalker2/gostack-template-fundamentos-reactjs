import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink activeClassName="is-active" exact to="/">
          Listagem
        </NavLink>
        <NavLink activeClassName="is-active" to="/import">
          Importar
        </NavLink>
        {
          // Todo
        }
      </nav>
    </header>
  </Container>
);

export default Header;
