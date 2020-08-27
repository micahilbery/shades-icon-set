![shades-logotype](assets/shades-logotype.svg)

Shades is an 16px pixel-fitted icon set that uses different levels (shades) of transparency for the colors. This set was primarily made for the use on the web but the SVGs are in here to use for whatever. Along with the SVGs there is a Jekyll include file for easy use on GitHub Pages or wherever you do your Jekyll, an SVG sprite sheet, and an accompanying (s)css file.

### Usage
you can embed the svgs as you see fit.

To use the Jekyll include place the `shades-icon.html` into your `_includes` folder and call it with `{% include shades-icon.html name="icon-name" class="optional-class" %}`. The available classes in the `shades.(s)css` are `size-2x`,`size-3x`, and `size-4x`. However you can include any custom classes in the class param. If you don't wish to add any classes you can leave out the class param in the call. The icons use `currentColor` for their fill by default but you can change that with css.
