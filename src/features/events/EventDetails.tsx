import { useParams } from "react-router-dom";
import { useGetEventsWithPlayersQuery } from "./eventsApiSlice";

type PlayerAvailabilityTypes = "PENDING" | "GOING" | "NOT_GOING";

interface Player {
  id: number;
  name: string;
  availability_status: PlayerAvailabilityTypes
}

const EventDetails = () => {
  const { eventId } = useParams();
  const { data: event, isLoading, isError } = useGetEventsWithPlayersQuery(eventId);

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
      <h2>Event Details</h2>
      <p>Event ID: {eventId}</p>
      <p>Title: {event.title}</p>
      <p>Date: {event.date}</p>
      <p>Date: {event.date}</p>
      <p>Start Time: {event.start_time}</p>
      <p>End Time: {event.end_time}</p>
      <p>Location: {event.location}</p>
      <p>Details: {event.details}</p>
      <p>Team: {event.team.name}</p>
      <p>Players:</p>
      <ul>
        {event.team.players.map((player: Player) => (
          <li key={player.id}>
            <div>
              {player.name}
            </div>
            <div>
              {player.availability_status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
