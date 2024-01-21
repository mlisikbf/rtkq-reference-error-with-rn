`yarn` to install dependencies
`yarn jest` to run tests

while the test itself passes, the run fails and logs the following:

```
ReferenceError: You are trying to access a property or method of the Jest environment after it has been torn down. From __tests__/App.test.tsx.

      at Timeout._onTimeout (node_modules/react-native/jest/setup.js:443:30)
```

this does not happen if the query is not used