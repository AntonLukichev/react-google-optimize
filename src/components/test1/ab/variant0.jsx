import React from 'react';

const handleClick = () => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: 'test_click',
    eventCategory: 'test',
    eventAction: 'test_click',
    eventLabel: 'variant0',
  });
};

export const Variant0 = () => (
  <>
    <div
      onClick={handleClick}
      onKeyPress={() => void 0}
      role="button"
      tabIndex="0"
    >
      Variant 0
    </div>
  </>
);

export default Variant0;
