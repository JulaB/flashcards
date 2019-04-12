module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-nested'),
    require('postcss-custom-media')({
      importFrom: [
        {
          customMedia: {
            '--viewport-sm': '(min-width: 576px)',
            '--viewport-md': '(min-width: 768px)',
            '--viewport-lg': '(min-width: 992px)',
            '--viewport-xl': '(min-width: 1200px)'
          }
        },
      ]
    }),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
