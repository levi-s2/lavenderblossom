// Define the structure of the form values
export interface IValues {
  name: string;
  email: string;
  phone: string;
  cleaningService: string; // Array to handle multiple selected cleaning services
  preferredContact: string;
  heardAboutUs: string;
  comments: string;
}

// FormProps interface to define props passed to the form component
export interface FormProps {
  title: string;
  content: string;
  id: string;
}

// ValidationTypeProps interface to define the validation props for dynamic error handling
export interface ValidationTypeProps {
  type: keyof IValues; // It will be any key from IValues (e.g. 'name', 'email', etc.)
}
