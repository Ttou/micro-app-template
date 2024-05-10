/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
    'property-no-unknown': [true, { ignoreProperties: ['/composes/'] }],
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep', 'input-placeholder'] }
    ]
  }
}
