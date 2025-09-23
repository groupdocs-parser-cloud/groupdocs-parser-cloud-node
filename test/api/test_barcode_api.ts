// --------------------------------------------------------------------------------------------------------------------
// <copyright company="Aspose Pty Ltd">
//  Copyright (c) Aspose Pty Ltd
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
    BarcodesRequest,
    BarcodesOptions
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_parser_barcode_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestBarcodesApi",
            () => {
                it("TestGetBarcodes_Docx",
                    () => {
                        const barcodesOptions = new BarcodesOptions();
                        barcodesOptions.fileInfo = TestFile.PasswordProtected.ToFileInfo();
                        const request = new BarcodesRequest(barcodesOptions);
                        return TestContext.getParseApi().barcodes(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                result.barcodes.forEach((barcode) => {
                                    expect(barcode.value).not.to.be.null;
                                });
                            });
                    });
                });
            });