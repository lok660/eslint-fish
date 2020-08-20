# eslint-plugin-fishlint

Fish ESLint rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fishlint`:

```
$ npm install eslint-plugin-fishlint --save-dev
```


## Usage

Add `fishlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fishlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fishlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





