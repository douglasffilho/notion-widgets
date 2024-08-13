import { useEffect, useState } from 'react';

const Parallax = ({ children, translucid }) => {
  const [media, setMedia] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    children.forEach((element) => {
      if (element.props?.src) {
        setMedia(element);
      } else {
        setContent(element);
      }
    });
  }, [content, children, media]);

  return (
    <div className={`parallax${translucid ? ' translucid' : ''}`}>
      {media}

      <div className="content">{content}</div>

      <div className="overlay"></div>
    </div>
  );
};

export default Parallax;
