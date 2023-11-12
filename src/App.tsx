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
      lastName: "Chopra",
      location: "Pune",
      appointments: [dayjs().add(1,'day')],
    },
  ]);

  const [showAddNew, setShowAddNew] = useState(false);

  const [page, setPage] = useState("home");

  return (
    <>
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
