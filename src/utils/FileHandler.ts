// src/utils/FileHandler.ts

/*
 * This module provides functionality to handle file operations such as reading
 * an input file and writing output files for code and comments.
 * It uses Node.js's built-in 'fs' and 'readline' modules to read lines from
 * a file and write them to separate output files.
 * The FileHandler class is initialized with paths for the input file and
 * the output files for code and comments.
 */
import * as fs from "fs";
import * as readline from "readline";

/* FileHandler class definition
 * This class encapsulates the logic for reading an input file and writing
 * the extracted code and comments to separate output files.
 * It provides methods to read lines from the input file and to write
 * the processed lines to the output files.
 *
 * @class FileHandler
 */
export class FileHandler {
	/*
	 * @property {string} inputFilePath - Path to the input file to be read.
	 * @property {string} outputCodeFilePath - Path to the output file for code
	 * @property {string} outputCommentFilePath - Path to the output file for comments
	 */
	private inputFilePath: string;
	private outputCodeFilePath: string;
	private outputCommentFilePath: string;

	/*
	 * @constructor
	 * @param {Object} config - Configuration object containing file paths.
	 * @param {string} config.inputFilePath - Path to the input file.
	 * @param {string} config.outputCodeFilePath - Path to the output file for code.
	 * @param {string} config.outputCommentFilePath - Path to the output file for comments.
	 */
	constructor(config: {
		inputFilePath: string;
		outputCodeFilePath: string;
		outputCommentFilePath: string;
	}) {
		this.inputFilePath = config.inputFilePath;
		this.outputCodeFilePath = config.outputCodeFilePath;
		this.outputCommentFilePath = config.outputCommentFilePath;
	}

	/*
	 * Reads the input file line by line and returns an array of lines.
	 * Uses Node.js's 'readline' module to handle the file stream.
	 *
	 * @returns {Promise<string[]>} - A promise that resolves to an array of lines from the input file.
	 * @throws {Error} - Throws an error if the input file cannot be read.
	 */
	async readInputFile(): Promise<string[]> {
		try {
			console.log(`📖 Reading input file: ${this.inputFilePath}\n`);
			const fileStream = fs.createReadStream(this.inputFilePath);
			const rl = readline.createInterface({
				input: fileStream,
				crlfDelay: Infinity,
			});

			return await this.collectLines(rl);
		} catch (err) {
			throw new Error(
				`❌ Error reading input file "${this.inputFilePath}": ${
					(err as Error).message
				}`
			);
		}
	}

	/*
	 * Collects lines from a readline interface and returns them as an array.
	 * This method is used to read all lines from the input file asynchronously.
	 *
	 * @param {readline.Interface} rl - The readline interface to read lines from.
	 * @returns {Promise<string[]>} - A promise that resolves to an array of lines.
	 * @throws {Error} - Throws an error if there is an issue collecting lines.
	 */
	private async collectLines(rl: readline.Interface): Promise<string[]> {
		const lines: string[] = [];
		try {
			for await (const line of rl) {
				lines.push(line);
			}
			console.log(`✅ Successfully read ${lines.length} lines.\n`);
			return lines;
		} catch (err) {
			throw new Error(
				`❌ Error collecting lines from input file: ${
					(err as Error).message
				}`
			);
		}
	}

	/*
	 * Writes the provided code and comment lines to their respective output files.
	 * This method takes two arrays of strings, one for code lines and one for comment lines,
	 * and writes them to the specified output files.
	 *
	 * @param {string[]} codeLines - An array of code lines to be written to the output code file.
	 * @param {string[]} commentLines - An array of comment lines to be written to the output comment file.
	 * @throws {Error} - Throws an error if there is an issue writing to the output files.
	 */
	writeOutputFiles(codeLines: string[], commentLines: string[]): void {
		console.log(
			`\n✍️ Writing output files:\n - Code: ${this.outputCodeFilePath}\n - Comments: ${this.outputCommentFilePath}\n`
		);
		try {
			fs.writeFileSync(
				this.outputCodeFilePath,
				codeLines.join("\n"),
				"utf8"
			);
			fs.writeFileSync(
				this.outputCommentFilePath,
				commentLines.join("\n"),
				"utf8"
			);
			console.log(`✅ Successfully wrote output files.\n`);
		} catch (err) {
			throw new Error(
				`❌ Error writing output files: ${(err as Error).message}`
			);
		}
	}
}
