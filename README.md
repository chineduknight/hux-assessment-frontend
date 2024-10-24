# Contact Keeper

**Demo Link**: [Access Contact Keeper Here](https://knightcontactkeeper.netlify.app/)

## Table of Contents

1. [About The App](#about-the-app)
2. [Screenshots](#screenshots)
3. [Technologies](#technologies)
4. [Setup](#setup)
5. [Approach](#approach)
6. [Development Steps](#development-steps)
7. [Status](#status)
8. [Credits](#credits)
9. [License](#license)

## About The App

Contact Keeper is a simple web application that helps users manage and organize their personal and professional contacts. It allows users to add, edit, delete, and view contacts. The app offers a secure signup and login feature, enabling users to keep their contacts safe. Contact Keeper is designed to be user-friendly, visually appealing, and responsive across all devices.

## Technologies

- Frontend: React, TypeScript, Tailwind CSS, React Router, React Query, SweetAlert2, React Toastify
- Backend: Node.js, Express, MongoDB, Mongoose
- Other Libraries: Axios

## Setup

1. Clone the repository: `git clone https://github.com/chineduknight/hux-assessment-frontend`
2. Navigate into the directory: `cd contact-keeper`
3. Install the dependencies: `yarn install` or `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root folder.
   - Add your API base URL as `REACT_APP_BASE_URL=<your-backend-url>`.
5. Run the app locally:
   - Start the development server: `yarn start` or `npm start`
6. To build the app for production: `yarn build` or `npm build`

## Approach

I used a component-based architecture for building this project. The UI is designed using **Tailwind CSS** for quick styling, ensuring a clean and responsive design. **React Query** is used to handle API calls, data fetching, and caching to make integrating with the backend seamless. I adopted **SweetAlert2** for user-friendly pop-up modals and **React Toastify** for quick notifications for actions like add, edit, and delete.

The project was structured to first complete all UI elements and user interactions using dummy data to simulate a complete experience. After the UI was polished and user-tested, I transitioned to integrating the API for backend support.

## Development Steps

1. **Initial Setup**:

   - Created the GitHub repository (`contact-keeper-frontend`) and initialized the project.
   - Installed core dependencies like React, React Router, TypeScript, etc.
   - Made the first commit for the initial setup and folder structure.

2. **UI Development**:

   - Created the layout for **Homepage**, **Contacts Page**, **Signup/Login Page**, and **Contact Details Page**.
   - Built components for managing contacts (e.g., **ContactList**, **ContactCard**, **AddContactForm**, **EditContactForm**).
   - Added search/filter functionality for managing contacts.
   - Applied styling using **Tailwind CSS** to ensure responsiveness across all devices.

3. **Authentication Flow**:

   - Built and styled the **login** and **signup** pages.
   - Implemented a mock auth context to determine if the user is logged in or not.
   - Added redirects to ensure unauthenticated users could only see the homepage or signup/login.

4. **API Integration**:

   - Set up **Axios** with interceptors for requests and responses.
   - Integrated **React Query** for API calls for authentication, creating, updating, viewing, and deleting contacts.
   - Used **React Toastify** for notifying users about successful operations (e.g., successful login, contact added).

5. **Final Touches**:
   - Added **SweetAlert2** for delete confirmations.
   - Verified that all CRUD operations work correctly with the backend.
   - Polished the UI to ensure consistency and responsiveness.

## Status

Contact Keeper is fully functional, and the first version is complete. The next steps involve adding more features like **group management** for contacts and **reminders** for important contact dates.

## Credits

**Chinedu Knight** - Developer

Its been quite an experience developing this one, especially using react-query since its always updating

## License

MIT License @ Chinedu Knight
