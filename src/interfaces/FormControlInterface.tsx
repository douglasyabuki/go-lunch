export interface AuthFormState {
    user_name: string;
    user_email: string;
    message: string;
    nameError: string;
    emailError: string;
    messageError: string;
    isSent: boolean;
  }
  
  export interface AuthFormAction {
    type: 'updateName' | 'updateEmail' | 'updateMessage' | 'validate' | 'updateIsSent';
    value?: string;
  }