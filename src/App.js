import { Card, Grid, Header, Container } from "semantic-ui-react";
import ActionCard from "./components/action-card.component";
import InfoCardStore from "./components/store-card.component";
import InfoCardWSelector from "./components/info-card.component";

function App() {
  return (
    <Card.Content
      style={{
        padding: "3rem",
      }}
      fluid
      textAlign="center"
      as={Container}
    >
      <Header size="large">React / Redux & Selectors Example</Header>
      <br />
      <br />

      <Grid divided centered columns={2}>
        <Grid.Column>
          <InfoCardStore />

          <ActionCard />
        </Grid.Column>
        <Grid.Column>
          <InfoCardWSelector portion="first" />

          <InfoCardWSelector portion="second" />
        </Grid.Column>
      </Grid>
    </Card.Content>
  );
}

export default App;
