import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli E-mail adresi giriniz")
    .required("E-mail adresi zorunlu"),
  age: yup
    .number()
    .positive("Pozitif bir deger giriniz")
    .integer("Tam sayi giriniz")
    .required("Yas alani zorunlu"),
  password: yup.string().required("Sifre alani zorunlu"),
  confirmPassword: yup
    .string()
    .required("Sifre tekrari zorunlu")
    .oneOf([yup.ref("password", yup.password)], "Sifreler eslesmiyor"),
  term: yup.boolean().required("Lutfem kutucugu onaylayiniz"),
});
