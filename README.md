[![Netlify Status](https://api.netlify.com/api/v1/badges/dfb33e3c-2d37-4043-a195-c33afebc8d78/deploy-status)](https://app.netlify.com/sites/loftdesignteam/deploys)

# Loft Design Team Website
Loft Design Team Website


## How to add the new post?

You must duplicate the `<li>` element and personalize your book information, see below:

```html
<li class="slideshow-list__el">
    <article class="tile | js-tile">
        <a href="#">
            <figure class="tile__fig">
                <img src="PATH/BASE/IMAGE" data-hover="PATH/HOVER/IMAGE" alt="ALTERNATIVE TEXT" class="tile__img">
            </figure>
            <div class="tile__content">
                <h2 class="tile__title | title title--medium">
                  TITLE OF <span class="title__offset title__offset--medium">BOOK<span>
                </h2>
                <div class="tile__description">
                  <p>DesignFlix @LoftAugusta - 25/02/2k20</p>
                  <div class="tile__image">
                    <img src="PATH/BASE/IMAGE" alt="ALTERNATIVE TEXT">
                  </div>
                  <p>Design as Downbeat</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit sequi consectetur rem molestias incidunt voluptate praesentium vitae facilis modi fugit autem nostrum unde impedit, sit veritatis officia cupiditate repellat!</p>
                  <p>- Ummm</p>
                  <p>- Dois</p>
                </div>
                <div class="tile__cta">
                    <span class="btn-inline">Spy this link</span>
                </div>
            </div>
        </a>
    </article>
</li>
```
