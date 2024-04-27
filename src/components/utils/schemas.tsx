import { FormikHelpers } from "formik";

export interface FormFieldProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (values: { email: string }, formikHelpers: FormikHelpers<{ email: string }>) => void | Promise<any>;
}