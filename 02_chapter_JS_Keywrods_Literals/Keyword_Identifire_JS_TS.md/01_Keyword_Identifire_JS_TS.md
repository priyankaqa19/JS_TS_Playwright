# Keywords and Identifiers in JavaScript & TypeScript

This document explains the concepts of **keywords** and **identifiers** in both JavaScript and TypeScript, highlighting similarities and differences.

---

## 📌 Keywords

Keywords are reserved words in the language. They **cannot be used as identifiers** (variable names, function names, etc.) because they have predefined meanings.

### JavaScript Keywords
Examples include:
- `var`, `let`, `const`
- `function`, `return`
- `if`, `else`, `switch`, `case`
- `for`, `while`, `do`
- `break`, `continue`
- `class`, `extends`, `super`
- `import`, `export`, `default`
- `try`, `catch`, `finally`, `throw`
- `new`, `delete`, `typeof`, `instanceof`

### TypeScript Keywords
TypeScript includes all JavaScript keywords plus additional ones for type safety:
- `interface`, `implements`
- `enum`
- `type`
- `readonly`
- `abstract`
- `public`, `private`, `protected`
- `override`
- `as` (type assertion)
- `unknown`, `any`, `never`, `void`
- `declare`, `namespace`

---

## 📌 Identifiers

Identifiers are names given to variables, functions, classes, etc. They must follow certain rules.

### Rules for Identifiers
- Must start with a letter, `_` (underscore), or `$` (dollar sign).
- Cannot start with a digit.
- Can contain letters, digits, `_`, and `$`.
- Cannot be a keyword.
- Case-sensitive (`myVar` and `MyVar` are different).

### Examples for javascript
```javascript
// JavaScript
let count = 10;
function greetUser() { ... }
class Person { ... }
--------

Examples for Typescript
// TypeScript
let userName: string = "Priyanka";
interface Employee { id: number; name: string; }
class Manager implements Employee { ... }

