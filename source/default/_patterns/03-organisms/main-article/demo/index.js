/**
 * Demo of mainArticle. Pulls in mainArticle assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'organisms/main-article';

// Import demo assets
import twig from './main-articles.twig';
import yaml from './main-articles.yml';
import markdown from './main-articles.md';

export default {
  twig,
  yaml,
  markdown,
};
