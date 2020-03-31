import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  // Require all .js or .jsx files containing ".story" in the filename from the components folder.
  requireAll(require.context('../components/', true, /.story\.jsx?$/));
}

configure(loadStories, module);
import '!style-loader!css-loader!../index.css';
