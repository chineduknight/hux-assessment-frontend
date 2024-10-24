import WithSuspense from "components/HOC/WithSuspense";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { PROTECTED_PATHS, PUBLIC_PATHS } from "./pagePaths";

const ContactsPage = WithSuspense(lazy(() => import("pages/ContactsPage")));
const ContactDetailsPage = WithSuspense(
  lazy(() => import("pages/ContactDetailsPage"))
);
const AddContactPage = WithSuspense(lazy(() => import("pages/AddContactPage")));
const EditContactPage = WithSuspense(
  lazy(() => import("pages/EditContactPage"))
);
const { CONTACTS, CONTACT } = PROTECTED_PATHS;

const PROTECTED_ROUTES = [
  { path: CONTACT, element: <ContactDetailsPage /> },
  { path: CONTACTS, element: <ContactsPage /> },
  {
    path: `${PROTECTED_PATHS.CONTACTS}/add`,
    element: <AddContactPage />,
  },
  {
    path: `${PROTECTED_PATHS.CONTACTS}/:id/edit`,
    element: <EditContactPage />,
  },
  { path: "/", element: <Navigate to={CONTACTS} /> },
  ...Object.values(PUBLIC_PATHS).map((route) => {
    return {
      path: route,
      element: <Navigate to="/" />,
    };
  }),
  { path: "*", element: <div>Page not found</div> },
];

export default PROTECTED_ROUTES;
