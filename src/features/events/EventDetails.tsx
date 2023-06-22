import { useParams } from "react-router-dom";
import { useGetEventsWithPlayersQuery } from "./eventsApiSlice";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data: event, isLoading, isError } = useGetEventsWithPlayersQuery(eventId);
  const accessToken = localStorage.getItem("accessToken");

  if (isLoading) {
    return <div>Loading event details...</div>;
  }

  if (isError) {
    return <div>Error fetching event details</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1 className="pt-3 pl-5 font-bold text-lg mb-3 pb-3 text-left pr-10" style={{borderBottom: '1px solid #e5e7eb'}}>Event Overview</h1>
      <div className="mx-5 p-3 rounded-lg" style={{border: '1px solid #e5e7eb'}}>
        <h2 className="mb-3 text-3xl font-bold">{event.title}</h2>
        <p className="mb-3 text-2xl font-bold">About this Event</p>
        <p className="mb-1 text-base font-bold">Category</p>
        <p className="mb-3 text-base">{event.event_type}</p>
        <p className="mb-1 text-base font-bold">Date & Time:</p>
        <p className="mb-3 text-base">{event.date}, {event.end_time} - {event.start_time}</p>
        <p className="mb-1 text-base font-bold">Duration:</p>
        <p className="mb-3 text-base">{event.end_time} - {event.start_time} hour/s</p>
        <p className="mb-1 text-base font-bold">Location:</p>
        <p className="mb-5 text-base">{event.location}</p>
        <p className="mb-2 text-2xl font-bold">Details</p>
        <p className="mb-1 text-lg font-bold">Description</p>
        <p className="mb-3 text-base">{event.details}</p>
      </div>
      {accessToken
        ?
        <div className="mx-5 p-3 rounded-md mt-5" style={{border: '1px solid #e5e7eb'}}>
          <p className="text-lg font-bold mb-5 text-center">
            Will you join the event?
          </p>
          <div className="py-2 px-4 bg-blue-700 rounded-md mr-2 mb-3">
            <p className="font-bold text-sm text-white hover:underline text-center">
              Join event
            </p>
          </div>
          <div className="py-2 px-4 rounded-md mr-2" style={{border: '1px solid #FFCACA'}}>
            <p className="font-bold text-sm text-red-700 hover:underline text-center">
                Decline event
            </p>
          </div>
        </div>
        :
        <></>
        }
    </div>
  );
};

export default EventDetails;
