import React from 'react';

import { Grid, Image, Text } from '../elements/ImportBridge';

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>

        <Grid padding="16px 0">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid>
          <Image shape="rectangle" />
        </Grid>

        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}</Text>
        </Grid>
      </Grid>
    </>
  );
};

//? PostList에 Post에 대한 데이터를 넘겨줘야 하는데 만약 Post에 넘겨야 할 데이터가 props 없을 때
//? 발생하는 페이지 오류를 방지하기 위해 defaultProps를 사용함
Post.defaultProps = {
  user_info: {
    user_name: 'wonkeun',
    user_profile: '',
  },
  image_url:
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160103_119%2Fyukkie_14518066357879h3ul_JPEG%2FIMG_1752.jpg&type=sc960_832',
  contents: '괌 여행 가고싶다',
  comment_cnt: 10,
  insert_dt: '2021-12-29 15:00:00',
};

export default Post;
