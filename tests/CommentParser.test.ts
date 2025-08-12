// tests/CommentParser.test.ts

import { CommentParser } from "../src/parser/CommentParser";

describe("CommentParser", () => {
	test("extractCodeAndComment: строка с кодом и комментарием", () => {
		const input = "const x = 5; // это переменная";
		const result = CommentParser.extractCodeAndComments(input);
		expect(result.code).toBe("const x = 5;");
		expect(result.comment).toBe("// это переменная");
	});

	test("extractCodeAndComment: строка только с кодом", () => {
		const input = "let y = 10;";
		const result = CommentParser.extractCodeAndComments(input);
		expect(result.code).toBe("let y = 10;");
		expect(result.comment).toBe("");
	});

	test("extractCodeAndComment: строка только с комментарием", () => {
		const input = "// комментарий";
		const result = CommentParser.extractCodeAndComments(input);
		expect(result.code).toBe("");
		expect(result.comment).toBe("// комментарий");
	});
});
