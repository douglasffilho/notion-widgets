import Item from 'components/Navbar/Item';
import ItemsContainer from 'components/Navbar/ItemsContainer';

import { socialMedia } from '../constants';

const LinkTreePage = () => {
  return (
    <div className="linktree-page">
      <nav className="navbar">
        <ItemsContainer>
          <Item redirect="/">
            <i className="logo"></i>
          </Item>
        </ItemsContainer>
      </nav>

      <div className="linktree-wrapper">
        {Object.values(socialMedia).map((media) => (
          <div className="linktree-item" key={media.title}>
            <a href={media.url} target="_blank" rel="noopener noreferrer">
              <img alt={media.title} src={media.icon} />
              <p>{media.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkTreePage;
