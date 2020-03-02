![shades-logotype](assets/shades-logotype.svg)

A shady little icon set ![shades-logotype](assets/shades-logo-sm.svg)

Shades is an 16px pixel-fitted icon set that uses different levels (shades) of transparency for the colors. This set was primarily made for the use on the web but the SVGs are in here and I'm not your dad so do whatever I guess. Shades was made with GitHub Pages / Jekyll in mind so included is a `shades-icon.html` to be placed in the `_includes` folder of you project. Along with the SVGs and Jekyll include there is an SVG sprite sheet and an accompanying (s)css file.

### Usage
you can use or embed the svgs as you see fit.

To use the Jekyll include place the `shades-icon.html` into your `_includes` folder of your project as well as the shades (s)css file with your other styles and call it with `{% include shades-icon.html name="icon-name" class="optional-class" %}`. The available classes in the `shades.css` are `size-2x`,`size-3x`, and `size-4x`. However you can include any custom classes in the class param. If you don't wish to add any classes you can leave out the class param in the call. The icons use `currentColor` for their fill by default but you can change that with css by targeting the `.shades-icon` class.
