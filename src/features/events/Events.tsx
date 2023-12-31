import { useGetPlayerByIdQuery } from "../players/playersApiSlice";
import { Link } from "react-router-dom";

type EventTypes = "PRACTICE" | "MATCH" | "OTHER";

interface EventProps {
  id: number;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  details: string;
  event_type: EventTypes;
  teamId?: number;
}

const Events = () => {
  const userId = localStorage.getItem("userId");
  const { data: players, isLoading, error } = useGetPlayerByIdQuery(userId);

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1
        className='pt-3 pl-10 font-bold text-lg -mb-6 pb-3 text-center pr-10'
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        Events
      </h1>
      <div className='rounded-xl border border-solid border-gray-300 m-10 pb-3 ml-5 mr-4 pt-3 bg-gray-100'>
        <div>
          <table className='w-full'>
            <thead className='h-11 bg-gray-100'>
              <tr>
                <th className='w-2/6 text-left pl-4'>Name</th>
                <th className='w-2/6 text-left pl-4'>Date</th>
                <th className='w-2/6 text-left pl-4'>Details</th>
              </tr>
            </thead>
            <tbody>
              {players?.teams?.map((team: { events: EventProps[]; }) =>
                team.events.map((event: EventProps) => (
                  <tr
                    key={event.id}
                    className='h-16 border-t border-gray-300 bg-white'
                  >
                    <td className='pl-4'>
                      <Link
                        to={`/dashboard/events/${event.id}`}
                        className='text-blue-700 underline font-bold'
                      >
                        {event.title}
                      </Link>
                    </td>
                    <td className='pl-4'>{event.date}</td>
                    <td className='pl-4'>{event.details}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Events;
