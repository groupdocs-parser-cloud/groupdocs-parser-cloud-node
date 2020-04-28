/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import * as fs from "fs";

import { Configuration } from "../src/configuration";
import { Serializer } from "../src/serializer";
import { ParseApi, InfoApi, TemplateApi, ObjectExistsRequest, UploadFileRequest } from "../src/parser_api";
import { StorageApi } from "../src/parser_api";
import { FileApi } from "../src/parser_api";
import { FolderApi, DeleteFolderRequest } from "../src/parser_api";
import { TestFile } from "./test_file";

let parseApi: ParseApi;
let infoApi: InfoApi;
let templateApi: TemplateApi;
let storageApi: StorageApi;
let fileApi: FileApi;
let folderApi: FolderApi;
var uploaded: boolean = false;
let config: Configuration;

/**
 * Initializes ParserApi
 */
export function getParseApi() {
    if (!parseApi) {
        parseApi = ParseApi.fromConfig(getConfig());
    }

    return parseApi;
}

export function getInfoApi() {
    if (!infoApi) {
        infoApi = InfoApi.fromConfig(getConfig());
    }

    return infoApi;
}

export function getTemplateApi() {
    if (!templateApi) {
        templateApi = TemplateApi.fromConfig(getConfig());
    }

    return templateApi;
}

export function getStorageApi() {
    if (!storageApi) {
        storageApi = StorageApi.fromConfig(getConfig());
    }
    return storageApi;
}

export function getFileApi() {
    if (!fileApi) {
        fileApi = FileApi.fromConfig(getConfig());
    } return fileApi;
}

export function getFolderApi() {
    if (!folderApi) {
        folderApi = FolderApi.fromConfig(getConfig());
    } return folderApi;
}

/**
 * Uploads test files
 */
export function uploadTestFiles() {
    if (uploaded) return;
    getStorageApi();
    const testFiles = TestFile.GetTestFiles();
    testFiles.forEach(async function (file) {
        const response = await storageApi.objectExists(new ObjectExistsRequest(file.GetPath()));
        if (!response.exists) {
            console.log("Uploading: " + file.GetPath());
            let filebuf = getTestFileBuffer(file);
            await fileApi.uploadFile(new UploadFileRequest(file.GetPath(), filebuf));
        }
    });
    uploaded = true;
}

function getConfig() {
    if (!config) {
        const settings = require("./test_settings.json");
        config = new Configuration(settings.AppSid, settings.AppKey);
        config.apiBaseUrl = settings.ApiBaseUrl;
    }

    return config;
}

/**
 * Cleanups temp files
 */
export function cleanupTempFiles() {
    const api = getFolderApi();

    const tempDirs = ["parser"];

    return Promise.all(tempDirs.map((dir) => {
        return deleteTempDir(api, dir);
    }));
}

/**
 * Retrieves test file 
 */
export function getTestFileBuffer(file: TestFile) {
    const testFilesDir = __dirname + "\\test_files";
    const testFilePath = testFilesDir + "\\" + file.GetPath();
    return fs.readFileSync(testFilePath);
}

/**
 * Retrieves test file 
 */
export function serializeIntoBuffer(obj) {
    const serialized = Serializer.serialize(obj, obj.constructor.name);
    const json = JSON.stringify(serialized, undefined, 2);
    return new Buffer(json, "utf-8");
}

const deleteTempDir = (api, dir) => {
    return api.deleteFolder(new DeleteFolderRequest(dir, undefined, true));
};
