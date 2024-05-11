/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce `setTimeout` po 3 vteřinách
  od prvního zobrazení komponenty v konzoli vypíše text „Jsem tady“.
*/

import { useEffect } from 'react';

export const Ukol3 = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('tutu ru tu po třech vteřinách');
    }, 3000);
  }, []);

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
