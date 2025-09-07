const { z } = require("zod");
// Creating  an object shema

const signupSchema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least of 3 chars." })
    .max(255, { message: "name must be at least of 255 chars." }),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "invalid email"})
    .min(3, { message: "Email must be at least of 3 chars." })
    .max(255, { message: "Email must be at least of 255 chars." }),
    phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be at least of 10 chars." })
    .max(20, { message: "phone must be at least of 20 chars." }),
    password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be at least of 3 chars." })
    .max(1024,  "password can't be greater of 1024 chars." ),
});

module.exports = signupSchema;
