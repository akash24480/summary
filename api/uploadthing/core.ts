import { createUploadthing } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({pdf: {maxFileSize: '32MB'}}).
    middleware
}