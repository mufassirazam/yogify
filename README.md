
# YOGA CLASS ADMISSION FORM


# Overview
This project is a simple web application designed to facilitate the enrollment process for monthly yoga classes. It comprises a frontend built with Vite + React and a backend developed using Node.js, with MongoDB as the database.


# Features

* Enrollment Criteria: Only individuals aged between 18 to 65 are eligible to enroll.

* Payment System: Participants need to pay a monthly fee of 500/- Rs INR on a month-to-month basis.

* Batch Selection: Users can choose from four available batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. They can switch batches monthly but stay in the same batch for a given month.

# Technologies Used
## Frontend:
  * Vite
  * React
  * Tailwind CSS
  * JavaScript

## Backend:
  * Node.js
  * Express.js
  * MongoDB

# Installation
## Clone the repository
```
git clone https://github.com/mufassirazam/yogify
cd yogify
```
## Install Dependencies
```
cd client  # Navigate to the frontend directory
npm install
cd ../server  # Navigate to the backend directory
npm install
```
## Environment Setup:
 * Create a .env file in the backend directory.
 * Add necessary environment variables such as MongoDB connection string(MONGODB_URI) and PORT

# Running the Application
 ## Start the backend server
 ```
nodemon index.js
```
## Start the frontend
```
npm run dev
```
# Backend API Endpoints
## POST /api/enroll
 * Description: Endpoint to enroll participants and process payments.
 * Request Body: JSON data containing user details and payment information.
*  Response: Returns the payment status based on the CompletePayment() function response.


# Database Design (ER Diagram)
## Collections/Tables

  ### 1. User:
  
      Attributes:
        * UserID (primary key)
        * Name
        * Email
        * Age
  
  ### 2. Batch:
  
      Attributes:
        * BatchID (primary key)
        * TimeSlot (e.g., "6-7AM", "7-8AM", "8-9AM", "5-6PM")
  ### 3. Enrollment:
  
      Attributes:
        * EnrollmentID (primary key)
        * UserID (foreign key references User.UserID)
        * BatchID (foreign key references Batch.BatchID)
        * Month ( "January", "February", etc)
        * PaymentStatus ( "Pending", "Paid")

## Relationships
  * One User can enroll in many Enrollments:
    * One User can enroll in multiple batches across different months (one-to-many relationship).
  * One Batch can have many Enrollments:
    * One Batch can have multiple users enrolled in it for a specific month (one-to-many relationship).
  * One Enrollment belongs to one User and one Batch:
    * Each Enrollment record uniquely associates a User with a Batch for a specific month (many-to-many relationship resolved with Enrollment entity).

# Future Improvements
  * Implement user authentication for secure access to enrollment data.
  * Incorporate a scheduler to automate payment reminders.

# Visuals
## The landing page
![Screenshot from 2023-12-19 20-00-07](https://github.com/mufassirazam/yogify/assets/154338810/e1e94659-b743-4099-a820-c06cb123eb2d)
![image](https://github.com/mufassirazam/yogify/assets/154338810/f6cc1307-fa28-41dd-8c1d-58cd84b0b0f5)


## The enrollment form
![image](https://github.com/mufassirazam/yogify/assets/154338810/867a1f69-12c4-4f7c-ac39-78f2648edb0a)

## Payment Successfull
![image](https://github.com/mufassirazam/yogify/assets/154338810/229b6622-3870-4a4e-84ce-3e3f6ee96888)

## Payment Failed
![Screenshot from 2023-12-19 20-11-02](https://github.com/mufassirazam/yogify/assets/154338810/129a7522-9798-42ff-8403-c1b5d5d8f073)
