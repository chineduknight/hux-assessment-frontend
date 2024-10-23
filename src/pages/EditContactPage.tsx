import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditContact from "../components/EditContact";
import { dummyContacts } from "../data/contactsData";
import { Contact } from "./ContactsPage";
import { toast } from "react-toastify";

interface EditContactPageProps {
  onEditContact: (updatedContact: Omit<Contact, "id">, id: number) => void;
}

const EditContactPage: React.FC<EditContactPageProps> = ({ onEditContact }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const contactToEdit = dummyContacts.find(
    (c) => c.id === parseInt(id || "", 10)
  );

  if (!contactToEdit) {
    return <p>Contact not found</p>;
  }

  const handleSave = (updatedContact: Omit<Contact, "id">) => {
    onEditContact(updatedContact, contactToEdit.id);
    toast.success("Contact updated successfully!");
    navigate("/contacts");
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-md mx-auto p-4">
        <h2 className="text-3xl font-bold text-[#003699] mb-6">Edit Contact</h2>
        <EditContact
          initialData={contactToEdit}
          onSave={handleSave}
          onCancel={() => navigate("/contacts")}
        />
      </div>
    </>
  );
};

export default EditContactPage;
