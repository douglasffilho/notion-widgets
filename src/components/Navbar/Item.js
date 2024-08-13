import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Item = ({ children, redirect, openNewPage = false }) => {
  const pathname = usePathname();
  const [className, setClassName] = useState('navbar-item');
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    setRedirectTo(redirect);
  }, [redirect]);

  useEffect(() => {
    if (pathname) {
      setClassName(
        `navbar-item${pathname === redirectTo && redirectTo !== '/' ? ' active' : ''}`,
      );
    } else {
      setClassName('navbar-item');
    }
  }, [pathname, redirectTo]);

  return openNewPage ? (
    <a
      className={className}
      href={redirectTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <a className={className} href={redirectTo}>
      {children}
    </a>
  );
};

export default Item;
