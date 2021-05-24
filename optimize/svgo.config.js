module.exports = {
  plugins: [
    'cleanupAttrs',
    'cleanupEnableBackground',
    'cleanupIDs',
    'cleanupNumericValues',
    'collapseGroups',
    'convertColors',
    'convertPathData',
    'convertShapeToPath',
    'convertStyleToAttrs',
    'convertTransform',
    'mergePaths',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'removeComments',
    'removeDesc',
    'removeDimensions',
    'removeDoctype',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'removeEmptyText',
    'removeHiddenElems',
    'removeMetadata',
    'removeNonInheritableGroupAttrs',
    'removeRasterImages',
    'removeScriptElement',
    'removeTitle',
    'removeUnknownsAndDefaults',
    'removeUnusedNS',
    'removeUselessDefs',
    'removeUselessStrokeAndFill',
    'removeViewBox',
    'removeXMLProcInst',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(glyph-name|unicode|stroke|fill)'
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{"fill":"currentColor", "height":"16px", "width":"16px"}]
      }
    }
  ]
}
