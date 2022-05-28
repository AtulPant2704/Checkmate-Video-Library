import { toast } from "react-toastify";

const passwordValidation = (password) => {
  const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regularExpression.test(password)) {
    return true;
  } else {
    toast.warning(
      "Password should have number, uppercase and lowercase letter and a special character"
    );
    return false;
  }
};

export { passwordValidation };
