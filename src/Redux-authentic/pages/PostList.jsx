import React from 'react';
import styled from 'styled-components/macro';
import Post from '../components/Post';
import Header from '../components/Header';

const PostList = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Post />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 30px auto;
  width: 40%;
`;

export default PostList;
