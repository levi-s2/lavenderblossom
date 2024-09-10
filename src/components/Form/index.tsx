import React from "react";

// Define the props interface
interface FormProps {
  title: string;
  content: string;
  id: string;
}

const Form: React.FC<FormProps> = ({ title, content, id }) => {
  return (
    <div id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* Your form JSX */}
      <form>
        {/* Form inputs go here */}
      </form>
    </div>
  );
};

export default Form;
