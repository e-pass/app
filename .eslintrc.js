module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    plugins: [
        "@typescript-eslint",
        "react-native",
        "react",
        "react-hooks",
        "prettier",
        "simple-import-sort",
    ],
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react-native/split-platform-components": "error",
        "react/no-array-index-key": "off",
        "react/jsx-no-useless-fragment": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "consistent-return": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react/no-unescaped-entities": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "spaced-comment": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "global-require": "off",
        "import/no-extraneous-dependencies": "off",
        indent: "off",
    },
};
