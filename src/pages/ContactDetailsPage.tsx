import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { dummyContacts } from "../data/contactsData";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaStickyNote,
  FaArrowLeft,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ContactDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const contact = dummyContacts.find((c) => c.id === parseInt(id || "", 10));

  if (!contact) {
    return <p>Contact not found</p>;
  }

  const handleEdit = () => {
    // Assuming there is a mechanism to navigate to edit mode, perhaps setting a state or navigating to an edit form.
    navigate(`/contacts/${contact.id}/edit`); // Update according to your navigation structure
  };

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
        // Ideally, delete from server or state. Here we are just showing the toast as an example.
        toast.success("Contact Deleted");
        Swal.fire("Deleted!", "Your contact has been deleted.", "success");
        navigate("/contacts"); // Redirect back to contact list
      }
    });
  };

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
