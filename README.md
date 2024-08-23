# simplify-error

catch unknown errors and transform it to an object as `{ simpleError: { error: string, message: string } }`

## Installation

```sh
npm install simplify-error
```

or using yarn

```sh
yarn add simplify-error
```
## Example

```js
import { simplifyError, simplifyCaughtError } from 'simplify-error';

// returns { simpleError: { error: 'Error', message: 'Some error description' } }
simplifyError('Error', 'Some error description');

// returns { simpleError: { error: 'Error', message: 'some custom error' } }
simplifyCaughtError(new Error('some custom error'));

// returns { simpleError: { error: 'Error', message: 'testing error' } }
simplifyCaughtError('testing error');

// returns { simpleError: { error: 'access_denied', message: 'Insufficient permission to invoke this function' } }
simplifyCaughtError({ error: 'access_denied', message: 'Insufficient permission to invoke this function' });

// returns { simpleError: { error: 'debugg_error', message: 'debugging error description' } }
simplifyCaughtError({ simpleError: { error: 'debugg_error', message: 'debugging error description' } });

```

