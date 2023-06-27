import PropTypes from "prop-types";
import Event from "Components/Event/Event";
import { Board } from "./EventBoard.styled";

const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => {
        return (
            <Event
            key={name}
              name={name}
              location={location}
              speaker={speaker}
              start={time.start}
              end={time.end}
              type={type}
            />
        );
      })}
    </Board>
  );
};
EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default EventBoard;
