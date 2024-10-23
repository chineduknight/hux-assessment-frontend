import { Contact } from "pages/ContactsPage";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ContactListProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="border p-4 rounded shadow-md flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#003699]">
                  {contact.firstName} {contact.lastName}
                </h3>
                <span
                  className={`px-2 py-1 rounded text-sm capitalize ${
                    contact.type === "professional"
                      ? "bg-green-200 text-green-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {contact.type}
                </span>
              </div>

              {contact.email && (
                <p className="flex items-center mt-2">
                  <FaEnvelope className="mr-2 text-gray-600" />
                  {contact.email}
                </p>
              )}
              <p className="flex items-center mt-2">
                <FaPhone className="mr-2 text-gray-600" />
                {contact.phoneNumber}
              </p>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <Link
                to={`/contacts/${contact.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </Link>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                onClick={() => onEdit(contact)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-lg text-gray-600">
          No contacts found.
        </p>
      )}
    </div>
  );
};

export default ContactList;
