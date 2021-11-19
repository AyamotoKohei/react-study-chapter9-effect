import { VFC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './Timer.css';

const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const [timerLeft, setTimerLeft] = useState(limit);
  const reset = (): void => setTimerLeft(limit);
  const tick = (): void => setTimerLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timerLeft === 0) setTimerLeft(limit);
  }, [timerLeft, limit]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timerLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
