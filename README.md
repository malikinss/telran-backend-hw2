# Homework 2: Code and Comment Extractor 📝

## 🧩 Task Definition

The goal of this homework is to create a Node.js application that separates **TypeScript code** from **comments** in a given source file.

The application must:

- Read an input TypeScript file line-by-line.
- Split each line into **code** and **comment** parts.
- Write two separate output files:
    - One containing only the code.
    - One containing only the comments.
- Support comments starting with `//` (single-line comments).

### Example

**Input file:**

```ts
//abcd is a variable of type number
let abcd: number;
const lmn = 5; //constant lmn contains value 5
```

**Output code file:**

```ts
let abcd: number;
const lmn = 5;
```

**Output comment file:**

```ts
//abcd is a variable of type number
//constant lmn contains value 5
```

Paths to the input and output files must be configured in the `config` module.

---

## 📝 Description

This project is a **TypeScript Node.js application** designed to parse source files and extract comments and code into separate files.  
It uses **asynchronous file reading** with Node.js streams and the `readline` module for line-by-line processing.

The main modules are:

- `CommentParser` — responsible for splitting code and comments from each line.
- `FileHandler` — responsible for reading input files and writing output files.
- `config` — stores paths for input and output files.

The project also includes **unit tests** with `Jest` to ensure the parsing logic works correctly.

---

## 🎯 Purpose

This project helps to:

- Practice **file handling** and **stream processing** in Node.js.
- Learn **line-by-line parsing** using `readline`.
- Apply **string manipulation** and parsing logic in TypeScript.
- Set up a modern TypeScript project with **ESM modules**.
- Configure and run **unit tests** with `Jest` and `ts-jest`.

---

## 🔍 How It Works

1. The application reads the input file **asynchronously**.
2. Each line is sent to `CommentParser.extractCodeAndComments()`:
    - Lines starting with `//` are considered **comments only**.
    - Lines containing both code and comment are split at the first occurrence of `//`.
    - Lines without `//` are treated as **code only**.
3. Extracted **code lines** and **comment lines** are collected in arrays.
4. `FileHandler` writes these arrays into separate files defined in the configuration.
5. Logging is performed for process tracking and error handling.

---

## 📜 Output Example

Input file:

```ts
const x = 5; // это переменная
let y = 10;
// комментарий
```

**Generated output files:**

- **Code output file:**

```ts
const x = 5;
let y = 10;
```

- **Comment output file:**

```ts
// это переменная
// комментарий
```

---

## 📦 Usage

1. Clone the repository:

```bash
git clone <repo-url>
cd HW2
```

2. Install dependencies:

```bash
npm install
```

3. Configure file paths in `config/default.json`:

```json
{
	"inputFilePath": "./input.txt",
	"outputCodeFilePath": "./output_code.txt",
	"outputCommentFilePath": "./output_comments.txt"
}
```

4. Run the application:

```bash
npm start
```

5. Run tests:

```bash
npm test
```

---

## 🗂 Project Structure

```
HW2/
│
├── src/
│   ├── app.ts                 # Main application entry point
│   ├── parser/
│   │   └── CommentParser.ts  # Logic for extracting code and comments
│   └── utils/
│       └── FileHandler.ts    # File reading/writing utilities
│
├── tests/
│   ├── CommentParser.test.ts
│   └── FileHandler.test.ts
│
├── config/
│   └── default.json          # Configuration for input/output file paths
│
├── jest.config.cjs           # Jest configuration for ts-jest with ESM
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Testing

Unit tests verify:

- Correct splitting of code and comments in all scenarios:
    - Comment-only lines
    - Code-only lines
    - Lines with code and inline comments
- Correct handling of empty lines
- Proper writing of output files

Run tests with:

```bash
npm test
```

---

## ✅ Dependencies

- Node.js 18+
- TypeScript
- Jest (`ts-jest`)

---

## 🚀 Conclusion

This project demonstrates:

- Asynchronous file reading and writing in Node.js
- Line-by-line parsing and string manipulation in TypeScript
- Separation of code and comments for analysis or documentation purposes
- Unit testing with Jest in a TypeScript environment

---

Made with ❤️ and TypeScript by Sam-Shepsl Malikin
