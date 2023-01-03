module.exports = {
    root: true,
    // Globals
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // Syntax
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        project: ['tsconfig.json'],
    },
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['react', 'simple-import-sort', 'import'],
    rules: {
        'react/display-name': 'off',
        'no-console': 'warn',
        'no-plusplus': 'off',
        'no-nested-ternary': 'off',
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
        'import/no-unresolved': 'warn',
        'class-methods-use-this': 'off',
        'nonblock-statement-body-position': ['error', 'beside'],
        'newline-after-var': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: true,
            },
        ],
        'no-prototype-builtins': 'off',
        'no-await-in-loop': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterThis: true,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],
        'import/no-cycle': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: [
                    'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                ],
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'error',
    },
};
