import { toast } from "react-toastify";

const emailValidation = (email) => {
  const regularExpression = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (regularExpression.test(email)) {
    return true;
  } else {
    toast.warning("Enter a valid email");
    return false;
  }
};

export { emailValidation };
