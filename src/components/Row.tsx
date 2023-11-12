import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { AppointmentType } from "../App";
import dayjs, { Dayjs } from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { DateTimePicker } from "@mui/x-date-pickers";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { toast } from "react-toastify";

interface RowProps extends AppointmentType {
  key: string;
  setAppointments: React.Dispatch<React.SetStateAction<AppointmentType[]>>;
}

const Row = ({
  appointments,
  firstName,
  id,
  lastName,
  location,
  setAppointments,
}: RowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [appointmentDeleteModal, setAppointmentDeleteModal] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(0);

  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);
  const [editedLocation, setEditedLocation] = useState(location);
  const [editedAppointments, setEditedAppointments] = useState(appointments);

  const handleDeleteConfirmation = (index: number) => {
    setAppointmentToDelete(index);
    setAppointmentDeleteModal(true);
  };

  const handleEditAppointments = (index: number, updatedDateTime: Dayjs) => {
    const updatedAppointments = editedAppointments.map((appointment, i) => {
      if (i === index) return updatedDateTime;

      return appointment;
    });

    setEditedAppointments(updatedAppointments);
  };

  const handleDeleteAppointments = (index: number) => {
    const updatedAppointments = editedAppointments.filter((appointment, i) => {
      if (i !== index) return appointment;
    });

    setEditedAppointments(updatedAppointments as Dayjs[]);
    setAppointmentDeleteModal(false);
  };

  const handleSave = () => {
    setAppointments((prevData) => {
      const newEditedAppointments = prevData.map((prevAppointment) => {
        if (id === prevAppointment.id) {
          return {
            ...prevAppointment,
            firstName: editedFirstName,
            lastName: editedLastName,
            location: editedLocation,
            appointments: editedAppointments,
          };
        }

        return prevAppointment;
      });

      return newEditedAppointments as AppointmentType[];
    });
    setIsEditing(false);
    toast.success("Record Edited");
  };

  const handleDelete = (appointmentId: string) => {
    setAppointments((prevData) => {
      const editedAppointments = prevData.filter((prevAppointment) => {
        if (appointmentId !== prevAppointment.id) return prevAppointment;
      });

      return editedAppointments as AppointmentType[];
    });

    toast.success("Record Deleted");
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        {isEditing ? (
          <TextField
            required={true}
            variant="outlined"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
          />
        ) : (
          firstName
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            variant="outlined"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
        ) : (
          lastName
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            variant="outlined"
            value={editedLocation}
            onChange={(e) => setEditedLocation(e.target.value)}
          />
        ) : (
          location
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              {editedAppointments.map((appointment, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 15,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <DateTimePicker
                    label="Appointment Time"
                    disablePast={false}
                    defaultValue={appointment}
                    onChange={(dateTime) =>
                      handleEditAppointments(i, dateTime as Dayjs)
                    }
                  />
                  <CloseIcon
                    style={{ cursor: "pointer" , color:"rgb(189, 2, 14)"}}
                    onClick={() => handleDeleteConfirmation(i)}
                  />
                </div>
              ))}
            </div>

            <ControlPointIcon
              style={{ cursor: "pointer" , color:"#195fb0" }}
              onClick={() =>
                setEditedAppointments((prev) => [
                  ...prev,
                  dayjs().add(editedAppointments.length + 1, "days"),
                ])
              }
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: "fit-content",
            }}
          >
            {appointments.map((appointment, i) => (
              <span key={i} className="appointment-tag">
                {dayjs(appointment).format("DD/MM/YYYY - hh:mm A")}
              </span>
            ))}
          </div>
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <>
            <span>
              <DoneIcon
                style={{ cursor: "pointer", marginRight: "1rem", color: "#05a14b"}}
                onClick={() => handleSave()}
              />
            </span>
            <span>
              <CloseIcon
                style={{ cursor: "pointer" , color:"rgb(189, 2, 14)"}}
                onClick={() => setIsEditing(false)}
              />
            </span>
          </>
        ) : (
          <>
            <span>
              <EditIcon
                style={{ cursor: "pointer", marginRight: "1rem" ,color: "#05a14b"}}
                onClick={() => setIsEditing(true)}
              />
            </span>
            <span>
              <DeleteIcon
                style={{ cursor: "pointer", color:"#bd020e" }}
                onClick={() => setDeleteModalOpen(true)}
              />
            </span>
          </>
        )}
      </TableCell>
      <DeleteModal
        title="Delete Record"
        open={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        handleDelete={() => handleDelete(id)}
      />

      <DeleteModal
        title="Delete Appointment"
        open={appointmentDeleteModal}
        handleClose={() => setAppointmentDeleteModal(false)}
        handleDelete={() => handleDeleteAppointments(appointmentToDelete)}
      />
    </TableRow>
  );
};

const DeleteModal = ({
  handleClose,
  open,
  handleDelete,
  title,
}: {
  handleClose: () => void;
  open: boolean;
  handleDelete: () => void;
  title: string;
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button style={{ color: "red" }} onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Row;
