import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SuggestionsControl } from './SuggestionsControl';
var doNothing = function () {
    return;
};
describe('Pickers', function () {
    describe('SuggestionsControl', function () {
        it('renders header/footer items with the provided className', function () {
            var root = document.createElement('div');
            ReactDOM.render(React.createElement(SuggestionsControl, { headerItemsProps: [
                    {
                        className: 'header-item-wrapper',
                        renderItem: function () { return React.createElement("div", { className: "header-item-inner" }); },
                        shouldShow: function () { return true; },
                    },
                ], footerItemsProps: [
                    {
                        className: 'footer-item-wrapper',
                        renderItem: function () { return React.createElement("div", { className: "footer-item-inner" }); },
                        shouldShow: function () { return true; },
                    },
                ], completeSuggestion: doNothing, suggestions: [], shouldLoopSelection: true, onSuggestionClick: doNothing }), root);
            expect(root.querySelector('.header-item-wrapper .header-item-inner')).not.toBe(null);
            expect(root.querySelector('.footer-item-wrapper .footer-item-inner')).not.toBe(null);
            ReactDOM.unmountComponentAtNode(root);
        });
    });
});
//# sourceMappingURL=SuggestionsControl.tests.js.map