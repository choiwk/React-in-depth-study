import React from 'react';
import { Grid, Text } from '../elements/ImportBridge';
import Card from '../components/Card';

const Notification = (props) => {
  let noti = [
    { user_name: 'mean0', post_id: 'post1' },
    { user_name: 'mean0', post_id: 'post2' },
    { user_name: 'mean0', post_id: 'post3' },
    { user_name: 'mean0', post_id: 'post4' },
  ];
  return (
    <>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((notiEl) => {
          return <Card {...notiEl} key={notiEl.post_id} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
