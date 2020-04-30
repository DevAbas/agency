import React, { useState, useEffect } from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { openMenu, closeMenu } from '../animations/menuAnimation';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

type Dimensions = {
  width: number;
  height: number;
};

type IProps = {
  dimensions: Dimensions;
};

const Header: React.FC<IProps & RouteComponentProps<any>> = ({
  dimensions,
  history,
}) => {
  const [menuState, setMenuState] = useState<{ menuOpened: boolean }>({
    menuOpened: false,
  });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
  });

  useEffect(() => {
    if (menuState.menuOpened) {
      // Run open menu
      openMenu(dimensions.width);
    } else {
      // Run close menu
      closeMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.menuOpened, dimensions.width]);

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to={`${process.env.PUBLIC_URL}`} exact>
              AGENCY.
            </NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              className='hamburger-menu'
              onClick={() => setMenuState({ menuOpened: true })}>
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
