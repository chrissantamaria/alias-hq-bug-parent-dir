# alias-hq bug reproduction

This is a reproduction repo for a bug with [alias-hq](https://github.com/davestewart/alias-hq)'s Jest plugin.

## Steps to reproduce

1. Install dependencies:

```bash
yarn
```

2. Run tests for the top-level directory:

```bash
# this should pass

yarn test
yarn run v1.22.11
$ jest
 PASS  src/index.test.js
  top-level tests
    ✓ should pass (1 ms)
    ✓ should correctly sum

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.249 s, estimated 1 s
Ran all test suites.
```

3. Run tests for the `app` directory:

```bash
# this should not pass

yarn test:app
yarn run v1.22.11
$ yarn --cwd app test
warning package.json: No license field
$ jest
 FAIL  src/index.test.js
  ● Test suite failed to run

    Configuration error:

    Could not locate module @utils/some-util mapped as:
    src/utils/$1.

    Please check your configuration for these entries:
    {
      "moduleNameMapper": {
        "/^@utils\/(.*)$/": "src/utils/$1"
      },
      "resolver": undefined
    }

    > 1 | const { sum } = require('@utils/some-util');
        |                 ^
      2 |
      3 | describe('top-level tests', () => {
      4 |   it('should pass', () => {

      at createNoMappedModuleFoundError (../node_modules/jest-resolve/build/resolver.js:579:17)
      at Object.<anonymous> (src/index.test.js:1:17)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.254 s
Ran all test suites.
```
