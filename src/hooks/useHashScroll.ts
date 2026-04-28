import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, [hash, pathname]);
}
