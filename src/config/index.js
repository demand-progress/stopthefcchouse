const CONF = {
    actionKitPageShortName: 'stop-fcc-house',
    actionKitPageId: 2346
};
const URLS = {
    actionKit: 'https://act.demandprogress.org/act/',
    count: 'https://act.demandprogress.org/progress/' + CONF.actionKitPageShortName + '?callback=onFetchSignatureCounts',
    facebook: 'https://www.facebook.com/sharer.php?u=',
    twitter:  'https://twitter.com/intent/tweet?text=',
    feedack: 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
};

export { CONF, URLS };