export const getVariant = (experimentKey) => {
  if (!experimentKey) return;

  const limitCheck = 10 * 5; // timeout 200 * 5 is 1 second
  let countCheck = 0;

  const dataLayer = window.dataLayer || [];
  dataLayer.push({ event: 'optimize.activate' });
  const intervalId = setInterval(() => {
    console.log('check', countCheck);
    if (window.google_optimize !== undefined) {
      const variant = window.google_optimize.get(experimentKey);

      if (variant === undefined) {
        console.log('experiment not found');
        clearInterval(intervalId);
        return 'not found';
      }

      console.log('get experiment', parseInt(variant, 10));
      clearInterval(intervalId);
      return parseInt(variant, 10);
    }
    countCheck += 1;
    if (countCheck > limitCheck) clearInterval(intervalId);
  }, 200);
};

export default getVariant;
