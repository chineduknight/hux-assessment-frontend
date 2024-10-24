import { useQuery } from "@tanstack/react-query";
import { Contact } from "pages/ContactsPage";
import { toast } from "react-toastify";
import axiosInstance from "..";
import { useApiMutation } from "../apiHelper";
import { contactRequest } from "../request";
import { queryClient } from "App";
import { AxiosError } from "axios";

// Fetch Contacts Hook
export const useFetchContactsQuery = () => {
  return useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(contactRequest.CONTACT);
      return data.data;
    },
    retry: 2,
  });
};

// Add Contact Mutation Hook
export const useAddContactMutation = () => {
  return useApiMutation<Omit<Contact, "_id">>({
    method: "POST",
    endpoint: contactRequest.CONTACT,
    onSuccessCallback: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

export const useFetchContactByIdQuery = (id: string) => {
  return useQuery<Contact, AxiosError>({
    queryKey: ["contact", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `${contactRequest.CONTACT}/${id}`
      );
      return data.data; // Assuming the response format is { data: contact }
    },
    enabled: !!id, // Only run the query if an id exists
  });
};

// Edit Contact Mutation Hook
export const useEditContactMutation = () => {
  return useApiMutation<Contact>({
    method: "PUT",
    endpoint: (data: Contact) => `${contactRequest.CONTACT}/${data._id}`,
    onSuccessCallback: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onErrorCallback: () => {
      toast.error("Failed to update contact.");
    },
  });
};

// Delete Contact Mutation Hook
export const useDeleteContactMutation = () => {
  return useApiMutation<string>({
    method: "DELETE",
    endpoint: (id: string) => `${contactRequest.CONTACT}/${id}`,
    onSuccessCallback: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      toast.success("Contact deleted successfully!");
    },
  });
};
