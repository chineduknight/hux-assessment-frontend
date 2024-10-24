import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaPlus, FaSearch } from "react-icons/fa";
import ContactList from "components/ContactList";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from "services/api/hooks/useContacts";

export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  type: "personal" | "professional";
  address?: string;
  notes?: string;
}

const ContactsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const {
    data: contacts = [],
    isLoading,
    isError,
    error,
  } = useFetchContactsQuery();
  const deleteMutation = useDeleteContactMutation();

  if (isError) {
    const errorMsg =
      (error as any)?.response?.data?.error || "Failed to fetch contacts";
    toast.error(errorMsg);
  }
  // Filtering contacts based on search term
  const filteredContacts = contacts.filter((contact: any) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleDeleteContact = (id: string) => {
    console.log("id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
        if (deleteMutation.isSuccess) {
          toast.success("Contact Deleted");
          Swal.fire("Deleted!", "Your contact has been deleted.", "success");
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="contacts-page container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#003699]">Your Contacts</h2>
          <button
            className="bg-[#003699] text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-[#002b80] transition duration-300"
            onClick={() => navigate("/contacts/add")}
          >
            <FaPlus className="mr-2" /> <span>Add Contact</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center border rounded p-2 shadow-sm">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Filter Contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Contact List */}
        {isLoading ? (
          <p>Loading contacts...</p>
        ) : (
          <ContactList
            contacts={filteredContacts}
            onEdit={(contact) => navigate(`/contacts/${contact._id}/edit`)}
            onDelete={handleDeleteContact}
          />
        )}
      </div>
    </>
  );
};

export default ContactsPage;
