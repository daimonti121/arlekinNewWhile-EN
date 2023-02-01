function onLoadBundle() {
    new ContentHash({e_ua: true, e_asr: true, e_dnt: true, e_ab: true}).get(function (hash) { document.cookie = 'ch=' + hash + ';path=/; expires=' + (new Date(new Date().getTime() + 63072000 * 1000)).toUTCString() });
    window.addEventListener('dtchange', function (e) { document.cookie = 'dt=' + (e.detail.open ? 1 : 0) + ';path=/; expires=' + (new Date(new Date().getTime() + 63072000 * 1000)).toUTCString() });
    pm('pm', '63072000');
    bs('bl', 'bic', 'bct', 'bdt');
}
