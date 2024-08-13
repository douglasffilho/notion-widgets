import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileItem = ({ children, redirect, openNewPage = false }) => {
  const pathname = usePathname();
  const [className, setClassName] = useState('navbar-item');
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    setRedirectTo(redirect);
  }, [redirect]);

  useEffect(() => {
    const activeClassName =
      pathname === redirectTo && redirectTo !== '/' ? ' active' : '';
    setClassName(`navbar-item${activeClassName}`);
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

export default MobileItem;
