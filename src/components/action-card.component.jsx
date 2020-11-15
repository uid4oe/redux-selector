import { connect } from "react-redux";
import { Button, Card, Input, Grid, Divider } from "semantic-ui-react";
import { useState } from "react";

import {
  increaseFirstCounter,
  decreaseFirstCounter,
} from "../redux/first/first.actions";

import {
  increaseSecondCounter,
  decreaseSecondCounter,
} from "../redux/second/second.actions";

const ActionCard = ({
  increaseFirstCounter,
  decreaseFirstCounter,
  increaseSecondCounter,
  decreaseSecondCounter,
}) => {
  const [inputValue, setInputValue] = useState(1);

  const [statePortion, setStatePortion] = useState("first");

  const increaseCounter =
    statePortion === "first" ? increaseFirstCounter : increaseSecondCounter;

  const decreaseCounter =
    statePortion === "first" ? decreaseFirstCounter : decreaseSecondCounter;

  const onChangeStateHandler = (event) => {
    setStatePortion(event.target.value);
  };

  const onChangeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Grid divided>
      <Grid.Column as={Card}>
        <Card.Content>
          <Card.Header>Action Card / Manipulate A State Portion</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <Grid>
              <Grid.Column width={6}>
                <Button.Group fluid>
                  <Button
                    active={statePortion === "first"}
                    value="first"
                    onClick={onChangeStateHandler}
                  >
                    First
                  </Button>
                  <Button
                    active={statePortion === "second"}
                    value="second"
                    onClick={onChangeStateHandler}
                  >
                    Second
                  </Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column width={10}>
                <Input
                  onChange={onChangeInputHandler}
                  value={inputValue}
                  fluid
                  placeholder="Enter value"
                />
              </Grid.Column>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button positive onClick={() => increaseCounter(inputValue)}>
              Increase
            </Button>
            <Button negative onClick={() => decreaseCounter(inputValue)}>
              Decrease
            </Button>
          </Button.Group>
        </Card.Content>
        <Divider />
      </Grid.Column>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increaseFirstCounter: (value) => dispatch(increaseFirstCounter(value)),
  decreaseFirstCounter: (value) => dispatch(decreaseFirstCounter(value)),
  increaseSecondCounter: (value) => dispatch(increaseSecondCounter(value)),
  decreaseSecondCounter: (value) => dispatch(decreaseSecondCounter(value)),
});

export default connect(null, mapDispatchToProps)(ActionCard);
