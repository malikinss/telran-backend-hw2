# Homework 2: Code and Comment Extractor 📝

## Task Definition

HW#2 Comments and Code Separation  
Pathes to the files should be specified into configuration using "config" module.  
Input file containing TS code and comments.  
Assumed only comments of `//`.

Examples:

-   line with no comments → `const abcd = 5;`
-   line with comment only → `//abcd is a variable of type number`
-   line with code and comment → `const abcd = 5; //abcd is the variable with constant value 5`

Write application reading the input file and creating two output files.  
Pathes of these files should be specified into configuration using "config" module.

-   First file should contain only code from the input file
-   Second file should contain only comments from the input file

Example input:

```ts
//abcd is a variable of type number
let abcd: number;
const lmn = 5; //constant lmn contains value 5
```

Output file with **code**:

```ts
let abcd: number;
const lmn = 5;
```

Output file with **comments**:

```ts
//abcd is a variable of type number
//constant lmn contains value 5
```

## Description 📝

This is a simple `TypeScript`-based Node.js application that extracts code and comments from a source file.
The program reads the file line-by-line, checks whether a line contains a `//` comment, and separates the **code** and **comment** parts into different arrays.
After processing, the app writes the results into two separate files.

The configuration of input and output files is managed via the `config` module.

## Purpose 🎯

-   Practice working with file reading/writing in Node.js
-   Learn string processing and splitting by markers (`//`)
-   Understand project configuration with the `config` package
-   Practice asynchronous programming in Node.js with `async/await`

## How It Works 🔍

1. The app reads the **input file** using `fs.promises.readFile()`.
2. The content is split into lines, normalized to `\n`, and trailing empty lines are removed.
3. Each line is checked for `//`:

    - If found → the part before `//` is saved as **code**, the part after (including `//`) as **comment**.
    - If not found → the whole line is treated as **code** only.

4. The results are written into two output files:

    - one containing only code,
    - one containing only comments.

5. Logs are displayed during execution for better tracking.

## Output 📜

Example input:

```ts
const x = 5; // это переменная
let y = 10;
// комментарий
```

Code output file:

```ts
const x = 5;
let y = 10;
```

Comment output file:

```ts
// это переменная

// комментарий
```

## Usage 📦

1. Clone the repository or download the project folder.

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a configuration file `config/default.json` with paths for your files:

    ```json
    {
    	"inputFilePath": "./input/input.ts",
    	"outputCodeFilePath": "./output/code.ts",
    	"outputCommentFilePath": "./output/comments.txt"
    }
    ```

4. Place your input file (e.g., `input.ts`) in the project folder.

5. Run the application:

    ```bash
    npm run start
    ```

6. Check the generated output files:

    - `code.ts` — only code
    - `comments.txt` — only comments

## Project Structure 🗂

```
./
│
├── src/
│   └── app.ts          # Main application script
├── input/
│   └── input.ts        # File with the input data
├── output/
│   ├── code.ts         # File with the output code data
│   │
│   └── comments.txt    # File with the output comments data
│
├── config/
│   └── default.json    # Configuration with file paths
│
├── package.json
├── tsconfig.json
└── README.md
```

## Conclusion 🚀

This project demonstrates:

-   Practical file I/O handling in Node.js
-   Splitting and parsing strings by markers (`//`)
-   Using TypeScript with Node.js
-   Configuration-based project setup

---

Made with ❤️ and `TypeScript` by Sam-Shepsl Malikin
