# 📚 BookNest: Library Management System  


## 🚀 Project Overview  
BookNest is a **Library Management System** designed for schools, allowing efficient management of library operations. It enables users to **add, categorize, and update books, track borrowed and returned books**, and provides a user-friendly interface for both librarians and students.  

🔗 **Live Project Link:** [BookNest](https://booknest-5f5dc.web.app/)  

## 🛠️ Technologies Used  
### **Frontend**  
- React.js, React Router  
- React Hook Form for form handling  
- Axios for API communication  
- Tailwind CSS & DaisyUI for styling  
- Swiper JS for interactive sliders  
- Framer Motion for animations  

### **Backend**  
- Node.js, Express.js  
- MongoDB for database management  
- JWT Authentication for secure routes  
- dotenv for environment variable management  

### **Authentication**  
- Firebase Authentication (Email/Password & Social Login)  

### **Deployment**  
- **Frontend:** Netlify/Surge  
- **Backend:** Vercel/Render  

## ✨ Core Features  
✅ **Responsive Design** – Works seamlessly across mobile, tablet, and desktop.  
✅ **Dynamic Titles** – Website title changes based on the active route.  
✅ **Authentication System** –  
   - Email/password-based registration & login  
   - Social login (Google/GitHub)  
   - JWT-based authentication for protected routes  
✅ **Home Page Features** –  
   - Interactive **Banner/Slider** with at least 3 slides  
   - **Book Categories** – Displays four categories with book listings  
   - **Extra Sections** – Value-added content sections  
✅ **All Books Page (Private Route)** –  
   - Displays all books in a card layout  
   - Filter to show only available books  
   - Update button for editing book details  
✅ **Add Book Page (Private Route)** –  
   - Form to add new books to the database  
   - Fields: Name, Image, Author, Category, Description, Quantity, Rating  
✅ **Book Details Page (Private Route)** –  
   - Shows book information  
   - **Borrow Button** – Allows borrowing with a return date selection  
✅ **Borrowed Books Page (Private Route)** –  
   - Displays books borrowed by the logged-in user  
   - Allows returning books, updating the database quantity  
✅ **404 Page** – Custom-designed page for invalid routes  

## 📦 Dependencies  
### **Main Dependencies**  
- `axios` – For API requests  
- `firebase` – Authentication & database  
- `localforage` – Local storage management  
- `lottie-react` – For animations  
- `match-sorter` – Sorting and filtering data  
- `react`, `react-dom` – Core React libraries  
- `react-hook-form` – Form validation & handling  
- `react-icons` – Icons for UI  
- `react-router-dom` – Routing management  
- `react-toastify` – User notifications  
- `sort-by` – Sorting functionality  
- `sweetalert2` – Beautiful alert pop-ups  
- `swiper` – Swiper.js for touch-based sliders  

### **Development Dependencies**  
- `@eslint/js`, `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` – Linting tools  
- `@types/react`, `@types/react-dom` – TypeScript support  
- `@vitejs/plugin-react` – Vite support for React  
- `autoprefixer`, `postcss`, `tailwindcss`, `daisyui` – Styling utilities  
- `vite` – Development & build tool  

## 🛠️ How to Run the Project Locally  
Follow these steps to set up and run **BookNest** on your local machine:  
- `Install Dependencies` - npm install
- `Start the Development Server` - npm run dev
- `Build for Production` - npm run build
-  `Preview the Build`  - npm run preview
