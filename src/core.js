/**
 * React Hotjar Tracking Module
 *
 * @package react-tracking-hotjar
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function getTracker() {
  return window.hj;
}

export function initialize(newTrackerId) {
  try {
    /* eslint-disable */
    (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = {
        hjid: newTrackerId,
        hjsv: 6,
      };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    /* eslint-enable */
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export default {
  initialize,
  getTracker,
};
