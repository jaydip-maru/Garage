=>> Garage Service Booking System

A full-stack **MERN** application that helps users quickly connect with nearby garages and mechanics during vehicle breakdowns. The platform enables users to request roadside assistance in real time, while garage owners can manage service requests, update availability, and communicate instantly through a modern and responsive interface.

---

==> Features

## User

* User registration and login
* Secure JWT authentication
* Add and manage vehicle details
* Browse available garages
* Request roadside assistance
* Track service requests
* Responsive UI for mobile and desktop

## Garage Owner

* Garage registration and profile management
* Add, edit, and delete garage information
* Toggle mechanic availability
* Receive real-time service requests
* Accept or reject customer requests
* Manage service history

## Real-Time Features

* Instant mechanic request notifications
* Live request acceptance using Socket.IO
* Real-time communication between users and garage owners

---

## => Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* HTTP Cookies

### Other Technologies

* Socket.IO
* Cloudinary
* Multer
* Git & GitHub

---

## 📂 Project Structure

```text
garage-service-booking/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── config/
│   └── utils/
│
├── package.json
└── README.md
```


=>> Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL=your_email
PASSWORD=your_app_password

CLIENT_URL=http://localhost:5173
```

---

## ▶ Running the Project

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

=>> # API Highlights

### Authentication

* Register
* Login
* Logout
* Verify User

### Garage

* Create Garage
* Update Garage
* Delete Garage
* Get All Garages

### Service

* Request Mechanic
* Accept Request
* Reject Request
* Service History

### User

* Update Profile
* Add Vehicle
* Get User Details

---

## Security

* JWT Authentication
* Protected Routes
* Role-Based Access Control
* Secure Password Hashing
* HTTP Cookies

---




## => Author

**Jaydip Maru**


---


⭐ If you found this project useful, consider giving it a **Star** on GitHub!
