import React from "react";
import ContactForm from "./ContactForm";
import { Contact } from "pages/ContactsPage";

interface EditContactProps {
  initialData: Contact;
  onSave: (contactData: Contact) => void;
  onCancel: () => void;
}

const EditContact: React.FC<EditContactProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  return (
    <div className="edit-contact bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#003699]">
        Edit Contact
      </h2>
      <ContactForm
        initialData={initialData}
        onSubmit={onSave}
        onCancel={onCancel}
      />
    </div>
  );
};

export default EditContact;
