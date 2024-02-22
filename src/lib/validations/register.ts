import { z } from "zod";

enum RegisterValidationError {
  EMAIL_REQUIRED = "กรุณากรอกอีเมล์",
  EMAIL_INVALID = "อีเมล์ไม่ถูกต้อง",
  NAME_PREFIX_REQUIRED = "กรุณากรอกคำนำหน้าชื่อ",
  FIRST_NAME_REQUIRED = "กรุณากรอกชื่อ",
  LAST_NAME_REQUIRED = "กรุณากรอกนามสกุล",
  PHONE_NUMBER_REQUIRED = "กรุณากรอกหมายเลขโทรศัพท์",
  PHONE_NUMBER_INVALID = "หมายเลขโทรศัพท์ไม่ถูกต้อง",
  DATE_OF_BIRTH_REQUIRED = "กรุณากรอกวันเดือนปีเกิด",
  ADDRESS_REQUIRED = "กรุณากรอกที่อยู่",
  GENDER_REQUIRED = "กรุณากรอกเพศ",
  ID_CARD_REQUIRED = "กรุณากรอกเลขบัตรประชาชน",
  ID_CARD_INVALID = "เลขบัตรประชาชนไม่ถูกต้อง",
  LASOR_CODE_REQUIRED = "กรุณากรอกเลขหลังบัตรประชาชน",
}

export const TRegisterForm = z.object({
  email: z
    .string({ required_error: RegisterValidationError.EMAIL_REQUIRED })
    .email({ message: RegisterValidationError.EMAIL_INVALID }),
  namePrefix: z
    .string({
      required_error: RegisterValidationError.NAME_PREFIX_REQUIRED,
    })
    .min(1, { message: RegisterValidationError.NAME_PREFIX_REQUIRED }),
  firstName: z
    .string({
      required_error: RegisterValidationError.FIRST_NAME_REQUIRED,
    })
    .min(1, { message: RegisterValidationError.FIRST_NAME_REQUIRED }),
  lastName: z
    .string({
      required_error: RegisterValidationError.LAST_NAME_REQUIRED,
    })
    .min(1, { message: RegisterValidationError.LAST_NAME_REQUIRED }),
  phoneNumber: z
    .string({
      required_error: RegisterValidationError.PHONE_NUMBER_REQUIRED,
    })
    .regex(/^\d+$/, { message: RegisterValidationError.PHONE_NUMBER_INVALID }),
  dateOfBirth: z.coerce.date({
    required_error: RegisterValidationError.DATE_OF_BIRTH_REQUIRED,
  }),
  address: z
    .string({
      required_error: RegisterValidationError.ADDRESS_REQUIRED,
    })
    .min(1, { message: RegisterValidationError.ADDRESS_REQUIRED }),
  gender: z.string({ required_error: RegisterValidationError.GENDER_REQUIRED }),
  idCard: z
    .string({ required_error: RegisterValidationError.ID_CARD_REQUIRED })
    .length(13, { message: RegisterValidationError.ID_CARD_INVALID }),
  lasorCode: z
    .string({ required_error: RegisterValidationError.LASOR_CODE_REQUIRED })
    .min(1, { message: RegisterValidationError.LASOR_CODE_REQUIRED }),
});

export type RegisterForm = z.infer<typeof TRegisterForm>;
