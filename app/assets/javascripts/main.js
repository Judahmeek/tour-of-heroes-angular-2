// Just like in C & Java, main.js starts all the fun as soon as the DOMContentLoaded event fires.

//= require application/app-component
 
document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(MyApp);
});