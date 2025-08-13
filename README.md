# Homework 2: Code and Comment Extractor 📝

## Task Definition

```md
HW#2 Comments and Code Separation
Pathes to the files should be specified into configuration using "config" module
Input file containing TS code and comments
Assumed only comments of //
examples:
line with no comments - const abcd = 5;
line with comment only - //abcd is a variable of type number
line with code and comment const abcd = 5; //abcd is the variable with constant value 5
Write application reading the input file and creating two output files
Pathes of these files should be specified into configuration using "config" module
First file should contain only code from the input file
Second file should contain only comments from the input file
example
input file contains the following
//abcd is a varible of type number
let abcd: number;
const lmn = 5 //constant lmn contains value 5

output file with code
let abcd: number;
const lmn = 5

output file with comments
//abcd is a varible of type number
//constant lmn contains value 5
```

## Description 📝

This is a `TypeScript`-based Node.js application that processes a text input file, extracting lines of code and comments separately.
It reads a source file line-by-line, parses each line to split code from comments (lines starting with `//`), and writes the extracted code and comments into separate output files.

The main logic is implemented in two modules:

-   `CommentParser` — responsible for parsing each line and extracting the comment part.
-   `FileHandler` — responsible for reading input files and writing results into output files.

The project includes unit tests written with `Jest` to verify the functionality of these modules.

---

## Purpose 🎯

-   Practice file operations and streaming in Node.js
-   Work with line-by-line parsing using `readline`
-   Implement string processing and parsing logic in TypeScript
-   Gain experience setting up and running tests with `Jest` and `ts-jest`
-   Learn to configure a modern TypeScript project with ESM modules and proper imports

---

## How It Works 🔍

-   The app reads the input file line-by-line asynchronously.
-   Each line is processed by `CommentParser.extractCodeAndComments()` which splits the line into `code` and `comment` parts.
-   These parts are collected into separate arrays.
-   The arrays are written to two different output files: one for code, one for comments.
-   Logging is done during processing to track progress and any errors.

---

## Output 📜

Given an input file with lines like:

```js
const x = 5; // это переменная
let y = 10;
// комментарий
```

The app will produce two output files:

-   **Code output file:**

```
const x = 5;
let y = 10;

```

-   **Comment output file:**

```
// это переменная

// комментарий
```

---

## Usage 📦

1. Clone the repository or download the project folder.

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure your file paths in `config/default.json` (create if missing), e.g.:

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

## Project Structure 🗂

```
HW2/
│
├── src/
│   ├── app.ts                 # Main application entry point
│   ├── parser/
│   │   └── CommentParser.ts  # Logic to extract code and comments from a line
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

## Conclusion 🚀

This project helps to:

-   Get familiar with asynchronous file handling in Node.js
-   Practice parsing and string manipulation in TypeScript
-   Set up a modern test environment with Jest and TypeScript ESM support
-   Understand project organization and configuration for real-world Node.js apps

---

Made with ❤️ and `TypeScript`
By \[your name or GitHub handle]
