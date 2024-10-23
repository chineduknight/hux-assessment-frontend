import WithSuspense from 'components/HOC/WithSuspense';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PROTECTED_PATHS, PUBLIC_PATHS } from './pagePaths';

const ContactsPage = WithSuspense(lazy(() => import('pages/ContactsPage')));

const { CONTACTS } = PROTECTED_PATHS;

const PROTECTED_ROUTES = [
  { path: CONTACTS, element: <ContactsPage /> },
  { path: '/', element: <Navigate to={CONTACTS} /> },
  ...Object.values(PUBLIC_PATHS).map((route) => {
    return {
      path: route,
      element: <Navigate to='/' />,
    };
  }),
  { path: '*', element: <div>Page not found</div> },
];

export default PROTECTED_ROUTES;
