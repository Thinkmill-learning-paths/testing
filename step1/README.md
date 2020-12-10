# Testing in JavaScript

Learn the fundamentals of what a test in JavaScript tjat will help you write better tests.

## Step 1 - Fundamentals

A test is code that throws an error when the actual result of something does not match the expected output.

### Basic Test

Here's the most basic form of a test:

```js
const actual = true
const expected = false
if (actual !== expected) {
  throw new Error(`${actual} is not ${expected}`)
}
```

---

#### Step 01

Create a file with a basic form of a test that reveals a bug.
Write code that throws an error with a helpful message about the bug, but only if there's a bug.

> Make sure you're in the right directory!

Then run this code with `node <file name>.js`

```js
const sum = (a, b) => a + b
const subtract = (a, b) => a - b
```

Implement our own assertion library.
Create a function called `expect` that accepts an "actual" and returns an object of assertions.

> 💡 Tip: We want to be able to use it like so: expect(actual).toBe(expected)

Then run this code with `node <file name>.js`

---

#### Step 02

Let's improve our error messages a bit, create a function called `test` which can be given a title and a callback. Then add a try/catch so you can log the title with a note of success or error.

Then wrap each of your tests in a `test` function. This also means that we can run all the tests even if one of them fails!

Example of test function:

```js
test(title, () => {
  // arrange
  // act
  // assert
}
```

Then run this code with `node <file name>.js`

🎉 Congratulations! You just learned how testing frameworks and assertion libraries work by building our own, simple version of each.
