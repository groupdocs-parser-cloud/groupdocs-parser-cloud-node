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
    GetInfoRequest,
    InfoOptions,
    ContainerItemInfo,
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_parser_info_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestInfoApi",
            () => {
                it("TestGetInfo_Txt",
                    () => {
                        const infoOptions = new InfoOptions();
                        infoOptions.fileInfo = TestFile.EncodingDetection.ToFileInfo();
                        const request = new GetInfoRequest(infoOptions);
                        return TestContext.getInfoApi().getInfo(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.fileType.fileFormat.toUpperCase()).to.have.string("PLAIN TEXT FILE");
                                expect(result.pageCount).equal(1);
                            });
                    });

                it("TestGetInfo_Docx",
                    () => {
                        const infoOptions = new InfoOptions();
                        infoOptions.fileInfo = TestFile.FourPages.ToFileInfo();
                        const request = new GetInfoRequest(infoOptions);
                        return TestContext.getInfoApi().getInfo(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.fileType.fileFormat.toUpperCase()).to.have.string(
                                    "MICROSOFT WORD OPEN XML DOCUMENT"
                                        .toUpperCase());
                                expect(result.pageCount).equal(4);
                            });
                    });

                it("TestGetInfo_ContainerItem",
                    () => {
                        const infoOptions = new InfoOptions();
                        infoOptions.fileInfo = TestFile.Zip.ToFileInfo();
                        let containerItemInfo = new ContainerItemInfo();
                        containerItemInfo.relativePath = "one-page.docx";
                        infoOptions.containerItemInfo = containerItemInfo;
                        const request = new GetInfoRequest(infoOptions);
                        return TestContext.getInfoApi().getInfo(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.fileType.fileFormat.toUpperCase()).to.have.string("MICROSOFT WORD OPEN XML DOCUMENT");
                                expect(result.pageCount).equal(1);
                            });
                    });

                it("TestGetInfo_FileNotFoundResult",
                    () => {
                        const infoOptions = new InfoOptions();
                        infoOptions.fileInfo = TestFile.NotExist.ToFileInfo();
                        const request = new GetInfoRequest(infoOptions);
                        try {
                            TestContext.getInfoApi().getInfo(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Can\'t find file located at \'folder\\file-not-exist.pdf\'.");
                        }
                    });

                it("TestGetInfo_IncorrectPassword",
                    () => {
                        const infoOptions = new InfoOptions();
                        infoOptions.fileInfo = TestFile.PasswordProtected.ToFileInfo();
                        infoOptions.fileInfo.password = "123";
                        const request = new GetInfoRequest(infoOptions);
                        try {
                            TestContext.getInfoApi().getInfo(request)
                        } catch (error) {
                            expect(error.message).equal(
                                "Password provided for file \'words\\docx\\password-protected.docx\' is incorrect.");
                        }
                    });
            });
    });