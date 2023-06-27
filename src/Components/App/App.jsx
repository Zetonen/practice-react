import events from "events.json";
import PageTitle from "../PageTitle/PageTitle";
import EventBoard from "../EventBoard/EventBoard";
import { Container } from "./App.styled";
function App() {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </Container>
  );
}

export default App;
