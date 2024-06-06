function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('./khwopaChat/static/js/components/chat.js');
include('./khwopaChat/static/js/constants.js');
include('./khwopaChat/static/js/components/cardsCarousel.js');
include('./khwopaChat/static/js/components/botTyping.js');
include('./khwopaChat/static/js/components/charts.js');
include('./khwopaChat/static/js/components/collapsible.js');
include('./khwopaChat/static/js/components/dropDown.js');
include('./khwopaChat/static/js/components/location.js');
include('./khwopaChat/static/js/components/pdfAttachment.js');
include('./khwopaChat/static/js/components/quickReplies.js');
include('./khwopaChat/static/js/components/suggestionButtons.js');
