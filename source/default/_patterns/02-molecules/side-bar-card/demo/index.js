/**
 * Demo of sideBarCard. Pulls in sideBarCard assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/side-bar-card';

// Import demo assets
import twig from './side-bar-cards.twig';
import yaml from './side-bar-cards.yml';
import markdown from './side-bar-cards.md';

export default {
  twig,
  yaml,
  markdown,
};
