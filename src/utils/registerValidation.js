import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Campo obrigatório")
    .min(5, "o Nome precisa ter pelo menos 5 carcteres"),
  userName: Yup.string()
    .required("Campo obrigatório")
    .min(5, "O usuario precisa ter pelo menos 5 carcteres"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  confirmEmail: Yup.string()
    .email("E-mail inválido")
    .oneOf([Yup.ref("email")], "Os e-mails são diferentes")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório").min(5, 'A senha precisa ter pelo menos 8 carcteres'),
});
