import { Contact } from "pages/ContactsPage";
import React, { useState, useEffect } from "react";

interface ContactFormProps {
  initialData?: Contact;
  onSubmit: (contactData: Contact) => void;
  onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [contactData, setContactData] = useState<Omit<Contact, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    type: "personal",
    address: "",
    notes: "",
  });

  // Populate the form with initial data if editing
  useEffect(() => {
    if (initialData) {
      setContactData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...contactData, id: initialData?.id || 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={contactData.firstName}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contactData.lastName}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={contactData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Contact Type</label>
        <div className="flex items-center space-x-4 mt-1">
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="personal"
              checked={contactData.type === "personal"}
              onChange={handleChange}
              className="mr-2"
            />
            Personal
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="professional"
              checked={contactData.type === "professional"}
              onChange={handleChange}
              className="mr-2"
            />
            Professional
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={contactData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
        />
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={contactData.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
          rows={4}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#003699] text-white px-4 py-2 rounded hover:bg-[#002b80] transition duration-300"
        >
          {initialData ? "Update Contact" : "Add Contact"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
