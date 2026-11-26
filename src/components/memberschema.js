import { z } from "zod";

const memberschema = z.object({
  name: z.string().min(3, "Name must contain at least 3 letters"),
  email: z.string().email("Enter valid email"),
  phone: z.string().min(10, "Phone number must contain 10 digits"),
  membership: z.string().min(1, "Please select membership")
});

export default memberschema;