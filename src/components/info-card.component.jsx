import { connect } from "react-redux";
import { Card, Statistic, Grid, Divider } from "semantic-ui-react";

import RenderCountCard from "./rerender-count-card.component";

import { selectFirstCounter } from "../redux/first/first.selectors";
import { selectSecondCounter } from "../redux/second/second.selectors";

const InfoCardWSelector = ({ portion, counter }) => {
  return (
    <>
      <Grid divided>
        <Grid.Column width={12} as={Card}>
          <Card.Content>
            <Card.Header>
              Info Card / {portion === "first" ? "First" : "Second"} State
              Portion Counter
            </Card.Header>
          </Card.Content>
          <Card.Content textAlign="center">
            <Card.Description as={Grid}>
              <Grid.Column>
                <Statistic color={portion === "first" ? "red" : "blue"}>
                  <Statistic.Value>{counter}</Statistic.Value>
                  <Statistic.Label>
                    {portion === "first"
                      ? "First Portion Counter"
                      : "Second Portion Counter"}
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center">
            <Card.Description>
              <pre> Props: {JSON.stringify({ portion, counter })}</pre>
            </Card.Description>
          </Card.Content>
        </Grid.Column>
        <Grid.Column width={4} style={{ alignSelf: "center" }}>
          <RenderCountCard />
        </Grid.Column>
      </Grid>
      <Divider />
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    counter:
      props.portion === "first"
        ? selectFirstCounter(state)
        : selectSecondCounter(state),
  };
};

export default connect(mapStateToProps, null)(InfoCardWSelector);
