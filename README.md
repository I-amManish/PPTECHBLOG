# Blog Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-brightgreen)

A modern and feature-rich blog website built using Vite and React. This project includes essential functionalities like authentication, rich text editing, and form handling, leveraging technologies such as Appwrite, React Router DOM, TinyMCE, and more.

## 🚀 Features
- **Fast and Optimized**: Built with Vite for lightning-fast performance.
- **Routing**: Managed with `react-router-dom` for seamless navigation.
- **Backend**: Powered by Appwrite for authentication, database, and file storage.
- **Rich Text Editing**: TinyMCE for creating and formatting blog content.
- **Form Handling**: Uses `react-hook-form` for efficient and flexible form validation.
- **HTML Parsing**: `html-react-parser` to render HTML content safely.

## 🛠 Technologies Used
- [Vite](https://vitejs.dev/) - Fast build tool for modern web applications.
- [React](https://reactjs.org/) - JavaScript library for building UI components.
- [React Router DOM](https://reactrouter.com/) - Handles routing and navigation.
- [Appwrite](https://appwrite.io/) - Backend services for authentication, database, and file storage.
- [TinyMCE](https://www.tiny.cloud/) - A powerful rich text editor.
- [React Hook Form](https://react-hook-form.com/) - Simplifies form validation and state management.
- [HTML React Parser](https://www.npmjs.com/package/html-react-parser) - Parses and converts HTML to React components.

## 📦 Installation

### Clone the Repository
```sh
git clone https://github.com/yourusername/blog-website.git
cd blog-website
```

### Install Dependencies
```sh
npm install
```

### Set up Appwrite
- Create a new project in [Appwrite](https://cloud.appwrite.io/).
- Configure authentication, database, and storage.
- Update environment variables in a `.env` file:
```sh
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
```

### Start the Development Server
```sh
npm run dev
```

## 📂 File Structure
```
blog-website/
│── public/            # Static assets
│── src/
│   │── components/    # Reusable UI components
│   │── pages/         # Page components
│   │── hooks/         # Custom hooks
│   │── context/       # Context providers
│   │── utils/         # Utility functions
│   │── App.jsx        # Main app component
│   │── main.jsx       # Entry point
│── .env               # Environment variables
│── .gitignore         # Ignored files
│── package.json       # Dependencies and scripts
│── vite.config.js     # Vite configuration
│── README.md          # Project documentation
```

## 🎯 Usage
- Users can register and log in via Appwrite authentication.
- Create and edit blog posts with TinyMCE editor.
- Blog posts are stored in Appwrite's database.
- HTML content is rendered using `html-react-parser`.
- Forms are validated using `react-hook-form`.

## 🤝 Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

## 📜 License
This project is licensed under the MIT License.

