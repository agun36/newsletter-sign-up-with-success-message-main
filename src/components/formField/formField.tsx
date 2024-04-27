import { useRef } from "react";
import "./styles.scss";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormFieldProps } from "../utils/schemas";

export const FormField = ({ onSubmit }: FormFieldProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formRef = useRef<any>();

    const initialValues = {
        email: "",
    };
    const validationSchema = yup.object().shape({
        email: yup.string().label("Email").required(),
    });

    return (
        <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur={false}
        >
            {({ handleSubmit, errors, touched }) => {
                return (
                    <Form onSubmit={handleSubmit} className="row mt-5 justify-content-center">
                        <div className=" col-md-12 form-name row  ">
                            <div className="d-flex justify-content-between align-items-center">
                                <label htmlFor="email" className="label-name text-grey-001">
                                    Email
                                </label>
                                <ErrorMessage name="email" component="div" className="text-danger" />
                                {
                                    touched.email && !errors.email && <span className="text-success">Looks good!</span>
                                }
                            </div>
                            <Field
                                className={` p-5 mt-4 mb-4 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email && !errors.email ? 'is-valid' : ''}`} type="email" name="email"
                                placeholder="pVfKU@example.com"
                            />

                        </div>
                        <div className="form-group col-md-12">
                            <button type="submit" className="p-5 btn bg-grey-000 text-white-000 font-size-medium w-100">
                                subscribe to monthly newsletter
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}