import { configure, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
// import ReadmeContainer from 'storybook-readme/components/readme-container';
// import DefaultPreview from 'storybook-readme/with-docs';

setOptions({
    name: 'flapjack',
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true
});

setDefaults({
    inline: true,
    header: false,
    source: true,
    styles: stylesheet => {
        stylesheet.infoBody = {
            infoBody: {
                padding: '10px'
            }
        };
        return stylesheet;
    },
    maxPropsIntoLine: 1
    // propTablesExclude: [ReadmeContainer, DefaultPreview]
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);