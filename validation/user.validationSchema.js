import { z } from "zod";

export const createUserSchema = z.object({
	username: z
		.string()
		.min(3, "The username must be at least 3 characters long")
		.max(255, "The username must be at most 255 characters long"),
	email: z.string().email("The email must be a valid email address"),
	password: z
		.string()
		.min(6, "The password must be at least 6 characters long")
		.max(255),
});
