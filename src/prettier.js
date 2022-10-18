module.exports = {
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "all",
        bracketSpacing: false,
        arrowParens: "always",
        singleQuote: false,
        printWidth: 120,
        tabWidth: 2,
      },
    ],
  },
};
