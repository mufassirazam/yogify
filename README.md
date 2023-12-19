
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


# Approach
  ## Client
  A basic admission form is shown to the user when they click on the enroll button.
  All the necessary conditions have been enforced with html tags.
  For age, in the input tag - min and max attributes are defined
  Email validation is also done on the client side. 
  If all the entered values are satisfying then a post request is sent to the backend.

  ## Server
    All the values are extracted first and then validation is done again.
    If there is some error, the error is returned.

    The timing/batch is first found out from the Batch collection and is stored in  a variable for further use.

    After the validations, the email is searched in the user database(since email is unique)
    If it is found, then the same user is used for enrollment. If not, then a new user entry is created in the User Collection/Table.

    Then for the userId and the chosen month is searched in the Enrollment Collections. If an entry exists with the same userId and month. Then the requests returns and informs the user that changing the batch is not allowed for an already paid month.

    If no entry is found, a new enrollment is created with the userId, batchId, month and paymentStatus and saved in the collections. The mock payment function is called and if it returns true, then the payment status is changed to "paid" and the request return and takes the user to the /success page.

    If payment fails, the user is shown the possible reason.


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
        * Email(unique)
        * Age(min: 18 max: 65)
  
  ### 2. Batch:
  
      Attributes:
        * BatchID (primary key)
        * TimeSlot ( "6-7AM", "7-8AM", "8-9AM", "5-6PM")
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

  ## ER DIAGRAM
  ![IMG_2402](https://github.com/mufassirazam/yogify/assets/154338810/97ee99f6-9c2f-4d89-99c2-928b355c8c9b)


# Assumptions
 * Payment for any month can be done by selecting
 * Same user can pay for all the months
 * Only the month is considered(Year is not considered)
 * CompletePayment() function is a simple function that just returns {success: true}
 * The user is supposed to enter the correct name. The name of the user is not compared with the originally stored name in the database.
 * Amount if fixed at 500. So it cannot be changed
 * For every successful payment, a page informing the user of success is returned. But for a failure in payment, only an alert is shown to the user, with the possible reason.
 * None of the other functionalities in the landing page are implemented except for "enrollment". 
 * All the batches are already present in the database.
   

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
