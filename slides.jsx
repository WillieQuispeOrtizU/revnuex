/* slides.jsx — mounts all React-rendered slide components into the deck-stage. */
/* global React, ReactDOM,
   SlideBrand, SlideType, SlideColor, SlideComponents, SlideIA,
   SlideOnboarding, SlideLiveMap, SlideLeadDetail, SlideDashboard,
   SlideNotifications, SlideAISettings, SlideFounder, SlideFJOF,
   SlideTechToday, SlideTechJob, SlideEstimate, SlideInvoice, SlideCustomerTrack,
   SlideBilingual, SlideStates, SlidePush, SlideMotionA11y, SlideHandoff */

(function () {
  const stage = document.querySelector('deck-stage');
  if (!stage) return;

  const slidesInOrder = [
    SlideBrand, SlideType, SlideColor, SlideComponents, SlideIA,
    SlideOnboarding, SlideLiveMap, SlideLeadDetail, SlideDashboard,
    SlideNotifications, SlideAISettings, SlideFounder, SlideFJOF,
    SlideTechToday, SlideTechJob, SlideEstimate, SlideInvoice, SlideCustomerTrack,
    SlideBilingual, SlideStates, SlidePush, SlideMotionA11y, SlideHandoff,
  ];

  const host = document.createElement('div');
  host.style.display = 'none';
  host.id = '__slide-host';
  document.body.appendChild(host);

  const App = () => React.createElement(
    React.Fragment, null,
    ...slidesInOrder.map((C, i) => React.createElement(C, { key: i }))
  );

  ReactDOM.createRoot(host).render(React.createElement(App));

  let moved = false;
  const moveSlides = () => {
    if (moved) return;
    const sections = host.querySelectorAll(':scope > section');
    if (sections.length < slidesInOrder.length) return false;
    moved = true;
    sections.forEach((s) => stage.appendChild(s));
    host.remove();
    return true;
  };

  // MutationObserver fires on every React commit
  const obs = new MutationObserver(() => {
    if (moveSlides()) obs.disconnect();
  });
  obs.observe(host, { childList: true, subtree: true });

  // Polling fallback in case observer is missed
  let tries = 0;
  const poll = () => {
    if (moved) return;
    if (moveSlides()) return;
    if (++tries < 200) setTimeout(poll, 30);
  };
  setTimeout(poll, 30);
})();
