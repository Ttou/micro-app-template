/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['/forward/'] }],
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
