import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaStickyNote,
  FaArrowLeft,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  useFetchContactByIdQuery,
  useDeleteContactMutation,
} from "services/api/hooks/useContacts";
import { PROTECTED_PATHS } from "routes/pagePaths";

const ContactDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch contact by ID
  const {
    data: contact,
    isLoading,
    isError,
  } = useFetchContactByIdQuery(id || "");

  // Delete contact mutation
  const deleteMutation = useDeleteContactMutation();

  // Handle edit
  const handleEdit = () => {
    navigate(`/contacts/${contact?._id}/edit`);
  };

  // Handle delete with confirmation
  const handleDelete = () => {
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
        deleteMutation.mutate(id || "", {
          onSuccess: () => {
            Swal.fire("Deleted!", "Your contact has been deleted.", "success");
            navigate(PROTECTED_PATHS.CONTACTS);
          },
          onError: () => {
            toast.error("Failed to delete contact.");
          },
        });
      }
    });
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle contact not found or error
  if (isError || !contact) {
    return <div>Contact not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="contact-details container max-w-screen-md mx-auto p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-4 text-blue-600 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#003699]">
              {contact.firstName} {contact.lastName}
            </h2>
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
          {contact.address && (
            <p className="flex items-center mt-2">
              <FaHome className="mr-2 text-gray-600" />
              {contact.address}
            </p>
          )}
          {contact.notes && (
            <p className="flex items-center mt-2">
              <FaStickyNote className="mr-2 text-gray-600" />
              {contact.notes}
            </p>
          )}

          <div className="mt-6 flex space-x-4">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetailsPage;
