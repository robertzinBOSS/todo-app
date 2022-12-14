module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['function-declaration', 'arrow-function'],
            },
        ],
        'react/require-default-props': 'off',
    },
};
