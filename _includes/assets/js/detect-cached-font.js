if (sessionStorage.getItem('fontsLoaded') === 'true') {
    document.documentElement.classList.add('fonts-loaded');
    console.log('Fonts cached', document.documentElement.className);
} else {
    startLoadingFonts();
}

function startLoadingFonts() {
    loadJS('/_includes/assets/js/fontfaceobserver.standalone.js');
    loadJS('/_includes/assets/js/inline.js');
}