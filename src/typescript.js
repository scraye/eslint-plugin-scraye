module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "@typescript-eslint/array-type": ["error", {default: "generic"}],
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^_"}],
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",

    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
};
