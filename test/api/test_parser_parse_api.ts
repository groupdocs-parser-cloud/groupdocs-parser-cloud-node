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
    ParseRequest,
    ParseOptions,
    CreateTemplateOptions,
    Template,
    CreateTemplateRequest,
    Size,
    Point
} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";
import Model = require("../../src/model");
import Field = Model.Field;
import FieldPosition = Model.FieldPosition;
import Rectangle = Model.Rectangle;
import Table = Model.Table;
import DetectorParameters = Model.DetectorParameters;

describe("test_parser_parse_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestParseApi",
            () => {
                it("TestParseDocument_SavedTemplate",
                    async () => {
                        const templatePath = "templates/document-template.json";
                        const template = new CreateTemplateOptions();
                        template.template = Setup.getTemplate();
                        template.templatePath = templatePath;
                        const templateRequest = new CreateTemplateRequest(template);
                        var templateResult = await TestContext.getTemplateApi().createTemplate(templateRequest);
                        expect(templateResult).not.to.be.null;

                        const parseOptions = new ParseOptions();
                        parseOptions.fileInfo = TestFile.TemplateDocumentDocx.ToFileInfo();
                        parseOptions.templatePath = templatePath;
                        const request = new ParseRequest(parseOptions);
                        return TestContext.getParseApi().parse(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.fieldsData).not.to.be.empty;
                                expect(result.count).equal(4);

                                var fieldValues: string[] = [
                                    "FIELD1", "RELATEDFIELD2", "REGEX", "TABLECELLS"
                                ];

                                result.fieldsData.forEach((field) => {
                                    expect(fieldValues.some(x => x.includes(field.name))).to.be.true;
                                    if (field.name === "TABLECELLS") {
                                        expect(field.pageArea.pageTableArea.columnCount).equal(4);
                                        expect(field.pageArea.pageTableArea.rowCount).equal(3);
                                    }
                                });
                            });
                    });

                it("TestParseDocument_RawTemplate",
                    async () => {
                        const parseOptions = new ParseOptions();
                        parseOptions.fileInfo = TestFile.TemplateDocumentDocx.ToFileInfo();
                        parseOptions.template = Setup.getTemplate();
                        const request = new ParseRequest(parseOptions);
                        return TestContext.getParseApi().parse(request)
                            .then((result) => {
                                expect(result).not.to.be.null;
                                expect(result.fieldsData).not.to.be.empty;
                                expect(result.count).equal(4);

                                var fieldValues: string[] = [
                                    "FIELD1", "RELATEDFIELD2", "REGEX", "TABLECELLS"
                                ];

                                result.fieldsData.forEach((field) => {
                                    expect(fieldValues.some(x => x.includes(field.name))).to.be.true;
                                    if (field.name === "TABLECELLS") {
                                        expect(field.pageArea.pageTableArea.columnCount).equal(4);
                                        expect(field.pageArea.pageTableArea.rowCount).equal(3);
                                    }
                                });
                            });
                    });

                it("TestParseDocument_FileNotFoundResult",
                    () => {
                        const parseOptions = new ParseOptions();
                        parseOptions.fileInfo = TestFile.NotExist.ToFileInfo();
                        parseOptions.template = Setup.getTemplate();
                        const request = new ParseRequest(parseOptions);
                        try {
                            TestContext.getParseApi().parse(request)
                        } catch
                        (error) {
                            expect(error.message).equal(
                                "Can\'t find file located at \'folder\\file-not-exist.pdf\'.");
                        }
                    });
            });

        it("TestParseDocument_WithoutOptions",
            () => {
                const parseOptions = new ParseOptions();
                parseOptions.fileInfo = TestFile.JpegFile.ToFileInfo();
                const request = new ParseRequest(parseOptions);
                try {
                    TestContext.getParseApi().parse(request)
                } catch (error) {
                    expect(error.message).equal(
                        "Request parameters missing or have incorrect format");
                }
            });

        it("TestParseDocument_NotSupportedFile",
            () => {
                const parseOptions = new ParseOptions();
                parseOptions.fileInfo = TestFile.JpegFile.ToFileInfo();
                parseOptions.templatePath = "templates/document-template.json";
                parseOptions.template = Setup.getTemplate();
                const request = new ParseRequest(parseOptions);
                try {
                    TestContext.getParseApi().parse(request)
                } catch (error) {
                    expect(error.message).equal(
                        "The specified file \'image\\jpeg\\document.jpeg\' has type which is not currently supported.");
                }
            });

        it("TestParseDocument_IncorrectPassword",
            () => {
                const parseOptions = new ParseOptions();
                parseOptions.fileInfo = TestFile.PasswordProtected.ToFileInfo();
                parseOptions.fileInfo.password = "123";
                parseOptions.templatePath = "templates/document-template.json";
                parseOptions.template = Setup.getTemplate();
                const request = new ParseRequest(parseOptions);
                try {
                    TestContext.getParseApi().parse(request)
                } catch (error) {
                    expect(error.message).equal(
                        "Password provided for file \'words\\docx\\password-protected.docx\' is incorrect.");
                }
            });
    });

class Setup {
    public static getTemplate() {
        var options = new Template();
        const field1 = new Field();
        field1.fieldName = "Field1";
        field1.pageIndex = 4;
        field1.fieldPosition = new FieldPosition();
        field1.fieldPosition.fieldPositionType = "Fixed";
        field1.fieldPosition.rectangle = new Rectangle({ size: new Size({ height: 30, width: 140 }), position: new Point({ x: 0, y: 0 }) });

        const field2 = new Field();
        field2.fieldName = "RelatedField2";
        field2.fieldPosition = new FieldPosition();
        field2.fieldPosition.fieldPositionType = "Linked";
        field2.fieldPosition.linkedFieldName = "Field1";
        field2.fieldPosition.isBottomLinked = true;
        field2.fieldPosition.isRightLinked = true;
        field2.fieldPosition.searchArea = new Size({ height: 24, width: 209 });
        field2.fieldPosition.autoScale = false;

        const field3 = new Field();
        field3.fieldName = "Regex";
        field3.fieldPosition = new FieldPosition();
        field3.fieldPosition.fieldPositionType = "Regex";
        field3.fieldPosition.regex = "REGEX TEXT 123";

        options.fields = new Array<Field>(
            field1,
            field2,
            field3
        );

        let table = new Table({
            tableName: "TableCells",
            pageIndex: 5,
            detectorParameters: new DetectorParameters({
                rectangle: new Rectangle({ size: new Size({ height: 400, width: 600 }), position: new Point({ x: 0, y: 0 }) })
            })
        });

        options.tables = new Array<Table>(table);
        return options;
    };
}