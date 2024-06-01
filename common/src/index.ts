import zod from 'zod'

export const signUpInput = zod.object({
   email : zod.string().email(),
   password : zod.string()
})

export type signUpType = zod.infer<typeof signUpInput>

export const createPostInput = zod.object({
    title : zod.string().optional(),
    content : zod.string().optional()
})

export type createPostType = zod.infer<typeof createPostInput>


export const updatePostInput = zod.object({
    title : zod.string().optional(),
    content : zod.string().optional()
})

export type updatePostType = zod.infer<typeof updatePostInput>