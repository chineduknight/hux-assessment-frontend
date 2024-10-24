import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axiosInstance from "services/api";
import { AxiosError, AxiosRequestConfig } from "axios";

// added this disable here to avoid having to add an empty request object in the useApiMutation function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MutationParams<T> {
  method: "POST" | "PUT" | "DELETE" | "PATCH"; // HTTP methods
  endpoint: string | ((data: T) => string);
  onSuccessCallback: (data: any) => void;
  onErrorCallback?: (error: AxiosError) => void;
}

/**
 * Custom hook to handle API mutations for various HTTP methods.
 *
 * This function abstracts common logic for API mutations such as POST, PUT, DELETE, etc.
 * It allows specifying different endpoints, request data, and callbacks for success and error handling.
 *
 * @param {Object} params - The parameters for configuring the mutation.
 * @param {"POST" | "PUT" | "DELETE" | "PATCH"} params.method - The HTTP method to use for the mutation.
 * @param {string} params.endpoint - The API endpoint to call for the mutation.
 * @param {function} params.onSuccessCallback - The function to call upon successful mutation. Receives the API response data as an argument.
 * @param {function} [params.onErrorCallback] - Optional. The function to call upon mutation failure. Receives the AxiosError object as an argument.
 *
 * @returns {Object} mutation - Returns a mutation object from `useMutation` which includes methods like `mutate`, `isPending`, `isError`, etc.
 *
 * @example
 * // Example usage for a POST request
 * const mutation = useApiMutation({
 *   method: "POST",
 *   endpoint: "/api/login",
 *   onSuccessCallback: (data) => {
 *     console.log("Login successful:", data);
 *   },
 *   onErrorCallback: (error) => {
 *     console.log("Login failed:", error.message);
 *   }
 * });
 *
 * // Trigger the mutation
 * mutation.mutate();
 */
export const useApiMutation = <T = any>({
  method,
  endpoint,
  onSuccessCallback,
  onErrorCallback,
}: MutationParams<T>) => {
  return useMutation({
    mutationFn: async (requestData: T) => {
      const url =
        typeof endpoint === "function" ? endpoint(requestData) : endpoint;
      const config: AxiosRequestConfig = {
        method,
        url,
        ...(method !== "DELETE" && { data: requestData }),
      };
      console.log("config:", config);
      return axiosInstance(config);
    },
    onSuccess: (data) => {
      onSuccessCallback(data);
    },
    onError: (error: AxiosError) => {
      if (onErrorCallback) {
        return onErrorCallback(error);
      }
      const errorMsg = (error.response?.data as { error: string }).error;
      toast.error(errorMsg || "Something went wrong. Please try again.");
    },
  });
};
