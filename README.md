# fitTracker - Appointment Scheduling System For Fitness Trainers #

## Introduction ##

1. fitTracker is an appointment scheduling system designed for fitness trainers to effortlessly maintain and manage their client's appointment details.
2. It provides with various functionalities to ease the job of trainers which includes adding of new appointments (multiple appointments for same client is also possible), editing appointments, deleting appointments and for multiple appointments case, trainer can delete individual appointment as well.
3. It also includes a calendar which displays name of each client who have appointment with the trainer.

## Technology and Libraries Used ##
- Frontend Design
   - React JS
   - Material UI                  
- Notifications or Toasts
   - react-toastify
- Calendar
   - react-big-calendar

## How to Setup ##

### Installation ###
#### 1. Git clone the repsoitory or download the zip file ####
#### 2. Execute this command in project directory ####
```js
    npm install
```
*All the necessary dependencies and libraries will be installed after execution of this command.
#### 3. Run the project in local server ####
```js
    npm run dev
```

## Interact with fitTracker ##
- First at the landing page , you can find two buttons labelled as "Show Calendar" and "Manage Appointments".
  ![homepage](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/77e45866-5204-4a8a-8947-c66150460c5b)
- Click on Manage Appointments to find dashboard and perform crud operations with your client's detail.
  ![appointments](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/2d6a32b9-812d-4ab1-ac46-9e37f0f41b66)
- On the top right corner , you can find "Add new" button , using which you can add a new client details with appointment date-time.It also provides
  a option to add more appointments.After adding details click on "Save Appointment".
   ![addnew](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/73e9c871-2666-4377-bf7c-47f5331c9f6d)
- Now you can edit the client details and appointment date-time if required using edit icon (pencil).Also you can add multiple appointment for a client 
  using the plus icon available after you click on edit.
  Next to each appointment there is a cancel icon using which you can easily delete individual appointments as well.
  ![edit](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/8ce80bbe-17a4-4b63-9908-1e71d7e514db)
- If you wish to delete client details with all appointments completely then you can use delete icon (dustbin) provided next to edit icon (pencil) under   actions column.
  ![delete](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/b4f3e6f9-909e-46db-9b2a-4598a3512ce9)
  When you click on dustbin icon , to avoid accidental delete it will ask for confirmation using dialog box.
  During deletion of individual appointments also confirmation is asked using same dialog box.
  * Note: To delete individual appointments first you need to click on edit icon (pencil icon).
- At every page on top left corner you will find back button and logo using which you can go back to home page.
- Now to check appointments in calendar click on "Show Calendar" button available on home page.
  ![newcalendar](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/476ed8a5-675e-4c3e-a8c9-c60917a52327)

- After interacting with fitTracker i.e whenever you add , edit or delete appointments you will receive beautiful notifications at the top right corner 
  which is added using react-toastify.

  ![create](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/481ef8fe-b9b3-4814-9dba-8cf6bf966b16)
  ![edit](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/05cfd544-aa49-46d8-b815-94adc5690ebd)
  ![notifydel](https://github.com/simran-01/fitTracker-Appointment-Booking/assets/61753575/6dc529fe-0909-4ee7-acac-0243d366746f)



  



 




  

   


