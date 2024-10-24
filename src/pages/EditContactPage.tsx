import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditContact from "../components/EditContact";
import { Contact } from "./ContactsPage";
import { toast } from "react-toastify";
import {
  useFetchContactByIdQuery,
  useEditContactMutation,
} from "services/api/hooks/useContacts";
import { PROTECTED_PATHS } from "routes/pagePaths";

const EditContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract ID from URL
  const navigate = useNavigate();

  // Fetch contact by ID
  const {
    data: contactToEdit,
    isError,
    isLoading,
  } = useFetchContactByIdQuery(id || "");

  // Edit contact mutation
  const editMutation = useEditContactMutation();

  const handleSave = (updatedContact: Contact) => {
    if (id) {
      editMutation.mutate(updatedContact, {
        onSuccess: () => {
          toast.success("Contact updated successfully!");
          navigate(PROTECTED_PATHS.CONTACTS);
        },
      });
    }
  };
  // If ID is invalid or contact not found
  if (isError) {
    return (
      <div>
        <Navbar />
        <div className="container max-w-screen-md mx-auto p-4">
          <h2 className="text-3xl font-bold text-[#003699] mb-6">
            Contact Not Found
          </h2>
          <button onClick={() => navigate(PROTECTED_PATHS.CONTACTS)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mx-auto p-4">
        <h2 className="text-3xl font-bold text-[#003699] mb-6">Edit Contact</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          contactToEdit && (
            <EditContact
              initialData={contactToEdit}
              onSave={handleSave}
              onCancel={() => navigate(PROTECTED_PATHS.CONTACTS)}
            />
          )
        )}
      </div>
    </>
  );
};

export default EditContactPage;
