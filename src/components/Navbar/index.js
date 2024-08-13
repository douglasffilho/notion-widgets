import { contactURL } from '../../constants';
import Item from './Item';
import ItemsContainer from './ItemsContainer';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ItemsContainer>
        <Item redirect="/">
          <i className="logo"></i>
        </Item>
      </ItemsContainer>

      <ItemsContainer>
        <Item redirect="/#servicos-comerciais">
          <span>Serviços</span>
        </Item>

        <Item redirect="/portfolio">
          <span>Portfólio</span>
        </Item>

        <Item redirect="/sobre">
          <span>Sobre</span>
        </Item>

        <Item redirect={contactURL} openNewPage={true}>
          <span>Contato</span>
        </Item>
      </ItemsContainer>
    </nav>
  );
};

export default Navbar;
