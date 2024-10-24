import React from "react";
import ContactForm from "./ContactForm";
import { Contact } from "pages/ContactsPage";

interface AddContactProps {
  onSave: (contactData: Contact) => void;
  onCancel: () => void;
}

const AddContact: React.FC<AddContactProps> = ({ onSave, onCancel }) => {
  return (
    <div className="add-contact bg-white rounded-lg p-8 shadow-md">
      <ContactForm onSubmit={onSave} onCancel={onCancel} />
    </div>
  );
};

export default AddContact;
