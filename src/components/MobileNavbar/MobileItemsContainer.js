import { useEffect, useState } from 'react';

const MobileItemsContainer = ({ children, fixed, visible }) => {
  const [className, setClassName] = useState('mobile-navbar-items-container');

  useEffect(() => {
    const fixedClassName = fixed ? ' fixed' : '';
    const visibilityClassName = visible ? '' : ' invisible';

    setClassName(
      `mobile-navbar-items-container${fixedClassName}${visibilityClassName}`,
    );
  }, [fixed, visible]);

  return <div className={className}>{children}</div>;
};

export default MobileItemsContainer;
