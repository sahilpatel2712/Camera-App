/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

export const ContactValidation = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string()
    .length(10, 'Enter Valid Phone Number ')
    .required('Required'),
});
