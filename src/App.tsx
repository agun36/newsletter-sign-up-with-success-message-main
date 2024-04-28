import { useState, useEffect } from 'react';
import './App.scss';
import { FormField } from './components/formField/formField';
import { Header } from './components/header/header';
import { NewsLetterLayout } from './components/newsletter/newsletterLayout';
import { Updated } from './components/updated/updated';
import { ThankYou } from './components/thankYou/thankyou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({ email: "" }); // State for form input
  const [submittedValues, setSubmittedValues] = useState({ email: "" }); // State for submitted values

  const handleFormSubmit = (values: { email: string }, { resetForm }: { resetForm: () => void }) => {
    setSubmittedValues(values); // Set submitted values
    setIsSubmitted(true);
    setFormValues({ email: "" }); // Reset form input
    resetForm();
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitted]);

  if (isSubmitted) {
    return <ThankYou initialValues={submittedValues} />; // Pass submitted values to ThankYou
  }

  return (
    <NewsLetterLayout>
      <div className="col-md-6 order-md-2 ">
        <Header />
      </div>
      <div className="col-md-6 order-md-1 mt-5 mt-md-0 p-5">
        <Updated />
        <FormField onSubmit={handleFormSubmit} initialValues={formValues} />
      </div>
    </NewsLetterLayout>
  );
}

export default App;