import { TweenMax as TM, TimelineMax as TL, Power3 } from 'gsap'
import './vendors/gsap/DrawSVGPlugin'

export default class Loader {

    constructor() {
        this.$els = {
            loaderContainer         : document.querySelector('.loader-container'),
            main                    : document.querySelector('main'),
            logo                    : document.querySelector('.loader-container__logo'),
            logoPaths               : document.querySelectorAll('.loader-container__logo path, .loader-container__logo circle'),
            loading                 : document.querySelector('.loader-container__loading'),
            loadingCircleBackground : document.querySelector('.loader-container__loading__circle_background'),
            loadingCircleProgress   : document.querySelector('.loader-container__loading__circle_progress')
        }

        this.start = this.start.bind(this);
        this.onTimelineComplete = this.onTimelineComplete.bind(this);

        this.init()
    }

    init() {
        TM.set(this.$els.logo, { top: '300%', scale: 2 });
        TM.set(this.$els.loading, { top: '100%' });
        TM.set(this.$els.loadingCircleProgress, { drawSVG: '0' });
    }

    timelineStart() {
        this.timeline = new TL({ repeat: 0, repeatDelay: 0, onComplete: this.onTimelineComplete });
        return this.timeline;
    }

    // TODO: Spaghetti code
    start() {
      this.timelineStart()
          .fromTo(this.$els.logo, 0.8, { top: '300%' }, { top: '30%', ease: Power3.easeOut })
          .fromTo(this.$els.loading, 0.5, { top: '100%' }, { top: '50%' }, '-=0.5')
          .fromTo(this.$els.loadingCircleProgress, 2, { drawSVG: '0' }, { drawSVG: '0 100%' })
          .add('enter')
          .fromTo(this.$els.logo, 0.8, { scale: 2, top: '30%' }, { scale: 1, top: '0%', ease: Power3.easeOut })
          .add('logo', '-=0.8')
          .fromTo(this.$els.logoPaths, 0.8, { fill: '#000' }, { fill: 'transparent' }, 'logo')
          .fromTo(this.$els.loading, 0.3, { top: '50%', opacity: 1 }, { top: '20%', opacity: 0 }, 'logo')
          .fromTo(this.$els.loaderContainer, 0.5, { height: '100%' }, { height: '0%' }, 'logo')
          .fromTo(this.$els.loaderContainer, 0.3, { opacity: 1 }, { opacity: 0 });

    }

    onTimelineComplete() {
        this.$els.loaderContainer.outerHTML = '';
    }
}
