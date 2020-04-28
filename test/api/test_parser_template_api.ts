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
    TemplateOptions, CreateTemplateRequest, CreateTemplateOptions, Template, Size, Point
} from "../../src/model";

import * as TestContext from "../test_context";
import Model = require("../../src/model");
import Field = Model.Field;
import FieldPosition = Model.FieldPosition;
import RectangleModel = Model.Rectangle;
import Table = Model.Table;
import DetectorParameters = Model.DetectorParameters;
import GetTemplateRequest = Model.GetTemplateRequest;


describe("test_parser_template_api",
    () => {

        before(async () => {
            await TestContext.uploadTestFiles();
        });

        afterEach(async function () {
            await TestContext.cleanupTempFiles();
        });

        describe("TestTemplateApi",
            () => {
                it("TestCreateTemplate",
                    () => {
                        const templatePath = "templates/template_2.json";
                        const template = new CreateTemplateOptions();
                        template.template = Setup.getTemplate();
                        template.templatePath = templatePath;
                        const templateRequest = new CreateTemplateRequest(template);
                        return TestContext.getTemplateApi().createTemplate(templateRequest).then(
                            (templateResult) => {
                                expect(templateResult).not.to.be.null;
                                expect(templateResult.url).to.have.string("storage/file/templates/template_2.json");
                            });
                    });

                it("TestUpdateTemplate",
                    async () => {
                        const templatePath = "templates/template_1.json";
                        const template = new CreateTemplateOptions();
                        template.template = Setup.getTemplate();
                        template.templatePath = templatePath;
                        const templateRequest = new CreateTemplateRequest(template);
                        var templateResult = await TestContext.getTemplateApi().createTemplate(templateRequest);
                        expect(templateResult).not.to.be.null;
                        return await TestContext.getTemplateApi().createTemplate(templateRequest).then(
                            (updateResult) => {
                                expect(updateResult).not.to.be.null;
                                expect(updateResult.url).to.have.string("storage/file/templates/template_1.json");
                            });
                    });

                it("TestGetTemplate",
                    async () => {
                        const templatePath = "templates/template_1.json";
                        const template = new CreateTemplateOptions();
                        template.template = Setup.getTemplate();
                        template.templatePath = templatePath;
                        const templateRequest = new CreateTemplateRequest(template);
                        var templateResult = await TestContext.getTemplateApi().createTemplate(templateRequest);
                        expect(templateResult).not.to.be.null;

                        const getOptions = new TemplateOptions(
                            {
                                templatePath: "templates/template_1.json"
                            });

                        const getRequest = new GetTemplateRequest(getOptions);
                        return await TestContext.getTemplateApi().getTemplate(getRequest).then((getResult) => {
                            expect(getResult).not.to.be.null;
                            expect(getResult.fields.length).equal(3);
                            expect(getResult.tables.length).equal(1);

                        });
                    });

                it("TestDeleteTemplate",
                    async () => {
                        const templatePath = "templates/template_1.json";
                        const template = new CreateTemplateOptions();
                        template.template = Setup.getTemplate();
                        template.templatePath = templatePath;
                        const templateRequest = new CreateTemplateRequest(template);
                        var templateResult = await TestContext.getTemplateApi().createTemplate(templateRequest);
                        expect(templateResult).not.to.be.null;

                        const deleteOptions = new TemplateOptions(
                            {
                                templatePath: "templates/template_1.json"
                            });

                        const deleteRequest = new GetTemplateRequest(deleteOptions);
                        await TestContext.getTemplateApi().deleteTemplate(deleteRequest);
                    });

                it("TestTemplate_Delete_FileNotFoundResult",
                    () => {
                        const deleteOptions = new TemplateOptions(
                            {
                                templatePath: "notExistTemplate.json"
                            });

                        const deleteRequest = new GetTemplateRequest(deleteOptions);
                        try {
                            TestContext.getTemplateApi().deleteTemplate(deleteRequest)
                        } catch (error) {
                            expect(error.message).equal("Can\'t find file located at \'notExistTemplate.json\'.");
                        }
                    });

                it("TestTemplate_Get_FileNotFoundResult",
                    () => {
                        const getOptions = new TemplateOptions(
                            {
                                templatePath: "notExistTemplate.json"
                            });

                        const getRequest = new GetTemplateRequest(getOptions);
                        try {
                            TestContext.getTemplateApi().getTemplate(getRequest)
                        } catch (error) {
                            expect(error.message).equal("Can\'t find file located at \'notExistTemplate.json\'.");
                        }
                    });
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
        field1.fieldPosition.rectangle = new RectangleModel({ size: new Size({ height: 30, width: 140 }), position: new Point({ x: 0, y: 0 }) });

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
                rectangle: new RectangleModel({ size: new Size({ height: 400, width: 600 }), position: new Point({ x: 0, y: 0 }) })
            })
        });

        options.tables = new Array<Table>(table);
        return options;
    };
}