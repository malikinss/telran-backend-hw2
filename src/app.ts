// src/app.ts

/*
 * This is the main entry point of the application.
 * It initializes the FileHandler and CommentParser classes,
 * reads the input file, processes each line to extract code and comments,
 * and writes the results to the specified output files.
 */

import config from "config";
import { FileHandler } from "./utils/FileHandler.js";
import { CommentParser } from "./parser/CommentParser.js";

async function main() {
	const fileHandler = new FileHandler({
		inputFilePath: config.get<string>("inputFilePath"),
		outputCodeFilePath: config.get<string>("outputCodeFilePath"),
		outputCommentFilePath: config.get<string>("outputCommentFilePath"),
	});

	try {
		// Read the input file
		const lines = await fileHandler.readInputFile();
		let codeLines: string[] = [];
		let commentLines: string[] = [];

		for (const line of lines) {
			// Extract code and comments from each line
			const { code, comment } =
				CommentParser.extractCodeAndComments(line);
			codeLines.push(code);
			commentLines.push(comment);
		}
		fileHandler.writeOutputFiles(codeLines, commentLines);
		console.log(
			`✅ Successfully processed ${lines.length} lines from the input file.`
		);
	} catch (error) {
		console.error("❌ Error processing files:", error);
	}
}

main();
