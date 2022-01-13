module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'value-list-comma-newline-after': false,
    'declaration-colon-newline-after': false,
    'string-quotes': 'single'
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
      },
    },
  ],
}
