import { authRequest } from "services";
import { User } from "context/AuthContext";
import { toast } from "react-toastify";
import { useApiMutation } from "./apiHelper";

export const useLoginMutation = (
  login: (user: User, token: string) => void,
  navigate: any
) => {
  return useApiMutation({
    method: "POST",
    endpoint: authRequest.LOGIN,
    onSuccessCallback: (data) => {
      const { token, user } = data.data;
      login(user, token);
      toast.success("Login successful!");
      navigate("/contacts");
    },
  });
};

export const useSignupMutation = (
  login: (user: User, token: string) => void,
  navigate: any
) => {
  return useApiMutation({
    method: "POST",
    endpoint: authRequest.SIGNUP,
    onSuccessCallback: (data) => {
      const { token, user } = data.data;
      login(user, token);
      toast.success("Signup successful!");
      navigate("/contacts");
    },
  });
};
