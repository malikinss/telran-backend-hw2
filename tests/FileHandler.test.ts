// tests/FileHandler.test.ts

import fs from "fs";
import path from "path";
import { FileHandler } from "../src/utils/FileHandler";

const testInputPath = path.resolve("./tests/test_input.txt");
const testOutputCodePath = path.resolve("./tests/test_output.txt");
const testOutputCommentPath = path.resolve("./tests/test_output_comments.txt");

const fh = new FileHandler({
	inputFilePath: testInputPath,
	outputCodeFilePath: testOutputCodePath,
	outputCommentFilePath: testOutputCommentPath,
});

describe("FileHandler", () => {
	beforeAll(() => {
		fs.writeFileSync(testInputPath, "line1\n// comment\nline3", "utf-8");
	});

	afterAll(() => {
		if (fs.existsSync(testInputPath)) fs.unlinkSync(testInputPath);
		if (fs.existsSync(testOutputCodePath))
			fs.unlinkSync(testOutputCodePath);
		if (fs.existsSync(testOutputCommentPath))
			fs.unlinkSync(testOutputCommentPath);
	});

	test("readInputFile должен читать файл построчно", async () => {
		const lines = await fh.readInputFile();
		expect(lines).toEqual(["line1", "// comment", "line3"]);
	});

	test("writeOutputFiles должен записывать строки в файлы", () => {
		const codes = ["one", "two", "three"];
		const comments = ["// one", "// two", "// three"];
		fh.writeOutputFiles(codes, comments);
		const codeContent = fs.readFileSync(testOutputCodePath, "utf-8");
		expect(codeContent).toBe("one\ntwo\nthree");
		const commentContent = fs.readFileSync(testOutputCommentPath, "utf-8");
		expect(commentContent).toBe("// one\n// two\n// three");
	});
});
