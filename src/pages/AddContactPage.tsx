import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddContact from "../components/AddContact";
import { Contact } from "./ContactsPage";
import { toast } from "react-toastify";
import { useAddContactMutation } from "services/api/hooks/useContacts";
import { PROTECTED_PATHS } from "routes/pagePaths";

const AddContactPage: React.FC = () => {
  const navigate = useNavigate();
  const addContactMutation = useAddContactMutation();

  const handleSave = (newContact: Omit<Contact, "id">) => {
    addContactMutation.mutate(newContact, {
      onSuccess: () => {
        toast.success("Contact added successfully!");
        navigate(PROTECTED_PATHS.CONTACTS);
      },
      onError: () => {
        toast.error("Failed to add contact.");
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mx-auto p-4">
        <h2 className="text-3xl font-bold text-[#003699] mb-6">Add Contact</h2>
        <AddContact
          onSave={handleSave}
          onCancel={() => navigate(PROTECTED_PATHS.CONTACTS)}
        />
      </div>
    </>
  );
};

export default AddContactPage;
