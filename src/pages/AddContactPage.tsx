import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddContact from "../components/AddContact";
import { Contact } from "./ContactsPage";
import { toast } from "react-toastify";

interface AddContactPageProps {
  onAddContact: (newContact: Omit<Contact, "id">) => void;
}

const AddContactPage: React.FC<AddContactPageProps> = ({ onAddContact }) => {
  const navigate = useNavigate();

  const handleSave = (newContact: Omit<Contact, "id">) => {
    onAddContact(newContact);
    toast.success("Contact added successfully!");
    navigate("/contacts"); // Navigate back to contact list after adding
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mx-auto p-4">
        <h2 className="text-3xl font-bold text-[#003699] mb-6">Add Contact</h2>
        <AddContact
          onSave={handleSave}
          onCancel={() => navigate("/contacts")}
        />
      </div>
    </>
  );
};

export default AddContactPage;
