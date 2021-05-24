---
layout: page
id: home
css: true
---

<section>
  <h1 class="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 64" fill="currentColor" height="64px" width="280px">
        <path d="M102 22c-6.648 0-12 5.352-12 12v12c0 6 3 18 18 18s24-9 24-18v-6h12v6c0 9 9 18 24 18s18-12 18-18V34c0-6.648-5.352-12-12-12h-18c-6.648 0-12 5.352-12 12h-12c0-6.648-5.352-12-12-12zm0 6h18c3.324 0 6 2.676 6 6v12c0 6-9 12-18 12s-12-6-12-12V34c0-3.324 2.676-6 6-6zm54 0h18c3.324 0 6 2.676 6 6v12c0 6-3 12-12 12s-18-6-18-12V34c0-3.324 2.676-6 6-6z"/>
        <path d="M96 46c0 6 3 12 12 12s18-6 18-12V34c0-3.324-2.676-6-6-6zm60-18c-3.324 0-6 2.676-6 6v12c0 6 9 12 18 12s12-6 12-12V34c0-3.324-2.676-6-6-6z" opacity=".5"/>
        <path d="M102 28h18c-7.976 6-18 13.54-24 18V34c0-3.324 2.676-6 6-6z" opacity=".2"/>
        <path d="M180 0h6v64h-6zM126 40h6v24h-6zM46 0h6v64h-6z"/>
        <path d="M46 0v64h6V34c0-3.376 2.624-6 6-6h12c3.376 0 6 2.624 6 6v30h6V34c0-6.596-5.404-12-12-12H58c-2.184 0-4.23.601-6 1.633V0z"/>
        <rect width="6" height="40" x="180" opacity=".3" rx="0" ry="0"/>
        <path d="M12 6C5.404 6 0 11.404 0 18v6c0 6.596 5.404 12 12 12h14c3.376 0 6 2.624 6 6v10c0 3.376-2.624 6-6 6H12c-3.376 0-6-2.624-6-6v-2H0v2c0 6.596 5.404 12 12 12h14c6.596 0 12-5.404 12-12V42c0-6.596-5.404-12-12-12H12c-3.376 0-6-2.624-6-6v-6c0-3.376 2.624-6 6-6h14c3.376 0 6 2.624 6 6h6c0-6.596-5.404-12-12-12zM210 20c-8.812 0-16 7.188-16 16v12c0 8.812 7.188 16 16 16h10c7.43 0 13.687-5.116 15.473-12h-6.293c-1.522 3.554-5.018 6-9.18 6h-10c-5.592 0-10-4.408-10-10v-4h36v-8c0-8.812-7.188-16-16-16zm0 6h10c5.592 0 10 4.408 10 10v2h-30v-2c0-5.592 4.408-10 10-10zM256 22c-6.585 0-12 5.364-12 11.938v.124C244 40.636 249.415 46 256 46h12c3.376 0 6 2.624 6 6s-2.624 6-6 6h-12c-3.376 0-6-2.624-6-6h-6c0 6.596 5.404 12 12 12h12c6.596 0 12-5.404 12-12s-5.404-12-12-12h-12c-3.387 0-6-2.607-6-5.938v-.124c0-3.331 2.613-5.938 6-5.938h12c3.387 0 6 2.607 6 5.938V34h6v-.063C280 27.364 274.585 22 268 22z"/>
    </svg>
  </h1>
  <p>Shades is an 16px pixel-fitted icon set that uses different levels (shades) of transparency for the colors.</p>
  <div class="grid">
    <div class="grid halves center stretch-sm stack-sm">
      <a href="https://github.com/micahilbery/shades-icon-set" class="btn">
        {% include modules/shades-icon.html name="github" %}
        Get 'em on GitHub
      </a>
      <a href="https://gum.co/OzDJM" class="btn cyan">
        {% include modules/shades-icon.html name="gumroad" %}
        Buy on Gumroad
      </a>
    </div>
  </div>
</section>

