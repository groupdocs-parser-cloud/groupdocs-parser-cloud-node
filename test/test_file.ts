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
import { FileInfo } from "../src/model";
/**
 * Describes test file
 */
export class TestFile {
        public static PasswordProtected: TestFile = new TestFile("password-protected.docx", "words\\docx\\", "password");
        public static FourPages: TestFile = new TestFile("four-pages.docx", "words\\docx\\");
        public static OnePage: TestFile = new TestFile("one-page.docx", "words\\docx\\");
        public static TemplateDocumentDocx = new TestFile("template-document.docx", "words\\docx\\");
        public static FormattedDocument: TestFile = new TestFile("formatted-document.docx", "words\\docx\\");
        public static EncodingDetection: TestFile = new TestFile("encoding-detection.txt", "words\\txt\\");
        public static Zip: TestFile = new TestFile("docx.zip", "containers\\archive\\");
        public static ZipWithEmailImagePdf: TestFile = new TestFile("zip-eml-jpg-pdf.zip", "containers\\archive\\");
        public static JpegFile: TestFile = new TestFile("document.jpeg", "image\\jpeg\\");
        public static ImageAndAttachment: TestFile = new TestFile("embedded-image-and-attachment.eml", "email\\eml\\");
        public static Pdf: TestFile = new TestFile("template-document.pdf", "pdf\\");
        public static PdfContainer: TestFile = new TestFile("PDF with attachements.pdf", "pdf\\", "password");

        public static NotExist: TestFile = new TestFile("file-not-exist.pdf", "folder\\");


    /**
     * File name
     */
    public fileName: string;
    
    /**
     * Folder where file is located
     */
    public folder: string;

    /**
     * File password
     */
    public password: string;

    /**
     * Returns test file path
     */
    public GetPath() {
        return this.folder + this.fileName;
    }

    /**
     *  Returns FileInfo
     */
    public ToFileInfo()
    {
        let fileInfo = new FileInfo();
        fileInfo.filePath = this.GetPath();
        fileInfo.password = this.password;
        return fileInfo;
    }

    /**
     * Attachment password
     */
    public attachmentPassword: string;

    private constructor(fileName: string, folder: string, password?: string) {
        this.fileName = fileName;
        this.folder = folder;
        this.password = password;
    }

    public static GetTestFiles() {
        return [
                TestFile.PasswordProtected,
                TestFile.FourPages,
                TestFile.OnePage,
                TestFile.TemplateDocumentDocx,
                TestFile.FormattedDocument,
                TestFile.EncodingDetection,
                TestFile.Zip,
                TestFile.ZipWithEmailImagePdf,
                TestFile.JpegFile,
                TestFile.ImageAndAttachment,
                TestFile.Pdf,
                TestFile.PdfContainer
        ];
    }
}
