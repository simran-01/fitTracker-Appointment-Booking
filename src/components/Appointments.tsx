import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";
import TableCell from "@mui/material/TableCell";
import { AppointmentType } from "../App";


interface AppointmentsProps {
  appointments: AppointmentType[];
  setShowAddNew: React.Dispatch<React.SetStateAction<boolean>>;
  setAppointments: React.Dispatch<React.SetStateAction<AppointmentType[]>>;
}

export default function Appointments({
  appointments,
  setShowAddNew,
  setAppointments,
}: AppointmentsProps) {
  return (
    <div style={
      {'padding': '2rem', 'margin':'0 auto','maxWidth':'1280px'}  
    }>
      <div className="appointment-header-container">
        <h2 style={{'color':'rgb(110, 110, 110)'}}>Appointments</h2>
        <button className="add-new-button" onClick={() => setShowAddNew(true)} style={{backgroundColor:"#f5af4c",color:"white"}}>
          Add New
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500, width: 1280 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell><span>First Name</span></TableCell> 
              <TableCell><span>Last Name</span></TableCell>
              <TableCell><span>Location</span></TableCell>
              <TableCell><span>Appointments</span></TableCell>
              <TableCell><span>Actions</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <Row
                firstName={row.firstName}
                lastName={row.lastName}
                appointments={row.appointments}
                id={row.id}
                location={row.location}
                key={row.id}
                setAppointments={setAppointments}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
