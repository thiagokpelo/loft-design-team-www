import '../sass/styles.scss';

import Stage from './Stage';
import Layout from './Layout';
import Loader from './Loader';
import TxtType from './TxtType';

const APP = window.APP || {};

/*-----------------------------------------------------------------------------------*/
/*  01. INIT
/*-----------------------------------------------------------------------------------*/

const initTxtType = () => {
    var elements = document.getElementsByClassName('typewrite');

    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');

        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}

const initApp = () => {
    window.APP = APP;

    APP.Stage = new Stage();
    APP.Layout = new Layout();
    APP.Loader = new Loader();
    APP.Loader.start();

    initTxtType()
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
