/**
 * Demo of sidebar. Pulls in sidebar assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'organisms/sidebar';

// Import demo assets
import twig from './sidebars.twig';
import yaml from './sidebars.yml';
import markdown from './sidebars.md';

export default {
  twig,
  yaml,
  markdown,
};
