# Library Management System  

## Project Description  
This project involves developing a **Library Management System** for a school. The system allows for efficient management of library operations such as adding, categorizing, and updating books, tracking borrowed and returned books, and providing a user-friendly interface for users.  

---

## Live Site  
- **Live Site Link**: [BookNest](https://booknest-5f5dc.web.app/)

---

## Key Features  
### General Features:  
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop.  
- **Dynamic Title**: The website title changes based on the active route.  
- **Authentication System**:  
  - Email/password-based registration and login.  
  - Social login (Google/GitHub).  
  - JWT-based authentication for protected routes.  

### Pages:  
1. **Home Page**:  
   - **Banner/Slider**: Interactive slider with at least 3 slides.  
   - **Book Categories**: Four categories with cards showing the category name and related books.  
   - **Extra Sections**: Two additional sections for value-added content.  

2. **All Books Page** (Private Route):  
   - Displays all books in a card .  
   - Includes a filter to show only available books.  
   - Update button for editing book details.  

3. **Add Book Page** (Private Route):  
   - Form for adding a new book to the database.  
   - Input fields: Name, Image, Author Name, Category, Description, Quantity, and Rating.  

4. **Book Details Page** (Private Route):  
   - Shows detailed information about a book.  
   - Borrow button to borrow the book (with modal and return date form).  

5. **Borrowed Books Page** (Private Route):  
   - Displays books borrowed by the logged-in user.  
   - Allows returning books and updates the quantity in the database.  

6. **404 Page**: Custom-designed page for invalid routes.  



---

## Tools & Technologies  
- **Frontend**: React, React Router, React Hook Form, Axios, Tailwind CSS, Framer Motion, Swiper JS.  
- **Backend**: Node.js, Express.js, JWT Authentication, MongoDB, dotenv.  
- **Authentication**: Firebase (email/password and social login).  
- **Deployment**: Netlify/Surge (Frontend), Vercel/Render (Backend).  

---




