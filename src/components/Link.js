import { useEffect, useState } from 'react';

const Link = ({ active, children, href, reverse }) => {
  const [className, setClassName] = useState('link-button');

  useEffect(() => {
    const activeClassName = active ? ' active' : '';
    const reverseClassName = active ? ' reverse' : '';

    setClassName(`link-button${activeClassName}${reverseClassName}`);
  }, [active, reverse]);

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
