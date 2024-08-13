import { useCallback, useState } from 'react';

import { contactURL } from '../../constants';
import MobileItem from './MobileItem';
import MobileItemsContainer from './MobileItemsContainer';
import ToggleButton from './ToggleButton';

const MobileNavbar = () => {
  const [showMenu, toggleShowMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    toggleShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <nav className="mobile-navbar">
      <MobileItemsContainer visible={true} fixed={true}>
        <MobileItem redirect="/">
          <i className="logo"></i>
        </MobileItem>
      </MobileItemsContainer>

      <MobileItemsContainer visible={showMenu}>
        <div className="overlay"></div>
        <MobileItem redirect="/#servicos-comerciais">
          <span>Serviços</span>
        </MobileItem>

        <MobileItem redirect="/portfolio">
          <span>Portfólio</span>
        </MobileItem>

        <MobileItem redirect="/sobre">
          <span>Sobre</span>
        </MobileItem>

        <MobileItem redirect={contactURL} openNewPage={true}>
          <span>Contato</span>
        </MobileItem>
      </MobileItemsContainer>

      <ToggleButton onToggle={handleToggleMenu} opened={showMenu} />
    </nav>
  );
};

export default MobileNavbar;
