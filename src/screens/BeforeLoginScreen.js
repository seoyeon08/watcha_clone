import React from 'react';
import styled from 'styled-components';

window.onload = function(){
  document.getElementById("container").style.backgroundRepeat = "no-repeat";
  document.getElementById("container").style.backgroundImage = "url(back1.jpg)";
  document.getElementById("container").style.backgroundSize = "200px";
}

const Box = styled.div`
  background: black;
  display: center;
`;

const TextBox = styled.div`
  color: white;
  background: black;
  margin-top: 160px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginButton = styled.button`
  color: black;
  background: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 5px;
  align-items: right;
  justify-content: center;
  width: 72px;
  height: 30px;
  border: none;
  margin-top: 20px;
`;

const StartButton = styled.button`
  color: white;
  background: #f82f62;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  justify-content: center;
  width: 170px;
  height: 50px;
  margin-top: 40px;
`;

const DownButton = styled.button`
  color: white;
  background: none;
  border-radius: 30px;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  margin-top: 90px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const UpButton = styled.button`
  color: white;
  background: none;
  border-radius: 30px;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  margin-top: 90px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const BeforeLoginScreen = () => (
  <Box color="black">
    <LoginButton>로그인</LoginButton>
    <div id="container">
      <TextBox>
        <h1>영화, 드라마, 예능, 다큐멘터리를 무제한으로</h1>
        <p>매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.</p>
      </TextBox>
      <ButtonBox>
        <StartButton>2주 무료 이용 시작</StartButton>
        <DownButton>↓</DownButton>
      </ButtonBox>
    </div>

    <div id="container" >
      <TextBox>
        <h1>여럿이 함께, 하나의 이용권으로</h1>
        <p>동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.</p>
      </TextBox>
      <ButtonBox>
        <StartButton>2주 무료 이용 시작</StartButton>
        <DownButton>↓</DownButton>
      </ButtonBox>
    </div>
    
    <div id="container" backgroundImage = "url(back1.jpg)">
      <TextBox>
        <h1>이제 TV로 최고의 화질을 경험하세요</h1>
        <p>최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.</p>
      </TextBox>
      <ButtonBox>
        <StartButton>2주 무료 이용 시작</StartButton>
        <DownButton>↓</DownButton>
      </ButtonBox>
    </div>
    
    <div id="container">
      <TextBox>
        <h1>이동 중에도 감상을 멈추지 마세요</h1>
        <p>보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.</p>
      </TextBox>
      <ButtonBox>
        <StartButton>2주 무료 이용 시작</StartButton>
        <DownButton>↓</DownButton>
      </ButtonBox>
    </div>
    
    <div id="container">
      <TextBox>
        <h1>스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서</h1>
        <p>10만여 편의 작품을 무제한 스트리밍하세요.</p>
      </TextBox>
      <ButtonBox>
        <StartButton>2주 무료 이용 시작</StartButton>
        <UpButton>↑</UpButton>
      </ButtonBox>
    </div>
  </Box>
  
);

export default BeforeLoginScreen;