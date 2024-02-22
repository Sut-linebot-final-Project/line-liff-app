import { z } from "zod";

enum AddUserValidationError {
  EMAIL_REQUIRED = "กรุณากรอกอีเมล์",
  NAME_REQUIRED = "กรุณากรอกชื่อ",
  EMAIL_INVALID = "อีเมล์ไม่ถูกต้อง",
  PASSWORD_REQUIRED = "กรุณากรอกรหัสผ่าน",
  PASSWORD_INVALID = "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัว",
}

export const TUserForm = z.object({
  email: z
    .string({ required_error: AddUserValidationError.EMAIL_REQUIRED })
    .email({ message: AddUserValidationError.EMAIL_INVALID }),
  password: z
    .string({ required_error: AddUserValidationError.PASSWORD_REQUIRED })
    .min(6, { message: AddUserValidationError.PASSWORD_INVALID }),
  name: z
    .string({ required_error: AddUserValidationError.NAME_REQUIRED }),
  level: z.string(),
});

export type UserForm = z.infer<typeof TUserForm>;
