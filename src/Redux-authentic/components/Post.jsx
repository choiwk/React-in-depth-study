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

        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid>
          <Image shape="rectangle" />
        </Grid>

        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}</Text>
        </Grid>
      </Grid>

      <div>user profile / user name / insert_dt / is_me (edit btn)</div>
      <div>contents</div>
      <div>image</div>
      <div>comment ctn</div>
    </>
  );
};

//? PostList에 Post에 대한 데이터를 넘겨줘야 하는데 만약 Post에 넘겨야 할 데이터가 props 없을 때
//? 발생하는 페이지 오류를 방지하기 위해 defaultProps를 사용함
Post.defaultProps = {
  user_info: {
    user_name: 'wonkeun',
    user_profile:
      'https://www.notion.so/f7be487bc3aa4842aaab051497fba7cf#500e914360c046c1b1b68c2b26142f0f',
  },
  image_url:
    'https://www.notion.so/f7be487bc3aa4842aaab051497fba7cf#500e914360c046c1b1b68c2b26142f0f',
  contents: '유소나예여',
  comment_cnt: 10,
  insert_dt: '2021-12-29 15:00:00',
};

export default Post;
