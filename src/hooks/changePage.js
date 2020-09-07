import { useContext } from 'react';

import StateOfPageContext from 'context/StateOfPageContext';

const useChcangePage = () => {
  const { setPageStatus } = useContext(StateOfPageContext);

  const pages = ['/', '/projects', 'contact'];

  const setTimerNextPage = page => {
    setTimeout(() => {
      window.location = page;
    }, 3500);
  };

  const nextPage = next => {
    const { pathname } = window.location;
    const currentPagesPathIndex = pages.findIndex(
      pagePath => pagePath === pathname,
    );

    if (currentPagesPathIndex !== -1) {
      setPageStatus('leave');
      if (next) {
        if (currentPagesPathIndex === 2) {
          setTimerNextPage(pages[0]);
        } else {
          setTimerNextPage(pages[currentPagesPathIndex + 1]);
        }
      } else if (currentPagesPathIndex === 0) {
        setTimerNextPage(pages[2]);
      } else {
        setTimerNextPage(pages[currentPagesPathIndex - 1]);
      }
    }
  };

  return { nextPage };
};

export default useChcangePage;
