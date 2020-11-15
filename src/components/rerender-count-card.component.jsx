import { Card, Statistic, Grid } from "semantic-ui-react";
import { useRef } from "react";

const RenderCountCard = () => {
  const renderCount = useRef(-1);
  renderCount.current = renderCount.current + 1;

  return (
    <Grid divided>
      <Grid.Column as={Card} textAlign="center">
        <Card.Content>
          <Card.Header>Rerender Count</Card.Header>

          <Statistic color="green" size="huge">
            <Statistic.Value>{renderCount.current}</Statistic.Value>
          </Statistic>
        </Card.Content>
      </Grid.Column>
    </Grid>
  );
};

export default RenderCountCard;
