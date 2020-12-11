# Testing in JavaScript

## Unit Tests

Unit tests is a way of testing individual units like functions or classes by supplying input and making sure the output is as expected. Here we going to use a framework called [Jest](http://facebook.github.io/jest)

Jest is a fully featured testing framework with a developer experience that is second to none. It’s remarkably simple and flexible at the same time. For simple use cases, you often don’t need to configure anything, install and enjoy the built-in coverage and watch mode support.

> 📄 [Link to a full list of Jest's assertions](https://facebook.github.io/jest/docs/en/expect.html)

#### Step 01 - Setup Jest

Create a folder and start a new project using [yarn](https://classic.yarnpkg.com/en/docs/creating-a-project/) or [npm](https://docs.npmjs.com/cli/v6/commands/npm-init).

Then install and setup [Jest](https://jestjs.io/docs/en/getting-started)

#### Step 02 - Testing Pure Functions

A pure function must only operate on the input it is given and nothing else. That function must return the output of that operation. Additionally, it doesn’t perform any side effects (usually I/O).

These functions are easy to reason about. They are also easy to test because they don’t require any test doubles. Let's pratice by creating an authentication file and add a function to check what time of password is allowed.

Create a file `password.js`, add the follow `isPasswordAllowed` function, export the function and create another file, `password.test.js` with unit tests. Then try to refactor it, if possible.

> 💡 Tip: place code as close to where it's relevant as possible.

```js
//password.js
function isPasswordAllowed(password) {
  return password.length > 6 && /\d/.test(password) && /\D/.test(password)
}
```

```js
//password.test.js
import { isPasswordAllowed } from '../auth';

test('isPasswordAllowed only allows some passwords', () => {
    // Write your tests here
})
```

**Bonus01:** Try to refactor your test using [describe](https://jestjs.io/docs/en/api#describename-fn), create and array with `allowedPasswords` and `disallowedPasswords` and add more tests.

**Bonus02:** Impletement an algorithm to solve the [FizzBuzz](./fizz-buzz) problem and write unit tests for your solution.

#### Step 03 - Testing Functions with Side Effects

A thumb war is a game played by two players in which the thumbs are used to simulate fighting. Check out the implementation in JavaScript for this game at the [Thumb War folder](./thumb-war) and create unit tests.

💡 Hint: Have a look at [Mock Functions](https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls) and [spyOn](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname).

**Bonus02:** Create unit tests for an algorithm that clean profanity words from any text file and saves as a new and clean file to the system using node. Go to [Swear Words](./swear-words)

#### Step 04 - Testing Functions in a Composition
