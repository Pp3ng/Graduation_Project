# Progress Report

**Date:** October 4, 2024

## 1. Project Setup

### Frontend (Windows)

- **Created a React project:**

  - Used `create-react-app` to initialize the frontend environment.
  - Commands executed:
    ```bash
    npx create-react-app frontend
    cd frontend
    ```

- **Installed Axios:**
  - For making HTTP requests to the backend.
  - Command executed:
    ```bash
    npm install axios
    ```

### Backend (WSL)

- **WSL Setup:**

  - Ensured WSL was installed and configured with Ubuntu.

- **Installed necessary tools:**

  - Installed C++ build tools and vcpkg for package management.
  - Commands executed:
    ```bash
    sudo apt update
    sudo apt install build-essential
    git clone https://github.com/microsoft/vcpkg.git
    ./vcpkg/bootstrap-vcpkg.sh
    ```

- **Installed libraries:**
  - Used vcpkg to install Crow, nlohmann-json, bcrypt-cpp, and jwt-cpp.
  - Command executed:
    ```bash
    ./vcpkg/vcpkg install crow nlohmann-json bcrypt-cpp jwt-cpp
    ```

## 2. Frontend Development

- **Implemented User Interface:**

  - Developed UI components for user registration and login using React.
  - Managed state with React hooks (`useState`).

- **HTTP Requests:**

  - Integrated Axios for communication with the backend.

- **Key File:**
  - `App.jsx`: Handles user input, registration, and login logic.

## 3. Backend Development

- **Crow Framework Setup:**

  - Configured Crow to handle HTTP requests and responses.
  - Created API endpoints for user registration and login.

- **JSON Handling:**

  - Used `nlohmann/json` for parsing and generating JSON data.

- **Password Management:**

  - Integrated `BCrypt` for secure password hashing.

- **JWT Authentication:**

  - Used `jwt-cpp` to generate and verify JSON Web Tokens for user sessions.

- **Key File:**
  - `main.cpp`: Contains the main logic for handling API requests and responses.

## 4. Frontend and Backend Integration

- **API Path Consistency:**

  - Ensured that the API paths (`/api/register` and `/api/login`) are consistent between frontend and backend.

- **Data Format Alignment:**

  - Verified that the JSON data format used in requests and responses is correctly handled on both sides.

- **Testing:**
  - Conducted tests to ensure that registration and login functionalities work as expected.

## 5. Problem Solving

- **Data Format Issues:**

  - Resolved mismatches in JSON data formats between frontend and backend.

- **API Path Adjustments:**
  - Made necessary adjustments to API paths to ensure proper communication.

## 6. Deployment Plan

- **Frontend Build:**

  - Build the production version of the frontend using:
    ```bash
    npm run build
    ```

- **Backend Deployment:**

  - Compile the backend service and prepare it for deployment on the server.

- **Server Configuration:**
  - Plan to configure Nginx or Apache to host the frontend static files and set up reverse proxy for the backend service.

**Summary:** Today's efforts were focused on setting up the project environment, developing basic user authentication features, and ensuring seamless integration between the frontend and backend. The next phase will involve expanding the application's capabilities and preparing for deployment.
