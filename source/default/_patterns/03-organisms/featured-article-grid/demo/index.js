/**
 * Demo of featuredArticleGrid. Pulls in featuredArticleGrid assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'organisms/featured-article-grid';

// Import demo assets
import twig from './featured-article-grids.twig';
import yaml from './featured-article-grids.yml';
import markdown from './featured-article-grids.md';

export default {
  twig,
  yaml,
  markdown,
};
