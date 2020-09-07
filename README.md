[![shades-logotype](shades-logotype.svg)](https://micahilbery.com/shades-icon-set/)
---

Shades is an 16px pixel-fitted icon set that uses different levels (shades) of transparency for the colors. This set was primarily made for the use on the web but the SVGs are in here to use for whatever. Along with the SVGs there is a Jekyll include file for easy use on GitHub Pages or wherever you do your Jekyll, an SVG sprite sheet, and an accompanying (s)css file(s).

If you like what you see consider [buying the set on gumroad](https://gumroad.com/l/OzDJM) or [buying me a coffee](https://micahilbery.com/pay/) to help support me making things like this.

## Usage
Download this repo and you can grab the files from the `src` directory.
You can always embed or use the source svgs as you see fit. Otherwise see the Jekyll include usage or SVG sprite sheet usage below.

### Jekyll Include
To use the Jekyll include place the `shades-icon.html` into your `_includes` folder and call it with `{% include shades-icon.html name="icon-name" class="optional-class" %}`. The available classes in the `shades.(s)css` are `size-2x`,`size-3x`, and `size-4x`. However you can include any custom classes in the class param. If you don't wish to add any classes you can leave out the class param in the call. The icons use `currentColor` for their fill by default but you can change that with css.

### SVG Sprite Sheet
To use the SVG sprite sheet first place the `shades-sprites.svg` somewhere on your site then in the html call it with `<use>` like the example below.

```html
<svg class="shades-icon" id="shades-icon-icon-name">
  <use xlink:href="/path/to/shades-sprites.svg#icon-name"></use>
</svg>
```

### CSS
To target the icons in the set you can target the class `.shades-icon`. To target a specific icon you can target the id `#shades-icon-icon-name` where `icon-name` is replaced with the icons name.
