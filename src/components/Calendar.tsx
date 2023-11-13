import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AppointmentType } from "../App";
 
const localizer = dayjsLocalizer(dayjs);
 
interface props {
  appointments: AppointmentType[];
}
 
interface EventType {
  id: number;
  title: string;
  start: Date;
  end: Date;
}
 
const CalendarAppointment = ({ appointments }: props) => {
  const nestedEvents: EventType[] = [];
  const events = appointments.map((appointment, i) => {
    if (appointment.appointments.length > 1) {
      appointment.appointments.map((ap) => {
        nestedEvents.push({
          id: i,
          title:
            appointment.firstName +
            " " +
            appointment.lastName +
            " - " +
            ap.format("hh:mm A"),
          start: ap.toDate(),
          end: ap.toDate(),
        });
      });
 
      return;
    }
 
    return {
      id: i,
      title:
        appointment.firstName +
        " " +
        appointment.lastName +
        " - " +
        appointment.appointments[0].format("hh:mm A"),
      start: appointment.appointments[0]?.toDate(),
      end: appointment.appointments[0]?.toDate(),
    };
  });
 
  const mergedEvents: EventType[] = [
    ...(events.filter((event) => typeof event !== "undefined") as EventType[]),
    ...nestedEvents,
  ];
 
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={mergedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "85vh", paddingLeft: '2.5rem', paddingRight: '2.5rem', color:'#F1B461'}}
      />
    </div>
  );
};
 
export default CalendarAppointment;