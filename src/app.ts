// src/app.ts

import * as fs from "fs";
import config from "config";

const filePath = {
	input: config.get<string>("inputFilePath"),
	code: config.get<string>("outputCodeFilePath"),
	comment: config.get<string>("outputCommentFilePath"),
};

async function main() {
	try {
		// Read the input file
		const lines = await readInputFile();
		const codeLines: string[] = [];
		const commentLines: string[] = [];
		let code: string;
		let comment: string;

		lines.forEach((line) => {
			const commentId = line.indexOf("//");

			if (commentId === -1) {
				code = line.trim();
				comment = "";
			} else {
				code = line.substring(0, commentId).trim();
				comment = line.substring(commentId).trim();
			}
			codeLines.push(code);
			commentLines.push(comment);
		});

		await writeOutputFiles(codeLines, commentLines);

		console.log(
			`✅ Successfully processed ${lines.length} lines from the input file.`
		);
	} catch (error) {
		console.error("❌ Error processing files:", error);
	}
}

async function readInputFile(): Promise<string[]> {
	try {
		console.log(`📖 Reading input file: ${filePath.input}\n`);
		const data = await fs.promises.readFile(filePath.input, "utf8");

		const lines = data.replace(/\r\n?/g, "\n").split("\n");

		if (lines.length > 0 && lines[lines.length - 1] === "") {
			lines.pop();
		}

		console.log(`✅ Successfully read ${lines.length} lines.`);
		return lines;
	} catch (err) {
		throw new Error(
			`❌ Error reading input file "${filePath.input}": ${
				(err as Error).message
			}`
		);
	}
}

async function writeOutputFiles(
	codeLines: string[],
	commentLines: string[]
): Promise<void> {
	console.log(
		`\n✍️ Writing output files:\n - Code: ${filePath.code}\n - Comments: ${filePath.comment}\n`
	);
	try {
		fs.writeFileSync(filePath.code, codeLines.join("\n"), "utf8");
		fs.writeFileSync(filePath.comment, commentLines.join("\n"), "utf8");
		console.log(`✅ Successfully wrote output files.\n`);
	} catch (err) {
		throw new Error(
			`❌ Error writing output files: ${(err as Error).message}`
		);
	}
}

main();
