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
    ContainerRequest,
    ContainerOptions,
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_parser_container_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestInfoApi",
            () => {
                it("TestGetContainerItemInfo",
                    () => {
                        const containerOptions = new ContainerOptions();
                        containerOptions.fileInfo = TestFile.Zip.ToFileInfo();
                        const request = new ContainerRequest(containerOptions);
                        return TestContext.getInfoApi().container(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.containerItems).not.to.be.empty;
                                expect(result.containerItems.length).equal(2);
                                var names: string[] = [
                                    "one-page.docx", "four-pages.docx"
                                ];
                                result.containerItems.forEach((item) => {
                                    expect(names.some(x => item.name.includes(x))).to.be.true;
                                });
                            });
                    });

                it("TestGetContainerItemInfo_rar",
                    () => {
                        const containerOptions = new ContainerOptions();
                        containerOptions.fileInfo = TestFile.Rar.ToFileInfo();
                        const request = new ContainerRequest(containerOptions);
                        return TestContext.getInfoApi().container(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.containerItems).not.to.be.empty;
                                expect(result.containerItems.length).equal(2);
                                var names: string[] = [
                                    "sample.docx", "sample.pdf"
                                ];
                                result.containerItems.forEach((item) => {
                                    expect(names.some(x => item.name.includes(x))).to.be.true;
                                });
                            });
                    });

                it("TestGetContainerItemInfo_tar",
                    () => {
                        const containerOptions = new ContainerOptions();
                        containerOptions.fileInfo = TestFile.Tar.ToFileInfo();
                        const request = new ContainerRequest(containerOptions);
                        return TestContext.getInfoApi().container(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.containerItems).not.to.be.empty;
                                expect(result.containerItems.length).equal(5);
                                var names: string[] = [
                                    "sample.docx", "sample.pdf", "1200px-RedPandaFullBody.JPG", "images.pdf", "th.jpg"
                                ];
                                result.containerItems.forEach((item) => {
                                    expect(names.some(x => item.name.includes(x))).to.be.true;
                                });
                            });
                    });

                it("TestGetContainerItemInfo_FileNotFoundResult",
                    () => {
                        const containerOptions = new ContainerOptions();
                        containerOptions.fileInfo = TestFile.NotExist.ToFileInfo();
                        const request = new ContainerRequest(containerOptions);
                        try {
                            TestContext.getInfoApi().container(request);
                        }
                        catch (e) {
                            expect(e.message).equal(
                                "Can\'t find file located at \'folder\\file-not-exist.pdf\'.");
                        }
                    });

                it("GetContainerItemsInfo_UnsupportedFileType",
                    () => {
                        const containerOptions = new ContainerOptions();
                        containerOptions.fileInfo = TestFile.FourPages.ToFileInfo();
                        const request = new ContainerRequest(containerOptions);
                        try {
                            TestContext.getInfoApi().container(request);
                        } catch (e) {
                            expect(e.message).equal(
                                "Password provided for file \'words\\docx\\four-pages.docx\' is incorrect.");
                        }
                    });

                it("GetContainerItemsInfo_WithoutOptions",
                    () => {
                        const request = new ContainerRequest(null);
                        try {
                            TestContext.getInfoApi().container(request);
                        } catch (e) {
                            expect(e.message).equal(
                                'Required parameter "requestObj" was null or undefined when calling container.');
                        }
                    });
            });
    });