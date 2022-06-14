import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { realtime } from '../../shared/Firebase';
import { useSelector } from 'react-redux';

const NotiBadge = (props) => {
  const user_id = useSelector((state) => state.user.user.uid);
  const [isRead, setIsRead] = useState(true);
  console.log(props);

  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);

    notiDB.on('value', (snapshot) => {
      setIsRead(snapshot.val().read);

      return () => notiDB.off(); // 구독해제하기
    });
  }, []);

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
