import { connect } from "react-redux";
import { Card, Statistic, Grid, Divider } from "semantic-ui-react";

import RenderCountCard from "./rerender-count-card.component";

const InfoCardStore = (props) => {
  return (
    <>
      <Grid divided>
        <Grid.Column as={Card} width={12}>
          <Card.Content>
            <Card.Header>Store Card / Global State (Store)</Card.Header>
          </Card.Content>
          <Card.Content textAlign="center">
            <Card.Description as={Grid}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Statistic color="red">
                    <Statistic.Value>{props.first.counter}</Statistic.Value>
                    <Statistic.Label>First Portion Counter</Statistic.Label>
                  </Statistic>
                </Grid.Column>
                <Grid.Column>
                  <Statistic color="blue">
                    <Statistic.Value>{props.second.counter}</Statistic.Value>
                    <Statistic.Label>Second Portion Counter</Statistic.Label>
                  </Statistic>
                </Grid.Column>
              </Grid.Row>
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center">
            <Card.Description>
              <pre> State: {JSON.stringify(props)}</pre>
            </Card.Description>
          </Card.Content>
        </Grid.Column>
        <Grid.Column style={{ alignSelf: "center" }} width={4}>
          <RenderCountCard />
        </Grid.Column>
      </Grid>
      <Divider />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(InfoCardStore);
