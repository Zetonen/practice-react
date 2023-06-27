import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { Card, EventName, Info, Chip } from "./Event.styled";
// import formatEventStart from "utils/formatEventStart";
// import formatEventDuration from "utils/formatEventDuration";
import { formatEventDuration, formatEventStart } from "utils";
import { iconSize } from "constants";
const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt />
        {location}
      </Info>
      <Info>
        <FaUserAlt />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />
        {formatEventStart(start)}
      </Info>
      <Info>
        <FaClock />
        {formatEventDuration(start, end)}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
export default Event;
