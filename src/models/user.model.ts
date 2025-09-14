import {z} from "zod"

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1)
})

export const UpdateUserSchema = z.object({
  email: z.string().email().optional(), 
  name: z.string().min(1).optional(),
})

export type CreateUserSchema = z.infer<typeof CreateUserSchema>
export type UpdateUserSchema = z.infer<typeof UpdateUserSchema>