import React from 'react';
import styled from 'styled-components/macro';

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%; //? 4:3 비율을 유지하기 위해
  overflow: hidden; //? 사진의 크기는 재각각이기 때문에 너무 큰 사진이 영역밖으로 넘어갈 경우 넘어간 영역은 숨겨버리기.
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

Image.defaultProps = {
  shape: 'circle',
  src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDNfMTcw%2FMDAxNjEyMjk3OTAzMTI4.9rgytDH7vuuNmokdK0Q2VcH8JXYQ_fHOttj6Ww8xFAUg.KyPdaVCXYXVo6ePo917Bv5opXEazZsX_MWJ9ZHUDHfcg.JPEG.tjfgkr777%2FKakaoTalk_20210203_050643755_10.jpg&type=sc960_832',
  size: 46,
};

export default Image;
