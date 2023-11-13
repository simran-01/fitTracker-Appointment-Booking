import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { nanoid } from "nanoid";
import { AppointmentType } from "../App";
import { toast } from "react-toastify";
 
interface AddAppointmentProps {
  addNewAppointment: React.Dispatch<React.SetStateAction<AppointmentType[]>>;
  setShowAddNew: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const AddAppointment = ({
  addNewAppointment,
  setShowAddNew,
}: AddAppointmentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [appointments, setAppointments] = useState<Dayjs[]>([
    dayjs().add(1, "hour"),
  ]);
  const [numOfAppointment, setNumOfAppointment] = useState(1);
 
  const handleEditAppointments = (index: number, updatedDateTime: Dayjs) => {
    const updatedAppointments = appointments.map((appointment, i) => {
      if (i === index) return updatedDateTime;
 
      return appointment;
    });
 
    setAppointments(updatedAppointments);
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewAppointment((prev) => [
      ...prev,
      {
        id: nanoid(8),
        firstName,
        lastName,
        location,
        appointments: appointments,
      },
    ]);
 
    toast.success("Appointment Created");
    setShowAddNew(false);
  };
 
  return (
    <div className="add-appointment-form-bg">
      <Paper className="add-appointment-form-container">
        <div className="close-form-icon" style={{'color':'#bd020e'}}>
          <HighlightOffIcon onClick={() => setShowAddNew(false)} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-controls">
            <TextField
              className="form-input"
              label="First Name"
              variant="outlined"
              required={true}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              className="form-input"
              label="Last Name"
              variant="outlined"
              required={true}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-controls">
            <TextField
              className="form-input"
              label="Location"
              variant="outlined"
              required={true}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <DateTimePicker
              className="form-input"
              label="Appointment Time"
              disablePast={true}
              defaultValue={appointments[0]}
              onChange={(dateTime) =>
                handleEditAppointments(0, dateTime as Dayjs)
              }
            />
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontFamily: "sans-serif",
              fontSize: "0.9rem",
              marginBottom: "1rem",
              cursor: "pointer",
              color: "#F1B461",
            }}
            onClick={() => {
              setNumOfAppointment((prevNum) => (prevNum += 1));
              setAppointments((prev) => [...prev, dayjs().add(1, "day")]);
            }}
          >
            Add More Appointments?
          </div>
 
          {numOfAppointment > 1 &&
            [...Array(numOfAppointment - 1).keys()].map((v, i) => (
              <div key={v} className="extra-appointment-field-container">
                <DateTimePicker
                  className="extra-appointment-field"
                  label="Appointment Time"
                  disablePast={true}
                  defaultValue={appointments[i + 1]}
                  onChange={(dateTime) =>
                    handleEditAppointments(i + 1, dateTime as Dayjs)
                  }
                />
              </div>
            ))}
 
          <button type="submit" className="save-appointment">Save Appointment</button>
        </form>
      </Paper>
    </div>
  );
};
 
export default AddAppointment;