---
title: "Higher Order Functions"
slug: higher-order-functions
published: "2025-01-21"
updated: "2025-01-21"
categories:
  - "functional programming"
  - "pure functions"
  - "higher order functions"
  - "closures"
coverImage: ""
coverWidth: 16
coverHeight: 9
excerpt: Higher order functions are functions that take other functions as arguments or return a function.
---

## What are Higher Order Functions?

Higher order functions are functions that take other functions as arguments or return a function.

Consider this example: 

```javascript
function add(a, b) {
  return a + b;
}

function higherOrderAdd(callback) {
  return function (a, b) {
    const sum = add(a, b); // Use the basic add function
    return callback(sum); // Modify the result using the callback
  };
}
```
