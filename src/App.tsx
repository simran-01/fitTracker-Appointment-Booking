import "./App.css";
import Appointments from "./components/Appointments";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddAppointment from "./components/AddAppointment";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export interface AppointmentType {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  appointments: Dayjs[];
}

function App() {
  const [appointments, setAppointments] = useState<AppointmentType[]>([
    {
      id: "123",
      firstName: "Fahad",
      lastName: "Mapari",
      location: "Mumbai",
      appointments: [dayjs().add(1,'hour')],
    },
    {
      id: "124",
      firstName: "Simran",
      lastName: "Wilson",
      location: "Pune",
      appointments: [dayjs().add(1,'day')],
    },
    {
      id: "125",
      firstName: "Arzoo",
      lastName: "Stephen",
      location: "UK",
      appointments: [dayjs().add(2,'day'),dayjs().add(3,'hour')],
    },
    {
      id: "126",
      firstName: "John",
      lastName: "Washington",
      location: "London",
      appointments: [dayjs().add(4,'day'),dayjs().add(6,'day')],
    },
    {
      id: "127",
      firstName: "Rosie",
      lastName: "Khan",
      location: "Bangalore",
      appointments: [dayjs().add(5,'day')],
    },

   
  ]);

  const [showAddNew, setShowAddNew] = useState(false);

  const [page, setPage] = useState("home");

  return (
    <>
     <h1
        className="home-logo"
        style={{ cursor: "pointer" }}
        onClick={() => setPage("home")}
      >
        {" "}
        <span>fit</span>Tracker
        {page !== "home" && (
          <>
            <br />
            <ArrowBackIcon />
          </>
        )}
      </h1>
      {page === "home" ? (
        <Home setPage={setPage} />
      ) : page==="calendar"? <Calendar appointments={appointments}/>: (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {showAddNew && (
            <AddAppointment
              addNewAppointment={setAppointments}
              setShowAddNew={setShowAddNew}
            />
          )}
          <Appointments
            appointments={appointments}
            setShowAddNew={setShowAddNew}
            setAppointments={setAppointments}
          />
        </LocalizationProvider>
      )}
    </>
  );
}

export default App;
