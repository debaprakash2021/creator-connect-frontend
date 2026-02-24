# Creator Content

**Creator Content** is a dynamic web application designed for creators to upload, manage, and share their digital assets. Built with modern web technologies, it provides a seamless experience for handling images and videos with secure authentication and privacy controls.

## 🚀 Features

-   **🔐 Secure Authentication**: Robust user signup and login system with OTP verification for enhanced security.
-   **🎨 Interactive Dashboard**: Browse and explore public assets shared by other creators in a visually appealing grid layout.
-   **📁 Asset Management**:
    -   **Upload**: Easily upload images and videos with drag-and-drop support.
    -   **Privacy Controls**: Set assets as **Public** or **Private** to control visibility.
    -   **My Assets**: A dedicated section to manage and view your own uploaded content.
-   **📱 Responsive Design**: Fully responsive interface built with Tailwind CSS, ensuring a great experience on all devices.
-   **⚡ High Performance**: Powered by Vite for lightning-fast development and optimized production builds.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
-   **State Management**: React Context API

## 📦 Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd creator-content
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Endpoint**
    -   The application connects to a backend server. Ensure your backend is running.
    -   By default, the API base URL is configured in `src/api/axiosInstance.js`:
        ```javascript
        baseURL: "http://localhost:8090/api"
        ```
    -   Update this URL if your backend is hosted elsewhere.

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
creator-content/
├── public/              # Static assets
├── src/
│   ├── api/             # API integration (Axios instance, endpoints)
│   ├── assets/          # Project images/icons
│   ├── components/      # Reusable UI components (Layout, Button, etc.)
│   ├── context/         # React Context (AuthContext)
│   ├── pages/           # Application pages (Dashboard, Login, Signup, etc.)
│   ├── routes/          # Routing configuration (ProtectedRoute)
│   ├── utils/           # Utility functions (Toast notifications)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind imports)
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

---

**Happy Creating!** 🎨✨
