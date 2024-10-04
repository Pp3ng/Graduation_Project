# Progress Report

**Date:** October 20, 2023

## Today's Achievements

### Frontend Development

- **File:** `App.js`
  - Developed the main application component using React.
  - Implemented user interface with MUI (Material-UI) for a modern look.
  - Added functionality for user login and registration.
  - Integrated Axios for making HTTP requests to the backend.
  - Applied CSS for additional styling and animations to enhance user experience.

#### Commands Used

- **Create React App:**

  ```bash
  npx create-react-app frontend
  ```

- **Install MUI:**

  ```bash
  npm install  react-scripts @mui/material @emotion/react @emotion/styled
  ```

- **Start Development Server:**
  ```bash
  npm start
  ```

### Backend Development

- **File:** `main.cpp`
  - Set up the backend server using C++.
  - Implemented RESTful API endpoints for user registration and login.
  - Utilized `libxcrypt` for password hashing and verification.
  - Integrated `nlohmann/json` for JSON parsing and serialization.
  - Successfully compiled the backend application using `g++` with necessary libraries.

#### Commands Used

- **Clone and Build Crow from Source:**

  ```bash
  git clone https://github.com/CrowCpp/Crow.git
  cd Crow
  mkdir build
  cd build
  cmake ..
  make
  sudo make install
  ```

- **Install nlohmann/json:**

  - Directly included as a header-only library, no installation command needed.

- **Compile Backend Application:**
  ```bash
  g++ main.cpp -o myapp -I. -lcrypt -lpthread -lstdc++fs
  ./myapp
  ```
  Then I clicked in frontend folder and run the following command to start the frontend server:

```bash
 npm start
```

The frontend server started successfully and I was able to see INFO in the terminal that the backend server is running.

## Challenges and Solutions

- **Dependency Management:**

  - Encountered issues with missing dependencies (`crow.h` and `nlohmann/json.hpp`).
  - Resolved by manually cloning and building Crow from source.
  - Adjusted include paths and library links to ensure successful compilation.

- **Environment Setup:**
  - Configured necessary libraries manually without using `vcpkg`.
  - Ensured all dependencies were correctly linked during compilation.

## Next Steps

- **Testing and Debugging:**

  - Conduct thorough testing of both frontend and backend functionalities.
  - Debug any issues that arise during integration testing.

- **Feature Expansion:**

  - Plan to add more features to the application, such as file upload and download for the cloud storage functionality.

- **Deployment Preparation:**
  - Begin preparing the application for deployment, considering both frontend and backend requirements.

**Summary:** Today's work focused on setting up the core functionalities of both the frontend and backend. The integration of MUI and C++ backend has provided a solid foundation for further development. The next phase will involve testing and expanding the application's capabilities.
