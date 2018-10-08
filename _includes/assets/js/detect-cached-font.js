function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

if (getCookie("fonts-loaded")) {
    document.documentElement.classList.add('fonts-loaded');
    console.log('Cookie found', document.documentElement.className);
}