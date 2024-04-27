import { useState, useEffect } from 'react';
import './App.scss';
import { FormField } from './components/formField/formField';
import { Header } from './components/header/header';
import { NewsLetterLayout } from './components/newsletter/newsletterLayout';
import { Updated } from './components/updated/updated';
import { ThankYou } from './components/thankYou/thankyou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitted]);

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <NewsLetterLayout>
      <div className="col-md-6 order-md-2 ">
        <Header />
      </div>
      <div className="col-md-6 order-md-1 mt-5 mt-md-0 p-5">
        <Updated />
        <FormField onSubmit={handleFormSubmit} />
      </div>
    </NewsLetterLayout>
  );
}

export default App;