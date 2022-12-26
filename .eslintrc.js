module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        amd: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['react', 'simple-import-sort', 'import'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'jsx-a11y/accessible-emoji': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'no-console': 'warn',
        'no-plusplus': 'off',
        'no-else-return': 'off',
        'no-restricted-syntax': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'space-before-function-paren': ['error', 'always'],
        'max-len': [
            'error',
            {
                code: 140,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'nonblock-statement-body-position': ['error', 'beside'],
        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: true,
            },
        ],
        'no-prototype-builtins': 'off',
        'no-await-in-loop': 'off',
    },
};
