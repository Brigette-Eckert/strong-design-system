/**
 * Demo of banner. Pulls in banner assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/banner';

// Import demo assets
import twig from './banners.twig';
import yaml from './banners.yml';
import markdown from './banners.md';

export default {
  twig,
  yaml,
  markdown,
};
