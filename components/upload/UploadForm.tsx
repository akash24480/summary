'use client'

import UploadFormInput from "./uploadFormInput";
import { z } from "zod"

const schema = z.object({
    file:z.instanceof(File, {message: 'Invalid File'}).
    refine((file) => file.size <= 20 * 1024 * 1024, 
        'File size must be less than 20MB',
    )
    .refine((file) => file.type.startsWith('application/pdf'), 
        'File must be a PDF'
    )
})

export default function(){
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;
        // Validating the fields
        const validatedFields = schema.safeParse({file});
        if(!validatedFields.success){
            console.log(
                validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file'
            );
            return;
        }

        console.log(validatedFields)
        //Schema Validation 
        // Upload the file to upload thing
        // Parse the pdf using the lagnchain
        // summarize the pdf using the AI
        // save the summary to the database
        // redirect to the [id] summary page
    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit = {handleSubmit} />
        </div>
    )
}