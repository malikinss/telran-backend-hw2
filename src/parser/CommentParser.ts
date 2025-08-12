// src/parser/CommentParser.ts

/*
This module provides functionality to parse lines of code and extract comments.
It identifies comments that start with "//" and separates them from the code.
*/
export class CommentParser {
	/**
	 * Extracts code and comments from a given line.
	 * @param line - The line of code to parse.
	 * @returns An object containing the code and the comment.
	 */
	static extractCodeAndComments(line: string): {
		code: string;
		comment: string;
	} {
		console.log(`🔍 Extracting code and comments from line: "${line}"`);
		try {
			const commentIndex = line.indexOf("//");
			if (commentIndex === -1) {
				return { code: line.trim(), comment: "" };
			}

			const code = line.substring(0, commentIndex).trim();
			const comment = line.substring(commentIndex).trim();

			return { code, comment };
		} catch (err) {
			throw new Error(
				`❌ Error extracting code and comments in line: "${line}". ${
					(err as Error).message
				}`
			);
		}
	}
}
