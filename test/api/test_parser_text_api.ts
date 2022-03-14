// --------------------------------------------------------------------------------------------------------------------
// <copyright company="Aspose Pty Ltd">
//  Copyright (c) 2003-2019 Aspose Pty Ltd
// </copyright>
// <summary>
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
// 
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
// 
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

import { expect } from "chai";
import "mocha";

import {
    TextOptions,
    TextRequest,
    FormattedTextOptions,
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_parser_text_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });
        describe("TestTextApi",
            () => {
                it("TestExtractText",
                    () => {
                        const textOptions = new TextOptions();
                        textOptions.fileInfo = TestFile.OnePage.ToFileInfo();
                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result.text).not.to.be.null;
                                expect(result.text).to.have.string("First Page\r\r\f");
                            });
                    });

                it("TestExtractText_md",
                    () => {
                        const textOptions = new TextOptions();
                        textOptions.fileInfo = TestFile.Md.ToFileInfo();
                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result.text).not.to.be.null;
                                expect(result.text).to.have.string("# Test\r\rText for test:\r\r\tOne\r\tTwo\r\tSub1\rSub2\r\tThree\r\rBullets:\r\rA\rAA\rB\rC\f");
                            });
                    });

                it("TestExtractText_WithPassword",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.PasswordProtected.ToFileInfo(),
                            startPageNumber: 0,
                            countPagesToExtract: 1,
                            formattedTextOptions: new FormattedTextOptions({
                                mode: "PlainText"
                            })
                        });

                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result.text).to.be.null;
                                expect(result.pages[0].text).to.have.string("Text inside a bookmark 1\r\n\r\nPage 1 heading!\r\n\r\nSample test text - Page 1!\r\n\r\n\fText inside a bookmark 2\r\n\r\n");
                            });
                    });

                it("TestExtractPages",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.FourPages.ToFileInfo(),
                            startPageNumber: 0,
                            countPagesToExtract: 4,
                            formattedTextOptions: new FormattedTextOptions({
                                mode: "PlainText"
                            })
                        });

                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result.pages).not.to.be.null;
                                expect(result.pages[0].pageIndex).equal(0);
                                expect(result.pages[0].text).to.have.string("Text inside bookmark 0\r\n\r\nPage 0 heading\r\n\r\nPage Text - Page 0\r\n\r\n\fText inside bookmark 1\r\n\r\n");
                                expect(result.pages[3].pageIndex).equal(3);
                                expect(result.pages[3].text).to.have.string("\fText inside bookmark 3\r\n\r\nPage 3 heading\r\n\r\nPage Text - Page 3\r\n\r\n");
                            });
                    });

                it("TestExtractFormatted",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.FormattedDocument.ToFileInfo(),
                            formattedTextOptions: new FormattedTextOptions({
                                mode: "Html"
                            })
                        });

                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.text).to.have.string("<b>Bold text</b>");
                                expect(result.text).to.have.string("<i>Italic text</i>");
                                expect(result.text).to.have.string("<h1>Heading 1</h1>");
                                expect(result.text).to.have.string("<tr><td><p>table</p></td>");
                                expect(result.text).to.have.string("<ol><li><i>First element</i>");
                                expect(result.text).to.have.string("<a href=\"http://targetwebsite.domain\">Hyperlink </a>");
                            });
                    });

                it("TestExtractFormattedPage",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.FormattedDocument.ToFileInfo(),
                            formattedTextOptions: new FormattedTextOptions({
                                mode: "Markdown"
                            }),
                            startPageNumber: 1,
                            countPagesToExtract: 1
                        });

                        const request = new TextRequest(textOptions);
                        return TestContext.getParseApi().text(request)
                            .then((result) => {
                                expect(result.pages).not.to.be.empty;
                                expect(result.pages[0].text).to.have.string("**Second page bold text**");
                                expect(result.pages[0].text).to.have.string("# Second page heading");
                            });
                    });

                it("TestExtractText_FileNotFoundResult",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.NotExist.ToFileInfo()
                        });

                        const request = new TextRequest(textOptions);
                        try {
                            TestContext.getParseApi().text(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Can\'t find file located at \'folder\\file-not-exist.pdf\'.");
                        }
                    });

                it("TestExtractText_NotSupportedFile",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.JpegFile.ToFileInfo()
                        });

                        const request = new TextRequest(textOptions);
                        try {
                            TestContext.getParseApi().text(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "The specified file \'image\\jpeg\\document.jpeg\' has type which is not currently supported.");
                        }
                    });

                it("TestExtractText_IncorrectPassword",
                    () => {
                        const textOptions = new TextOptions({
                            fileInfo: TestFile.PasswordProtected.ToFileInfo()
                        });
                        textOptions.fileInfo.password = "123";

                        const request = new TextRequest(textOptions);
                        try {
                            TestContext.getParseApi().text(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Password provided for file \'words\\docx\\password-protected.docx\' is incorrect.");
                        }
                    });
            });
    });