<section id="color-buttons">
  <div class="center">
    <input id="default-color-btn" name="color-btns" type="radio" value="default" checked>
    <input class="pink" id="pink-color-btn" name="color-btns" type="radio" value="pink">
    <input class="purple" id="purple-color-btn" name="color-btns" type="radio" value="purple">
    <input class="cyan" id="cyan-color-btn" name="color-btns" type="radio" value="cyan">
    <input class="blue" id="blue-color-btn" name="color-btns" type="radio" value="blue">
    <input class="green" id="green-color-btn" name="color-btns" type="radio" value="green">
    <input class="yellow" id="yellow-color-btn" name="color-btns" type="radio" value="yellow">
    <input class="orange" id="orange-color-btn" name="color-btns" type="radio" value="orange">
    <input class="red" id="red-color-btn" name="color-btns" type="radio" value="red">
  </div>
</section>

<section id="icon-panel" class="grid panel icon-panel">
  <h3>Icons</h3>
  <div class="icon-grid">
    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="3d-printer"  %}</div>
      <div class="icon-name">3d-printer</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="airplane"  %}</div>
      <div class="icon-name">airplane</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="alarm-clock"  %}</div>
      <div class="icon-name">alarm-clock</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="alert"  %}</div>
      <div class="icon-name">alert</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-center"  %}</div>
      <div class="icon-name">align-center</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-h-center"  %}</div>
      <div class="icon-name">align-h-center</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-h-left"  %}</div>
      <div class="icon-name">align-h-left</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-h-left-to-anchor"  %}</div>
      <div class="icon-name">align-h-left-to-anchor</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-h-right"  %}</div>
      <div class="icon-name">align-h-right</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-h-right-to-anchor"  %}</div>
      <div class="icon-name">align-h-right-to-anchor</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-justify"  %}</div>
      <div class="icon-name">align-justify</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-left"  %}</div>
      <div class="icon-name">align-left</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-right"  %}</div>
      <div class="icon-name">align-right</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-v-bottom"  %}</div>
      <div class="icon-name">align-v-bottom</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-v-bottom-to-anchor"  %}</div>
      <div class="icon-name">align-v-bottom-to-anchor</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-v-center"  %}</div>
      <div class="icon-name">align-v-center</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-v-top"  %}</div>
      <div class="icon-name">align-v-top</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="align-v-top-to-anchor"  %}</div>
      <div class="icon-name">align-v-top-to-anchor</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="anchor"  %}</div>
      <div class="icon-name">anchor</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="archive"  %}</div>
      <div class="icon-name">archive</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="arrow-o-down"  %}</div>
      <div class="icon-name">arrow-o-down</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="arrow-o-left"  %}</div>
      <div class="icon-name">arrow-o-left</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="arrow-o-right"  %}</div>
      <div class="icon-name">arrow-o-right</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="arrow-o-up"  %}</div>
      <div class="icon-name">arrow-o-up</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="article"  %}</div>
      <div class="icon-name">article</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bag"  %}</div>
      <div class="icon-name">bag</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="balance"  %}</div>
      <div class="icon-name">balance</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="ban"  %}</div>
      <div class="icon-name">ban</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bank"  %}</div>
      <div class="icon-name">bank</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-charging"  %}</div>
      <div class="icon-name">battery-charging</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-empty"  %}</div>
      <div class="icon-name">battery-empty</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-full"  %}</div>
      <div class="icon-name">battery-full</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-good"  %}</div>
      <div class="icon-name">battery-good</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-half"  %}</div>
      <div class="icon-name">battery-half</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="battery-low"  %}</div>
      <div class="icon-name">battery-low</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="beaker"  %}</div>
      <div class="icon-name">beaker</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="beer"  %}</div>
      <div class="icon-name">beer</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="beer-mug"  %}</div>
      <div class="icon-name">beer-mug</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bell"  %}</div>
      <div class="icon-name">bell</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bell-disabled"  %}</div>
      <div class="icon-name">bell-disabled</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bell-ring"  %}</div>
      <div class="icon-name">bell-ring</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bell-ring-left"  %}</div>
      <div class="icon-name">bell-ring-left</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bell-ring-right"  %}</div>
      <div class="icon-name">bell-ring-right</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="blog"  %}</div>
      <div class="icon-name">blog</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="boat"  %}</div>
      <div class="icon-name">boat</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bold"  %}</div>
      <div class="icon-name">bold</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="book"  %}</div>
      <div class="icon-name">book</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="broken-image"  %}</div>
      <div class="icon-name">broken-image</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bug"  %}</div>
      <div class="icon-name">bug</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="bulleted-list"  %}</div>
      <div class="icon-name">bulleted-list</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="calendar"  %}</div>
      <div class="icon-name">calendar</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="camera"  %}</div>
      <div class="icon-name">camera</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cart"  %}</div>
      <div class="icon-name">cart</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc"  %}</div>
      <div class="icon-name">cc</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-by"  %}</div>
      <div class="icon-name">cc-by</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-nc"  %}</div>
      <div class="icon-name">cc-nc</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-nc-eu"  %}</div>
      <div class="icon-name">cc-nc-eu</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-nd"  %}</div>
      <div class="icon-name">cc-nd</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-pd"  %}</div>
      <div class="icon-name">cc-pd</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-pd-alt"  %}</div>
      <div class="icon-name">cc-pd-alt</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cc-sa"  %}</div>
      <div class="icon-name">cc-sa</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="chat"  %}</div>
      <div class="icon-name">chat</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="checkbox-checked"  %}</div>
      <div class="icon-name">checkbox-checked</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="checkbox-unchecked"  %}</div>
      <div class="icon-name">checkbox-unchecked</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="check-list"  %}</div>
      <div class="icon-name">check-list</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="clock"  %}</div>
      <div class="icon-name">clock</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="close"  %}</div>
      <div class="icon-name">close</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="close-circle"  %}</div>
      <div class="icon-name">close-circle</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="close-square"  %}</div>
      <div class="icon-name">close-square</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cloud"  %}</div>
      <div class="icon-name">cloud</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="coffee-bean"  %}</div>
      <div class="icon-name">coffee-bean</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="coffee-cup"  %}</div>
      <div class="icon-name">coffee-cup</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="coffee-mug"  %}</div>
      <div class="icon-name">coffee-mug</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cog"  %}</div>
      <div class="icon-name">cog</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="contact-book"  %}</div>
      <div class="icon-name">contact-book</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="contact-card"  %}</div>
      <div class="icon-name">contact-card</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="copy"  %}</div>
      <div class="icon-name">copy</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="credit-card"  %}</div>
      <div class="icon-name">credit-card</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="cut"  %}</div>
      <div class="icon-name">cut</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="display"  %}</div>
      <div class="icon-name">display</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="download"  %}</div>
      <div class="icon-name">download</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="drink"  %}</div>
      <div class="icon-name">drink</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="fast-bw"  %}</div>
      <div class="icon-name">fast-bw</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="fast-fw"  %}</div>
      <div class="icon-name">fast-fw</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="file"  %}</div>
      <div class="icon-name">file</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="file-save"  %}</div>
      <div class="icon-name">file-save</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="file-text"  %}</div>
      <div class="icon-name">file-text</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="folder"  %}</div>
      <div class="icon-name">folder</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="gallery"  %}</div>
      <div class="icon-name">gallery</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="glasses"  %}</div>
      <div class="icon-name">glasses</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="globe"  %}</div>
      <div class="icon-name">globe</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="grain"  %}</div>
      <div class="icon-name">grain</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="group"  %}</div>
      <div class="icon-name">group</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="hamburger-menu"  %}</div>
      <div class="icon-name">hamburger-menu</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="hamburger-menu-left"  %}</div>
      <div class="icon-name">hamburger-menu-left</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="hamburger-menu-right"  %}</div>
      <div class="icon-name">hamburger-menu-right</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="heart"  %}</div>
      <div class="icon-name">heart</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="heart-broken"  %}</div>
      <div class="icon-name">heart-broken</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="home"  %}</div>
      <div class="icon-name">home</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="hops"  %}</div>
      <div class="icon-name">hops</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="image"  %}</div>
      <div class="icon-name">image</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="info"  %}</div>
      <div class="icon-name">info</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="invisible"  %}</div>
      <div class="icon-name">invisible</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="italic"  %}</div>
      <div class="icon-name">italic</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="keyboard"  %}</div>
      <div class="icon-name">keyboard</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="laptop"  %}</div>
      <div class="icon-name">laptop</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="link"  %}</div>
      <div class="icon-name">link</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="location"  %}</div>
      <div class="icon-name">location</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="lock"  %}</div>
      <div class="icon-name">lock</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mail"  %}</div>
      <div class="icon-name">mail</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="media"  %}</div>
      <div class="icon-name">media</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mic"  %}</div>
      <div class="icon-name">mic</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="minus-circle"  %}</div>
      <div class="icon-name">minus-circle</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="minus-square"  %}</div>
      <div class="icon-name">minus-square</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="moon"  %}</div>
      <div class="icon-name">moon</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mouse"  %}</div>
      <div class="icon-name">mouse</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="music-note"  %}</div>
      <div class="icon-name">music-note</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="music-note-alt"  %}</div>
      <div class="icon-name">music-note-alt</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="news"  %}</div>
      <div class="icon-name">news</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="office-building"  %}</div>
      <div class="icon-name">office-building</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="paste"  %}</div>
      <div class="icon-name">paste</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pause"  %}</div>
      <div class="icon-name">pause</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pencil"  %}</div>
      <div class="icon-name">pencil</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pen-display"  %}</div>
      <div class="icon-name">pen-display</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pen-tablet"  %}</div>
      <div class="icon-name">pen-tablet</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="phone"  %}</div>
      <div class="icon-name">phone</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pizza"  %}</div>
      <div class="icon-name">pizza</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="play"  %}</div>
      <div class="icon-name">play</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="plus-circle"  %}</div>
      <div class="icon-name">plus-circle</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="plus-square"  %}</div>
      <div class="icon-name">plus-square</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="question"  %}</div>
      <div class="icon-name">question</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="radio-checked"  %}</div>
      <div class="icon-name">radio-checked</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="radio-unchecked"  %}</div>
      <div class="icon-name">radio-unchecked</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="rss"  %}</div>
      <div class="icon-name">rss</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="sail-boat"  %}</div>
      <div class="icon-name">sail-boat</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="send"  %}</div>
      <div class="icon-name">send</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="share"  %}</div>
      <div class="icon-name">share</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="skip-bw"  %}</div>
      <div class="icon-name">skip-bw</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="skip-fw"  %}</div>
      <div class="icon-name">skip-fw</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="speaker"  %}</div>
      <div class="icon-name">speaker</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="star"  %}</div>
      <div class="icon-name">star</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="star-half"  %}</div>
      <div class="icon-name">star-half</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="star-o"  %}</div>
      <div class="icon-name">star-o</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="success"  %}</div>
      <div class="icon-name">success</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="sun"  %}</div>
      <div class="icon-name">sun</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="sunglasses"  %}</div>
      <div class="icon-name">sunglasses</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="tablet"  %}</div>
      <div class="icon-name">tablet</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="tag"  %}</div>
      <div class="icon-name">tag</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="thumbs-down"  %}</div>
      <div class="icon-name">thumbs-down</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="thumbs-up"  %}</div>
      <div class="icon-name">thumbs-up</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="touchpad"  %}</div>
      <div class="icon-name">touchpad</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="trash"  %}</div>
      <div class="icon-name">trash</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="tv"  %}</div>
      <div class="icon-name">tv</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="underline"  %}</div>
      <div class="icon-name">underline</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="unlock"  %}</div>
      <div class="icon-name">unlock</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="upload"  %}</div>
      <div class="icon-name">upload</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="user"  %}</div>
      <div class="icon-name">user</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="user-alt"  %}</div>
      <div class="icon-name">user-alt</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="video"  %}</div>
      <div class="icon-name">video</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="video-camera"  %}</div>
      <div class="icon-name">video-camera</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="visible"  %}</div>
      <div class="icon-name">visible</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="vr"  %}</div>
      <div class="icon-name">vr</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="wallet"  %}</div>
      <div class="icon-name">wallet</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="warning"  %}</div>
      <div class="icon-name">warning</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="water-drop"  %}</div>
      <div class="icon-name">water-drop</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-cloudy"  %}</div>
      <div class="icon-name">weather-cloudy</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-fog"  %}</div>
      <div class="icon-name">weather-fog</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-partly-cloudy-day"  %}</div>
      <div class="icon-name">weather-partly-cloudy-day</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-partly-cloudy-night"  %}</div>
      <div class="icon-name">weather-partly-cloudy-night</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-rain"  %}</div>
      <div class="icon-name">weather-rain</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-snow"  %}</div>
      <div class="icon-name">weather-snow</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="weather-storm"  %}</div>
      <div class="icon-name">weather-storm</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="webcam"  %}</div>
      <div class="icon-name">webcam</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="writing"  %}</div>
      <div class="icon-name">writing</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="zoom"  %}</div>
      <div class="icon-name">zoom</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="zoom-in"  %}</div>
      <div class="icon-name">zoom-in</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="zoom-out"  %}</div>
      <div class="icon-name">zoom-out</div>
    </div>
  </div>

  <h3>Brand Icons</h3>
  <div class="icon-grid">
    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe"  %}</div>
      <div class="icon-name">adobe</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-after-effects"  %}</div>
      <div class="icon-name">adobe-after-effects</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-animate"  %}</div>
      <div class="icon-name">adobe-animate</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-audition"  %}</div>
      <div class="icon-name">adobe-audition</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-bridge"  %}</div>
      <div class="icon-name">adobe-bridge</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-dreamweaver"  %}</div>
      <div class="icon-name">adobe-dreamweaver</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-illustrator"  %}</div>
      <div class="icon-name">adobe-illustrator</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-indesign"  %}</div>
      <div class="icon-name">adobe-indesign</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-lightroom"  %}</div>
      <div class="icon-name">adobe-lightroom</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-media-encoder"  %}</div>
      <div class="icon-name">adobe-media-encoder</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-photoshop"  %}</div>
      <div class="icon-name">adobe-photoshop</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-premiere"  %}</div>
      <div class="icon-name">adobe-premiere</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-spark"  %}</div>
      <div class="icon-name">adobe-spark</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="adobe-xd"  %}</div>
      <div class="icon-name">adobe-xd</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="android"  %}</div>
      <div class="icon-name">android</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="appcenter"  %}</div>
      <div class="icon-name">appcenter</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="apple"  %}</div>
      <div class="icon-name">apple</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="artstation"  %}</div>
      <div class="icon-name">artstation</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="blender"  %}</div>
      <div class="icon-name">blender</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="codepen"  %}</div>
      <div class="icon-name">codepen</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="discord"  %}</div>
      <div class="icon-name">discord</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="dribbble"  %}</div>
      <div class="icon-name">dribbble</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="elementary"  %}</div>
      <div class="icon-name">elementary</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="facebook"  %}</div>
      <div class="icon-name">facebook</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="github"  %}</div>
      <div class="icon-name">github</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="gitlab"  %}</div>
      <div class="icon-name">gitlab</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="google"  %}</div>
      <div class="icon-name">google</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="google-play"  %}</div>
      <div class="icon-name">google-play</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="gumroad"  %}</div>
      <div class="icon-name">gumroad</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="instagram"  %}</div>
      <div class="icon-name">instagram</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="ko-fi"  %}</div>
      <div class="icon-name">ko-fi</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="linkedin"  %}</div>
      <div class="icon-name">linkedin</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mario"  %}</div>
      <div class="icon-name">mario</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mario-question-block"  %}</div>
      <div class="icon-name">mario-question-block</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="mastodon"  %}</div>
      <div class="icon-name">mastodon</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="maya"  %}</div>
      <div class="icon-name">maya</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="microsoft-windows"  %}</div>
      <div class="icon-name">microsoft-windows</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="nintendo-switch"  %}</div>
      <div class="icon-name">nintendo-switch</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="patreon"  %}</div>
      <div class="icon-name">patreon</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="paypal"  %}</div>
      <div class="icon-name">paypal</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pixelfed"  %}</div>
      <div class="icon-name">pixelfed</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="playstation"  %}</div>
      <div class="icon-name">playstation</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="pokemon"  %}</div>
      <div class="icon-name">pokemon</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="slack"  %}</div>
      <div class="icon-name">slack</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="squarecash"  %}</div>
      <div class="icon-name">squarecash</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="twitch"  %}</div>
      <div class="icon-name">twitch</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="twitter"  %}</div>
      <div class="icon-name">twitter</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="unity"  %}</div>
      <div class="icon-name">unity</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="unreal-engine"  %}</div>
      <div class="icon-name">unreal-engine</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="unsplash"  %}</div>
      <div class="icon-name">unsplash</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="venmo"  %}</div>
      <div class="icon-name">venmo</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="xbox"  %}</div>
      <div class="icon-name">xbox</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="youtube"  %}</div>
      <div class="icon-name">youtube</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="zbrush"  %}</div>
      <div class="icon-name">zbrush</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="zelda"  %}</div>
      <div class="icon-name">zelda</div>
    </div>
  </div>

  <h3>Smileys</h3>
  <div class="icon-grid">
    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-big-smile"  %}</div>
      <div class="icon-name">smiley-big-smile</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-cry"  %}</div>
      <div class="icon-name">smiley-cry</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-expressionless"  %}</div>
      <div class="icon-name">smiley-expressionless</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-glasses"  %}</div>
      <div class="icon-name">smiley-glasses</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-grimace"  %}</div>
      <div class="icon-name">smiley-grimace</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-happy"  %}</div>
      <div class="icon-name">smiley-happy</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-joy"  %}</div>
      <div class="icon-name">smiley-joy</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-kiss"  %}</div>
      <div class="icon-name">smiley-kiss</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-kiss-heart"  %}</div>
      <div class="icon-name">smiley-kiss-heart</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-laugh"  %}</div>
      <div class="icon-name">smiley-laugh</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-mad"  %}</div>
      <div class="icon-name">smiley-mad</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-neutral"  %}</div>
      <div class="icon-name">smiley-neutral</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-poop"  %}</div>
      <div class="icon-name">smiley-poop</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-sad"  %}</div>
      <div class="icon-name">smiley-sad</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-sick"  %}</div>
      <div class="icon-name">smiley-sick</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-smile"  %}</div>
      <div class="icon-name">smiley-smile</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-sob"  %}</div>
      <div class="icon-name">smiley-sob</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-sunglasses"  %}</div>
      <div class="icon-name">smiley-sunglasses</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-upside-down"  %}</div>
      <div class="icon-name">smiley-upside-down</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-wink"  %}</div>
      <div class="icon-name">smiley-wink</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-wink-kiss-heart"  %}</div>
      <div class="icon-name">smiley-wink-kiss-heart</div>
    </div>

    <div class="icon-container">
      <div class="icon-preview">{% include modules/shades-icon.html name="smiley-wink-tongue-stuck-out"  %}</div>
      <div class="icon-name">smiley-wink-tongue-stuck-out</div>
    </div>
  </div>
</section>

<p class="text-center">made with {% include modules/shades-icon.html name="heart" %} by <a href="https://micahilbery.com">micah ilbery</a></p>

<script src="{{ '/assets/scripts/color-buttons.js' | relative_url }}"></script>
