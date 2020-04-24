import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  // Require all .js or .jsx files containing ".story" in the filename from the components folder.
  requireAll(require.context('../components/', true, /.story\.jsx?$/));
}

addDecorator(StoryRouter());
configure(loadStories, module);
import '!style-loader!css-loader!../index.css';
