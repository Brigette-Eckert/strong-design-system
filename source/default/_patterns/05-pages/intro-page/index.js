/**
 * introPage
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module static assets
import './demo/books.jpg';
import './demo/toast.jpg';
import './demo/sakura.jpg';
import './demo/journals.jpg';
import './demo/leaf.jpg';
import './demo/globe.jpg';
import './demo/record.jpg';

// Module styles
import './_intro-page.scss';

// Module template
import './_intro-page.twig';

export const name = 'introPage';

export const defaults = {
  dummyClass: 'js-introPage-exists',
};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable($context, { introPage = {} }) {
  // Find our component within the DOM
  const $introPage = $('.introPage', $context);
  // Bail if component does not exist
  if (!$introPage.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = Object.assign(defaults, introPage);
  // An example of what could be done with this component
  $introPage.addClass(settings.dummyClass);
}

export default enable;
