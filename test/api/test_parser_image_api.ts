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
    ImagesRequest,
    ImagesOptions,
    ContainerItemInfo,
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_parser_image_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestImageApi",
            () => {
                it("TestGetImage_Docx",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.PasswordProtected.ToFileInfo();
                        const request = new ImagesRequest(imageOptions);
                        return TestContext.getParseApi().images(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                result.images.forEach((image) => {
                                    expect(image.path).to.have.string("parser/images/words/docx/four-pages_docx/image_{i}.jpeg");
                                    expect(image.downloadUrl).not.to.be.null;
                                });
                            });
                    });

                it("TestGetImage_Container",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.ZipWithEmailImagePdf.ToFileInfo();
                        const request = new ImagesRequest(imageOptions);
                        return TestContext.getParseApi().images(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                var paths: string[] = [
                                    "parser/images/containers/archive/zip-eml-jpg-pdf_zip/",
                                    "parser/images/containers/archive/zip-eml-jpg-pdf_zip/embedded-image-and-attachment_eml/",
                                    "parser/images/containers/archive/zip-eml-jpg-pdf_zip/template-document_pdf/"
                                ];
                                result.images.forEach((image) => {
                                    expect(paths.some(x => image.path.includes(x))).to.be.true;
                                    expect(image.downloadUrl).not.to.be.null;
                                });
                            });
                    });

                it("TestGetImage_Email",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.ImageAndAttachment.ToFileInfo();
                        const request = new ImagesRequest(imageOptions);
                        return TestContext.getParseApi().images(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                var paths: string[] = [
                                    "parser/images/email/eml/embedded-image-and-attachment_eml/"
                                ];
                                result.images.forEach((image) => {
                                    expect(paths.some(x => image.path.includes(x))).to.be.true;
                                    expect(image.downloadUrl).not.to.be.null;
                                });
                            });
                    });

                it("TestGetImage_Pdf_FromPages",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.Pdf.ToFileInfo();
                        imageOptions.startPageNumber = 1;
                        imageOptions.countPagesToExtract = 2;
                        const request = new ImagesRequest(imageOptions);
                        return TestContext.getParseApi().images(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.pages).not.to.be.empty;
                                expect(result.pages.length).equal(2);

                                expect(result.pages[0].images[0].path).equal("parser/images/pdf/template-document_pdf/page_1/image_0.jpeg");
                                expect(result.pages[1].images[0].path).equal("parser/images/pdf/template-document_pdf/page_2/image_0.jpeg");
                            });
                    });

                it("ImageExtractTest_Pdf_ContainerItem_FromPages",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.PdfContainer.ToFileInfo();
                        imageOptions.startPageNumber = 1;
                        imageOptions.countPagesToExtract = 2;
                        imageOptions.containerItemInfo = new ContainerItemInfo({ relativePath: "template-document.pdf" });
                        const request = new ImagesRequest(imageOptions);
                        return TestContext.getParseApi().images(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.pages).not.to.be.empty;
                                expect(result.pages.length).equal(2);

                                expect(result.pages[0].images[0].path).equal("parser/images/template-document_pdf/page_1/image_0.jpeg");
                                expect(result.pages[1].images[0].path).equal("parser/images/template-document_pdf/page_2/image_0.jpeg");
                            });
                    });

                it("ImageExtractTest_Pdf_FromPages_OutOfThePageRange",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.Pdf.ToFileInfo();
                        imageOptions.startPageNumber = 3;
                        imageOptions.countPagesToExtract = 5;
                        const request = new ImagesRequest(imageOptions);
                        try {
                            TestContext.getParseApi().images(request)
                        } catch (error) {
                            expect(error.message).equal("Request parameters missing or have incorrect format");
                        }
                    });

                it("ImageExtractTest_Pdf_Container_FromPages_Error",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.Zip.ToFileInfo();
                        imageOptions.startPageNumber = 3;
                        imageOptions.countPagesToExtract = 5;
                        const request = new ImagesRequest(imageOptions);
                        try {
                            TestContext.getParseApi().images(request)
                        } catch (error) {
                            expect(error.message).equal("The specified file \'containers\\archive\\docx.zip\' has type which is not currently supported.");
                        }
                    });

                it("TestGetImage_FileNotFoundResult",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.NotExist.ToFileInfo();
                        const request = new ImagesRequest(imageOptions);
                        try {
                            TestContext.getParseApi().images(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Can\'t find file located at \'folder\\file-not-exist.pdf\'.");
                        }
                    });

                it("TestGetImage_IncorrectPassword",
                    () => {
                        const imageOptions = new ImagesOptions();
                        imageOptions.fileInfo = TestFile.PasswordProtected.ToFileInfo();
                        imageOptions.fileInfo.password = "123";
                        const request = new ImagesRequest(imageOptions);
                        try {
                            TestContext.getParseApi().images(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Password provided for file \'words\\docx\\password-protected.docx\' is incorrect.");
                        }
                    });
            });
    });