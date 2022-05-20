import React from 'react';
import { Grid, Text } from '../elements/ImportBridge';
import Card from '../components/Card';

const Notification = (props) => {
  console.log(props);

  let noti = [
    { user_name: 'mean0', post_id: 'post1' },
    { user_name: 'mean0', post_id: 'post2' },
    { user_name: 'mean0', post_id: 'post3' },
    { user_name: 'mean0', post_id: 'post4' },
  ];
  return (
    <>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return <Card {...n} key={n.post_id} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
