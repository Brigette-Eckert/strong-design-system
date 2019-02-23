/**
 * Demo of noSidebarPage. Pulls in noSidebarPage assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'pages/no-sidebar-page';

// Import demo assets
import twig from './no-sidebar-pages.twig';
import yaml from './no-sidebar-pages.yml';
import markdown from './no-sidebar-pages.md';

export default {
  twig,
  yaml,
  markdown,
};
