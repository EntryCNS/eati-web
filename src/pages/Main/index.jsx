import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import {useState, useRef} from 'react';
import * as S from './style';
import searchingMagnifyingGlass from '../../asset/searchingMagnifyingGlass.svg';
import copyBtn from '../../asset/copyBtn.svg'
import shareBtn from '../../asset/shareBtn.svg'
import words from './words'
import restaurantsInfo from './restaurantsInfo.json'

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const [shareCode, setshareCode] = useState('KLLEIR82K');
  
  const googleMapURL = "https://www.google.com/maps/search/"
  const handleCopy = () => {
    navigator.clipboard.writeText(shareCode).then(() => {
      alert("텍스트가 클립보드에 복사되었습니다!")
    }).catch((error) => {
      alert(`복사 실패: ${error}`);
    });
  };

  return (
    <S.main>
      <S.container>
        <form>
          <S.searchBox>
            <S.searchingMagnifyingGlass src={searchingMagnifyingGlass} alt='error'/>
            <S.searchInputBox type="search" placeholder='가고싶은 식당명을 입력해주세요.'/>
          </S.searchBox>
        </form>
        <div>
          <S.textsBox>
            <S.texts>요즘 유행하고 있어요!</S.texts>
          </S.textsBox>
          <div>
            <ReactWordcloud
              options={options}
              words={words}
            />
          </div>
        </div>
          <S.textsBox>
            <S.texts>근처 식당들을 살펴보아요 👀</S.texts>
          </S.textsBox>

          <S.restaurantsBox>
            {
            restaurantsInfo.restaurants.map((data)=>(
            <S.restaurant>
              <div style={{
                width: '100%'
              }}>
                <S.restaurantImg src={data.photos[0]} alt="가게 사진" />
                <S.restaurantLocationImg src={data.photos[1]} alt="가게 위치" />
              </div>
              <S.restaurantInfoBox>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  }}>
                  <S.restaurantName>{data.name}</S.restaurantName>
                  <S.restaurantLocationBox><a href={`${googleMapURL}${data.name} ${data.address}`} target='_blank' style={{
                    textDecorationLine : 'none',
                    color : '#3C4043',
                    fontWeight : 'bold',
                    fontSize : '0.7rem',
                  }}>위치</a></S.restaurantLocationBox>
                </div>
                <div>
                  <p style={{fontSize:'0.9rem'}}>주소: {data.address}</p>
                  <p style={{fontSize:'0.9rem'}}>번호: {data.phone}</p>
                </div>
              </S.restaurantInfoBox>
            </S.restaurant>
            ))
            }
          </S.restaurantsBox>

        <S.makeGroupBtn onClick={() => setModalOpen(true)}>그룹 만들기</S.makeGroupBtn>
        {modalOpen && 
        <S.modalContainer ref={modalBackground} onClick = { e => { 
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <S.wrap>
            <S.modalContent>
              <S.modalCloseButtonBox>
                <S.modalCloseButton onClick={() => setModalOpen(false)}>
                  공유 완료
                </S.modalCloseButton>
              </S.modalCloseButtonBox>
              <S.shareCodeContainer> 
                <p>초대코드 공유</p>
                <S.shareCodeBoxContainer>
                  <S.shareCodeBox type="text" value={shareCode}/>
                  <S.shareBtn src={shareBtn} alt="shareBtn" />
                  <S.copyBtn src={copyBtn} alt="copyBtn" onClick={handleCopy}/>
                </S.shareCodeBoxContainer>
              </S.shareCodeContainer>
            </S.modalContent>
          </S.wrap>
        </S.modalContainer>
      }   
    </S.container>
  </S.main>
)
}

export default Main

