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

/**
 * Represents a container item like Zip archive entity, email attachment, PDF Portfolio item and so on.
 */
export class ContainerItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "directory",
            baseName: "directory",
            type: "string",
        },        
        {
            name: "metadata",
            baseName: "metadata",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContainerItem.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the item.
     */
    public name: string;
    
    /**
     * Gets or sets the full path of the item.
     */
    public filePath: string;
    
    /**
     * Gets or sets the directory of the item.
     */
    public directory: string;
    
    /**
     * Gets or sets the collection of metadata items.
     */
    public metadata: { [key: string]: string; };
    
    public constructor(init?: Partial<ContainerItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container item info.
 */
export class ContainerItemInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "relativePath",
            baseName: "relativePath",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContainerItemInfo.attributeTypeMap;
    }

    /**
     * The relative path of the container.
     */
    public relativePath: string;
    
    /**
     * Password for processing password-protected container item.
     */
    public password: string;
    
    public constructor(init?: Partial<ContainerItemInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container result.
 */
export class ContainerResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "containerItems",
            baseName: "containerItems",
            type: "Array<ContainerItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContainerResult.attributeTypeMap;
    }

    /**
     * Gets or sets the collection of a container items like Zip archive entity, email attachment, PDF Portfolio item and so on.
     */
    public containerItems: Array<ContainerItem>;
    
    public constructor(init?: Partial<ContainerResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for rectangle coordinates.
 */
export class Coordinates {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "bottom",
            baseName: "bottom",
            type: "number",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "right",
            baseName: "right",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Coordinates.attributeTypeMap;
    }

    /**
     * Gets or sets the y-coordinate of the top edge of the rectangular area.
     */
    public top: number;
    
    /**
     * Gets or sets the y-coordinate of the bottom edge of the rectangular area.
     */
    public bottom: number;
    
    /**
     * Gets or sets the x-coordinate of the left edge of the rectangular area.
     */
    public left: number;
    
    /**
     * Gets or sets the x-coordinate of the right edge of the rectangular area.
     */
    public right: number;
    
    public constructor(init?: Partial<Coordinates>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Template methods options.
 */
export class CreateTemplateOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "template",
            baseName: "template",
            type: "Template",
        },        
        {
            name: "templatePath",
            baseName: "templatePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CreateTemplateOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the template.
     */
    public template: Template;
    
    /**
     * Gets or sets the template path.
     */
    public templatePath: string;
    
    /**
     * Gets or sets the name of the storage.
     */
    public storageName: string;
    
    public constructor(init?: Partial<CreateTemplateOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides parameters for the table detection algorithms. 
 */
export class DetectorParameters {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "minRowCount",
            baseName: "minRowCount",
            type: "number",
        },        
        {
            name: "minColumnCount",
            baseName: "minColumnCount",
            type: "number",
        },        
        {
            name: "minVerticalSpace",
            baseName: "minVerticalSpace",
            type: "number",
        },        
        {
            name: "hasMergedCells",
            baseName: "hasMergedCells",
            type: "boolean",
        },        
        {
            name: "rectangle",
            baseName: "rectangle",
            type: "Rectangle",
        },        
        {
            name: "verticalSeparators",
            baseName: "verticalSeparators",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DetectorParameters.attributeTypeMap;
    }

    /**
     * Gets or sets the minimum number of the table rows.
     */
    public minRowCount: number;
    
    /**
     * Gets or sets the minimum number of the table columns.
     */
    public minColumnCount: number;
    
    /**
     * Gets or sets the minimum space between the table columns.
     */
    public minVerticalSpace: number;
    
    /**
     * Gets or sets the value that indicates whether the table has merged cells.
     */
    public hasMergedCells: boolean;
    
    /**
     * Gets or sets the rectangular area that contains the table.
     */
    public rectangle: Rectangle;
    
    /**
     * Gets or sets the table columns separators.
     */
    public verticalSeparators: Array<number>;
    
    public constructor(init?: Partial<DetectorParameters>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Field of document template
 */
export class Field {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldName",
            baseName: "fieldName",
            type: "string",
        },        
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "fieldPosition",
            baseName: "fieldPosition",
            type: "FieldPosition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Field.attributeTypeMap;
    }

    /**
     * A unique template field name.
     */
    public fieldName: string;
    
    /**
     * The page index. An integer value that represents the index of the page where the template item is located; null if the template item is located on any page.
     */
    public pageIndex: number;
    
    /**
     * Defines the way how to find the field on a page.
     */
    public fieldPosition: FieldPosition;
    
    public constructor(init?: Partial<Field>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for document field data.
 */
export class FieldData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "pageArea",
            baseName: "pageArea",
            type: "PageArea",
        },        
        {
            name: "linkedField",
            baseName: "linkedField",
            type: "FieldData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldData.attributeTypeMap;
    }

    /**
     * Gets or sets the field name.
     */
    public name: string;
    
    /**
     * Gets or sets the index of the page.
     */
    public pageIndex: number;
    
    /**
     * Gets or sets the value of the field.
     */
    public pageArea: PageArea;
    
    /**
     * Gets or sets the linked data field.
     */
    public linkedField: FieldData;
    
    public constructor(init?: Partial<FieldData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Field position class.
 */
export class FieldPosition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldPositionType",
            baseName: "fieldPositionType",
            type: "string",
        },        
        {
            name: "rectangle",
            baseName: "rectangle",
            type: "Rectangle",
        },        
        {
            name: "regex",
            baseName: "regex",
            type: "string",
        },        
        {
            name: "matchCase",
            baseName: "matchCase",
            type: "boolean",
        },        
        {
            name: "linkedFieldName",
            baseName: "linkedFieldName",
            type: "string",
        },        
        {
            name: "isLeftLinked",
            baseName: "isLeftLinked",
            type: "boolean",
        },        
        {
            name: "isRightLinked",
            baseName: "isRightLinked",
            type: "boolean",
        },        
        {
            name: "isTopLinked",
            baseName: "isTopLinked",
            type: "boolean",
        },        
        {
            name: "isBottomLinked",
            baseName: "isBottomLinked",
            type: "boolean",
        },        
        {
            name: "searchArea",
            baseName: "searchArea",
            type: "Size",
        },        
        {
            name: "autoScale",
            baseName: "autoScale",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldPosition.attributeTypeMap;
    }

    /**
     * Provides a template field position.
     */
    public fieldPositionType: string;
    
    /**
     * Rectangular area on the page that bounds the field value.
     */
    public rectangle: Rectangle;
    
    /**
     * Gets or sets the regular expression.
     */
    public regex: string;
    
    /**
     * Gets or sets the value that indicates whether a text case isn't ignored.
     */
    public matchCase: boolean;
    
    /**
     * Gets or sets the name of the linked field.
     */
    public linkedFieldName: string;
    
    /**
     * Gets or sets the value that indicates whether a field is searched by the left from the linked field.
     */
    public isLeftLinked: boolean;
    
    /**
     * Gets or sets a value indicating whether this instance is right linked.
     */
    public isRightLinked: boolean;
    
    /**
     * Gets or sets a value indicating whether this instance is top linked.
     */
    public isTopLinked: boolean;
    
    /**
     * Gets or sets a value indicating whether this instance is bottom linked.
     */
    public isBottomLinked: boolean;
    
    /**
     * Gets or sets the size of the area where a field is searched.
     */
    public searchArea: Size;
    
    /**
     * Gets or sets Gets the value that indicates whether SearchArea is scaled by the linked field size.
     */
    public autoScale: boolean;
    
    public constructor(init?: Partial<FieldPosition>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File info
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * File path in storage
     */
    public filePath: string;
    
    /**
     * Storage name
     */
    public storageName: string;
    
    /**
     * Password to open file
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents the file type. 
 */
export class FileType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileType.attributeTypeMap;
    }

    /**
     * Gets or sets the file type name e.g. \"Microsoft Word Document\".
     */
    public fileFormat: string;
    
    /**
     * Gets or sets the filename suffix (including the period \".\") e.g. \".doc\".
     */
    public extension: string;
    
    public constructor(init?: Partial<FileType>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File-format
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File extension
     */
    public extension: string;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides the options which are used for formatted text extraction.
 */
export class FormattedTextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mode",
            baseName: "mode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormattedTextOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the formatted text extraction mode.
     */
    public mode: string;
    
    public constructor(init?: Partial<FormattedTextOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents an image.
 */
export class Image {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "path",
            baseName: "path",
            type: "string",
        },        
        {
            name: "downloadUrl",
            baseName: "downloadUrl",
            type: "string",
        },        
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "rotation",
            baseName: "rotation",
            type: "number",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "rectangle",
            baseName: "rectangle",
            type: "Rectangle",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Image.attributeTypeMap;
    }

    /**
     * Gets or sets The path of the image, located in the storage.
     */
    public path: string;
    
    /**
     * Gets or sets the image download URL.
     */
    public downloadUrl: string;
    
    /**
     * Gets or sets the index of the page.
     */
    public pageIndex: number;
    
    /**
     * Gets or sets the rotation of the image in degrees.
     */
    public rotation: number;
    
    /**
     * Gets or sets the image file format.
     */
    public fileFormat: string;
    
    /**
     * Gets or sets the rectangle area of the image.
     */
    public rectangle: Rectangle;
    
    public constructor(init?: Partial<Image>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents page object with image collection.
 */
export class ImagePage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "images",
            baseName: "images",
            type: "Array<Image>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ImagePage.attributeTypeMap;
    }

    /**
     * The index of the page.
     */
    public pageIndex: number;
    
    /**
     * collection of the page images.
     */
    public images: Array<Image>;
    
    public constructor(init?: Partial<ImagePage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Images result.
 */
export class ImagesResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "images",
            baseName: "images",
            type: "Array<Image>",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<ImagePage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ImagesResult.attributeTypeMap;
    }

    /**
     * Gets or sets a collection of images.
     */
    public images: Array<Image>;
    
    /**
     * Collection of the extracted pages with images.
     */
    public pages: Array<ImagePage>;
    
    public constructor(init?: Partial<ImagesResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Info result.
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileType",
            baseName: "fileType",
            type: "FileType",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "pageCount",
            baseName: "pageCount",
            type: "number",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * Gets or sets the type of the file.
     */
    public fileType: FileType;
    
    /**
     * Gets or sets the size of the document in bytes.
     */
    public size: number;
    
    /**
     * Gets or sets the total number of document pages.
     */
    public pageCount: number;
    
    /**
     * Gets or sets the encoding.
     */
    public encoding: string;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The document page information such as page index and page size.
 */
export class Page {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "index",
            type: "number",
        },        
        {
            name: "size",
            baseName: "size",
            type: "Size",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Page.attributeTypeMap;
    }

    /**
     * Gets or sets the index of the page.
     */
    public index: number;
    
    /**
     * Gets or sets the size of the page.
     */
    public size: Size;
    
    public constructor(init?: Partial<Page>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for document page area.
 */
export class PageArea {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rectangle",
            baseName: "rectangle",
            type: "Rectangle",
        },        
        {
            name: "page",
            baseName: "page",
            type: "Page",
        },        
        {
            name: "pageTextArea",
            baseName: "pageTextArea",
            type: "PageTextArea",
        },        
        {
            name: "pageTableArea",
            baseName: "pageTableArea",
            type: "PageTableArea",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageArea.attributeTypeMap;
    }

    /**
     * Gets or sets the rectangular area.
     */
    public rectangle: Rectangle;
    
    /**
     * Gets or sets the document page information such as page index and page size.
     */
    public page: Page;
    
    /**
     * Gets or sets the text area. Represents a page text area which is used to represent a text value in the parsing by template functionality.
     */
    public pageTextArea: PageTextArea;
    
    /**
     * Gets or sets the table area. Represents a table page area which is used to represent a table in the parsing by template functionality.
     */
    public pageTableArea: PageTableArea;
    
    public constructor(init?: Partial<PageArea>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a table page area which is used to represent a table in the parsing by template functionality.
 */
export class PageTableArea {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rowCount",
            baseName: "rowCount",
            type: "number",
        },        
        {
            name: "columnCount",
            baseName: "columnCount",
            type: "number",
        },        
        {
            name: "pageTableAreaCells",
            baseName: "pageTableAreaCells",
            type: "Array<PageTableAreaCell>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageTableArea.attributeTypeMap;
    }

    /**
     * Gets or sets the total number of the table rows.
     */
    public rowCount: number;
    
    /**
     * Gets or sets the total number of the table columns.
     */
    public columnCount: number;
    
    /**
     * Gets or sets the collection of table area cell.
     */
    public pageTableAreaCells: Array<PageTableAreaCell>;
    
    public constructor(init?: Partial<PageTableArea>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a table cell.
 */
export class PageTableAreaCell {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "columnIndex",
            baseName: "columnIndex",
            type: "number",
        },        
        {
            name: "columnSpan",
            baseName: "columnSpan",
            type: "number",
        },        
        {
            name: "pageArea",
            baseName: "pageArea",
            type: "PageArea",
        },        
        {
            name: "rowIndex",
            baseName: "rowIndex",
            type: "number",
        },        
        {
            name: "rowSpan",
            baseName: "rowSpan",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageTableAreaCell.attributeTypeMap;
    }

    /**
     * Gets or sets the index of the column.
     */
    public columnIndex: number;
    
    /**
     * Gets or sets the total number of columns that contain the table cell.
     */
    public columnSpan: number;
    
    /**
     * Gets or sets the table cell value.
     */
    public pageArea: PageArea;
    
    /**
     * Gets or sets the index of the row.
     */
    public rowIndex: number;
    
    /**
     * Gets or sets the total number of rows that contain the table cell.
     */
    public rowSpan: number;
    
    public constructor(init?: Partial<PageTableAreaCell>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a page text area which is used to represent a text value in the parsing by template functionality.
 */
export class PageTextArea {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "baseLine",
            baseName: "baseLine",
            type: "number",
        },        
        {
            name: "areas",
            baseName: "areas",
            type: "Array<PageTextArea>",
        },        
        {
            name: "textStyle",
            baseName: "textStyle",
            type: "TextStyle",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageTextArea.attributeTypeMap;
    }

    /**
     * Gets or sets the text.
     */
    public text: string;
    
    /**
     * Gets or sets the base line.
     */
    public baseLine: number;
    
    /**
     * Gets or sets the collection of child text page areas.
     */
    public areas: Array<PageTextArea>;
    
    /**
     * Gets or sets the text style such as font size, font name an so on.
     */
    public textStyle: TextStyle;
    
    public constructor(init?: Partial<PageTextArea>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Parse result.
 */
export class ParseResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "count",
            baseName: "count",
            type: "number",
        },        
        {
            name: "fieldsData",
            baseName: "fieldsData",
            type: "Array<FieldData>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ParseResult.attributeTypeMap;
    }

    /**
     * Gets or sets the total number of the fields data.
     */
    public count: number;
    
    /**
     * Collection of the data fields.
     */
    public fieldsData: Array<FieldData>;
    
    public constructor(init?: Partial<ParseResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base options class.
 */
export class ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "containerItemInfo",
            baseName: "containerItemInfo",
            type: "ContainerItemInfo",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ParserOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the file information.
     */
    public fileInfo: FileInfo;
    
    /**
     * Gets or sets the container item information.
     */
    public containerItemInfo: ContainerItemInfo;
    
    public constructor(init?: Partial<ParserOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for rectangle position model.
 */
export class Point {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Point.attributeTypeMap;
    }

    /**
     * Gets or sets the x-coordinate.
     */
    public x: number;
    
    /**
     * Gets or sets the y-coordinate.
     */
    public y: number;
    
    public constructor(init?: Partial<Point>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rectangular area on the page.
 */
export class Rectangle {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "position",
            baseName: "position",
            type: "Point",
        },        
        {
            name: "size",
            baseName: "size",
            type: "Size",
        },        
        {
            name: "coordinates",
            baseName: "coordinates",
            type: "Coordinates",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Rectangle.attributeTypeMap;
    }

    /**
     * Gets the coordinates of the upper-left corner of the rectangular area.
     */
    public position: Point;
    
    /**
     * Gets or sets the size of the rectangle.
     */
    public size: Size;
    
    /**
     * Gets or sets the coordinates.
     */
    public coordinates: Coordinates;
    
    public constructor(init?: Partial<Rectangle>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a size of rectangular area.
 */
export class Size {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Size.attributeTypeMap;
    }

    /**
     * Gets or sets the height.
     */
    public height: number;
    
    /**
     * Gets or sets the width.
     */
    public width: number;
    
    public constructor(init?: Partial<Size>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Document template table
 */
export class Table {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tableName",
            baseName: "tableName",
            type: "string",
        },        
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "detectorParameters",
            baseName: "detectorParameters",
            type: "DetectorParameters",
        },        
        {
            name: "tableLayout",
            baseName: "tableLayout",
            type: "TableLayout",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Table.attributeTypeMap;
    }

    /**
     * Gets or sets a unique template table name.
     */
    public tableName: string;
    
    /**
     * The page index. An integer value that represents the index of the page where the template item is located; null if the template item is located on any page.
     */
    public pageIndex: number;
    
    /**
     * Gets or sets the detector parameters. Provides parameters for the table detection algorithms. 
     */
    public detectorParameters: DetectorParameters;
    
    /**
     * Gets or sets the table layout. Provides the template table layout which is used by Table to define table position.
     */
    public tableLayout: TableLayout;
    
    public constructor(init?: Partial<Table>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides the template table layout which is used by Table to define table position.
 */
export class TableLayout {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "verticalSeparators",
            baseName: "verticalSeparators",
            type: "Array<number>",
        },        
        {
            name: "horizontalSeparators",
            baseName: "horizontalSeparators",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableLayout.attributeTypeMap;
    }

    /**
     * Gets or sets the table columns separators.
     */
    public verticalSeparators: Array<number>;
    
    /**
     * Gets or sets the table rows separators.
     */
    public horizontalSeparators: Array<number>;
    
    public constructor(init?: Partial<TableLayout>) {
        
        Object.assign(this, init);
    }        
}

/**
 * User-generated template to extract metadata from the document.
 */
export class Template {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fields",
            baseName: "fields",
            type: "Array<Field>",
        },        
        {
            name: "tables",
            baseName: "tables",
            type: "Array<Table>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Template.attributeTypeMap;
    }

    /**
     * Template fields.
     */
    public fields: Array<Field>;
    
    /**
     * Template tables.
     */
    public tables: Array<Table>;
    
    public constructor(init?: Partial<Template>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Template methods options.
 */
export class TemplateOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "templatePath",
            baseName: "templatePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TemplateOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the template path.
     */
    public templatePath: string;
    
    /**
     * Gets or sets the name of the storage.
     */
    public storageName: string;
    
    public constructor(init?: Partial<TemplateOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Document template result.
 */
export class TemplateResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "url",
            baseName: "url",
            type: "string",
        },        
        {
            name: "templatePath",
            baseName: "templatePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TemplateResult.attributeTypeMap;
    }

    /**
     * Gets or sets the template download URL.
     */
    public url: string;
    
    /**
     * Gets or sets the path of the template, located in the storage.
     */
    public templatePath: string;
    
    public constructor(init?: Partial<TemplateResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Extracted text page class.
 */
export class TextPage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageIndex",
            baseName: "pageIndex",
            type: "number",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextPage.attributeTypeMap;
    }

    /**
     * Gets or sets the pageIndex.
     */
    public pageIndex: number;
    
    /**
     * Gets or sets the text.
     */
    public text: string;
    
    public constructor(init?: Partial<TextPage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The result od text extraction.
 */
export class TextResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pages",
            baseName: "pages",
            type: "Array<TextPage>",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextResult.attributeTypeMap;
    }

    /**
     * Gets or sets the pages.
     */
    public pages: Array<TextPage>;
    
    /**
     * Gets or sets the text.
     */
    public text: string;
    
    public constructor(init?: Partial<TextResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The text style such as font size, font name an so on.             
 */
export class TextStyle {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fontName",
            baseName: "fontName",
            type: "string",
        },        
        {
            name: "fontSize",
            baseName: "fontSize",
            type: "number",
        },        
        {
            name: "isBold",
            baseName: "isBold",
            type: "boolean",
        },        
        {
            name: "isItalic",
            baseName: "isItalic",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextStyle.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the font.
     */
    public fontName: string;
    
    /**
     * Gets or sets the size of the font.
     */
    public fontSize: number;
    
    /**
     * Gets or sets the value that indicates whether the font is bold.
     */
    public isBold: boolean;
    
    /**
     * Gets or sets the value that indicates whether the font is italic.
     */
    public isItalic: boolean;
    
    /**
     * Gets or sets the style name.
     */
    public name: string;
    
    public constructor(init?: Partial<TextStyle>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container options.
 */
export class ContainerOptions extends ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ContainerOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<ContainerOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Image options.
 */
export class ImagesOptions extends ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        },        
        {
            name: "startPageNumber",
            baseName: "startPageNumber",
            type: "number",
        },        
        {
            name: "countPagesToExtract",
            baseName: "countPagesToExtract",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImagesOptions.attributeTypeMap);
    }

    /**
     * Gets or sets the output path for extracted images.
     */
    public outputPath: string;
    
    /**
     * Gets or sets the zero-based start page index.
     */
    public startPageNumber: number;
    
    /**
     * Gets or sets the number of pages to extract.
     */
    public countPagesToExtract: number;
    
    public constructor(init?: Partial<ImagesOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Info options
 */
export class InfoOptions extends ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InfoOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<InfoOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Parse options.
 */
export class ParseOptions extends ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "template",
            baseName: "template",
            type: "Template",
        },        
        {
            name: "templatePath",
            baseName: "templatePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParseOptions.attributeTypeMap);
    }

    /**
     * User-generated template to extract metadata from the document.
     */
    public template: Template;
    
    /**
     * The path of the file, located in the storage, which contains a user-generated template to parse data. Is used when the Template parameter is not provided.
     */
    public templatePath: string;
    
    public constructor(init?: Partial<ParseOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Extract options.
 */
export class TextOptions extends ParserOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formattedTextOptions",
            baseName: "formattedTextOptions",
            type: "FormattedTextOptions",
        },        
        {
            name: "startPageNumber",
            baseName: "startPageNumber",
            type: "number",
        },        
        {
            name: "countPagesToExtract",
            baseName: "countPagesToExtract",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextOptions.attributeTypeMap);
    }

    /**
     * Gets or sets the options which are used for formatted text extraction.
     */
    public formattedTextOptions: FormattedTextOptions;
    
    /**
     * Gets or sets the zero-based start page index.
     */
    public startPageNumber: number;
    
    /**
     * Gets or sets the number of pages to extract.
     */
    public countPagesToExtract: number;
    
    public constructor(init?: Partial<TextOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            ContainerItem,
            ContainerItemInfo,
            ContainerResult,
            Coordinates,
            CreateTemplateOptions,
            DetectorParameters,
            DiscUsage,
            ErrorDetails,
            Field,
            FieldData,
            FieldPosition,
            FileInfo,
            FileType,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            FormattedTextOptions,
            Image,
            ImagePage,
            ImagesResult,
            InfoResult,
            ModelError,
            ObjectExist,
            Page,
            PageArea,
            PageTableArea,
            PageTableAreaCell,
            PageTextArea,
            ParseResult,
            ParserOptions,
            Point,
            Rectangle,
            Size,
            StorageExist,
            StorageFile,
            Table,
            TableLayout,
            Template,
            TemplateOptions,
            TemplateResult,
            TextPage,
            TextResult,
            TextStyle,
            ContainerOptions,
            FileVersion,
            ImagesOptions,
            InfoOptions,
            ParseOptions,
            TextOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for Container operation.
 */
export class ContainerRequest {
    /**
     * Container options.
     */
    public options: ContainerOptions;
    
    public constructor(options: ContainerOptions) {        
        this.options = options;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * Info options.
     */
    public options: InfoOptions;
    
    public constructor(options: InfoOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Images operation.
 */
export class ImagesRequest {
    /**
     * Extract image options.
     */
    public options: ImagesOptions;
    
    public constructor(options: ImagesOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Parse operation.
 */
export class ParseRequest {
    /**
     * Parse options.
     */
    public options: ParseOptions;
    
    public constructor(options: ParseOptions) {        
        this.options = options;
    }
}

/**
 * Request model for Text operation.
 */
export class TextRequest {
    /**
     * Extract text options.
     */
    public options: TextOptions;
    
    public constructor(options: TextOptions) {        
        this.options = options;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for CreateTemplate operation.
 */
export class CreateTemplateRequest {
    /**
     * Create template options.
     */
    public options: CreateTemplateOptions;
    
    public constructor(options: CreateTemplateOptions) {        
        this.options = options;
    }
}

/**
 * Request model for DeleteTemplate operation.
 */
export class DeleteTemplateRequest {
    /**
     * Delete template options.
     */
    public options: TemplateOptions;
    
    public constructor(options: TemplateOptions) {        
        this.options = options;
    }
}

/**
 * Request model for GetTemplate operation.
 */
export class GetTemplateRequest {
    /**
     * Retrieve template options.
     */
    public options: TemplateOptions;
    
    public constructor(options: TemplateOptions) {        
        this.options = options;
    }
}
