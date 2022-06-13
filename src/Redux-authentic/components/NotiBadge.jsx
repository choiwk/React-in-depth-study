import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { realtime } from '../../shared/Firebase';
import { useSelector } from 'react-redux';

const NotiBadge = (props) => {
  const user_id = useSelector((state) => state.user.user.uid);
  const [isRead, setIsRead] = useState(true);
  console.log(props);

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);
  }, []);
  const notiCheck = () => {
    props._onClick();
  };
  return (
    <>
      <Badge
        color="secondary"
        variant="dot"
        invisible={isRead}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;
