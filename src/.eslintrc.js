module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs,json}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "extends": "eslint:recommended",
    "parser": "@typescript-eslint/parser",
  "parserOptions": {

        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        
      }
}
