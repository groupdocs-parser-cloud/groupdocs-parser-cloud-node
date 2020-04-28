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

import http = require("http");
import request = require("request");

import { addQueryParameterToUrl, invokeApiMethod } from "./api_client";
import { Configuration } from "./configuration";
import * as model from "./model";
import { Serializer } from "./serializer";

export * from "./model";
export * from "./configuration";

/**
 * GroupDocs.Parser Cloud API 
 */
export class FileApi {
    
    /**
     * Creates new instance of FileApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new FileApi(config);
    }

    /**
     * Creates new instance of FileApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new FileApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.FilesUploadResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = {                
                value: requestObj.file,
                options: {
                  filename: "file.name",
                },
            };
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Parser Cloud API 
 */
export class FolderApi {
    
    /**
     * Creates new instance of FolderApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new FolderApi(config);
    }

    /**
     * Creates new instance of FolderApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new FolderApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.FilesList> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FilesList");
        return Promise.resolve(result);
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

}
/**
 * GroupDocs.Parser Cloud API 
 */
export class InfoApi {
    
    /**
     * Creates new instance of InfoApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new InfoApi(config);
    }

    /**
     * Creates new instance of InfoApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new InfoApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Retrieve a container items (relative paths) from document to work with formats that contain attachments, ZIP archives etc.
     * @param requestObj contains request parameters
     */
    public async container(requestObj: model.ContainerRequest): Promise<model.ContainerResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling container.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/container";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling container.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "ContainerOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ContainerResult");
        return Promise.resolve(result);
    }

    /**
     * Retrieve information about document.
     * @param requestObj contains request parameters
     */
    public async getInfo(requestObj: model.GetInfoRequest): Promise<model.InfoResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getInfo.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/info";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling getInfo.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "InfoOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "InfoResult");
        return Promise.resolve(result);
    }

    /**
     * List supported file formats.
     * @param requestObj contains request parameters
     */
    public async getSupportedFileFormats(): Promise<model.FormatsResult> {

        const localVarPath = this.configuration.getServerUrl() + "/parser/formats";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FormatsResult");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Parser Cloud API 
 */
export class ParseApi {
    
    /**
     * Creates new instance of ParseApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new ParseApi(config);
    }

    /**
     * Creates new instance of ParseApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new ParseApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Extract images from document.
     * @param requestObj contains request parameters
     */
    public async images(requestObj: model.ImagesRequest): Promise<model.ImagesResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling images.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/images";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling images.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "ImagesOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagesResult");
        return Promise.resolve(result);
    }

    /**
     * Extract document data by a predefined template.
     * @param requestObj contains request parameters
     */
    public async parse(requestObj: model.ParseRequest): Promise<model.ParseResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling parse.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/parse";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling parse.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "ParseOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ParseResult");
        return Promise.resolve(result);
    }

    /**
     * Extract text from document.
     * @param requestObj contains request parameters
     */
    public async text(requestObj: model.TextRequest): Promise<model.TextResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling text.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/text";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling text.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "TextOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "TextResult");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Parser Cloud API 
 */
export class StorageApi {
    
    /**
     * Creates new instance of StorageApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new StorageApi(config);
    }

    /**
     * Creates new instance of StorageApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new StorageApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<model.DiscUsage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve(result);
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<model.FileVersions> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FileVersions");
        return Promise.resolve(result);
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<model.ObjectExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/parser/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve(result);
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<model.StorageExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "StorageExist");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Parser Cloud API 
 */
export class TemplateApi {
    
    /**
     * Creates new instance of TemplateApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new TemplateApi(config);
    }

    /**
     * Creates new instance of TemplateApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new TemplateApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Create or update document template.
     * @param requestObj contains request parameters
     */
    public async createTemplate(requestObj: model.CreateTemplateRequest): Promise<model.TemplateResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createTemplate.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/template";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling createTemplate.');
        }
        
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "CreateTemplateOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "TemplateResult");
        return Promise.resolve(result);
    }

    /**
     * Delete document template.
     * @param requestObj contains request parameters
     */
    public async deleteTemplate(requestObj: model.DeleteTemplateRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTemplate.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/template";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling deleteTemplate.');
        }
        
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "TemplateOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Retrieve document template.
     * @param requestObj contains request parameters
     */
    public async getTemplate(requestObj: model.GetTemplateRequest): Promise<model.Template> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTemplate.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/parser/template";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling getTemplate.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "TemplateOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Template");
        return Promise.resolve(result);
    }

}
