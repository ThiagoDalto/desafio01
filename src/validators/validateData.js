import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup.string().required("Informe o valor da transação"),
  installments: yup
    .number()
    .required()
    .typeError("Informe o número de parcelas"),
  mdr: yup
    .number()
    .required()
    .typeError("Informe a taxa cobrada pela transação"),
  days: yup
    .array()
    .of(yup.number().max(10))
    .notRequired()
    .nullable()
    .typeError(
      'Error validating request body. "days" must contain less than or equal to 10 items.'
    ),
});
