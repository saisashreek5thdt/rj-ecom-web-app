'use client';

import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleSelectStart = (e) => e.preventDefault();

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return <div className="select-none">{children}</div>;
}
