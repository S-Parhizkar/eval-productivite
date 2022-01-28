module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard'],
  extends: ["prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    prettier: 2
  },
};
