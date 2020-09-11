import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus, runEntryOrLeaveAnimation } = useContext(
    StateOfPageContext,
  );

  const textWrapper = useRef(null);

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  const animationEntry = () => {
    const [helloText, nameText, descText] = textWrapper.current.children;

    tl.from(helloText, {
      transformOrigin: 'left',
      clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
      duration: 0.5,
      delay: 0.5,
    })
      .from(nameText, {
        transformOrigin: 'left',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      })
      .from(descText, {
        transformOrigin: 'left',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      });

    tl2
      .to(helloText.children[0], {
        left: '100%',
        duration: 0.5,
        delay: 0.51,
      })
      .to(nameText.children[0], {
        left: '100%',
        duration: 0.5,
      })
      .to(descText.children[0], {
        left: '100%',
        duration: 0.5,
      })
      .to([helloText.children, nameText.children, descText.children], {
        opacity: 0,
      });
  };

  const animationLeave = () => {
    const [helloText, nameText, descText] = textWrapper.current.children;

    tl.to(helloText, {
      transformOrigin: 'right',
      clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
      duration: 2,
      delay: 0.5,
    })
      .to(nameText, {
        transformOrigin: 'right',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      })
      .to(descText, {
        transformOrigin: 'right',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      });

    gsap.set([helloText.children, nameText.children, descText.children], {
      opacity: 1,
    });

    tl2
      .to(helloText.children[0], {
        left: 0,
        duration: 0.5,
        delay: 1.99,
      })
      .to(nameText.children[0], {
        left: 0,
        duration: 0.5,
      })
      .to(descText.children[0], {
        left: 0,
        duration: 0.5,
      })
      .to([helloText.children, nameText.children, descText.children], {
        opacity: 0,
      });
  };

  useEffect(() => {
    runEntryOrLeaveAnimation(animationEntry, animationLeave);
  }, [pageStatus]);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
