import { z } from "zod";

const memberschema = z.object({
  name: z.string()
    .min(3, "Name must contain at least 3 characters"),

  email: z.string()
    .email("Please enter a valid email"),

  phone: z.string()
    .regex(/^[0-9]{10}$/, "Phone number must contain 10 digits"),

  membership: z.string()
    .min(1, "Please select membership type")
});

export default memberschema;