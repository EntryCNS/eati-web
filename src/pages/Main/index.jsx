import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import ReactWordcloud from 'react-wordcloud';
import * as S from './style';
import searchingMagnifyingGlass from '../../asset/searchingMagnifyingGlass.svg';
import copyBtn from '../../asset/copyBtn.svg';
import shareBtn from '../../asset/shareBtn.svg';
import words from './words';
import restaurantsInfo from './restaurantsInfo.json';
import { useNavigate } from 'react-router-dom';

// 상수들을 컴포넌트 외부로 분리
const GOOGLE_MAP_URL = "https://www.google.com/maps/search/";
const WORDCLOUD_OPTIONS = {
  rotations: 2,
  rotationAngles: [-90, 0],
};

// Restaurant 컴포넌트를 분리하여 메모이제이션
const Restaurant = React.memo(({ data }) => {
  return (
    <S.restaurant>
      <div style={{ width: '100%' }}>
        <S.restaurantImg src={data.photos[0]} alt="가게 사진" />
        <S.restaurantLocationImg src={data.photos[1]} alt="가게 위치" />
      </div>
      <S.restaurantInfoBox>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <S.restaurantName>{data.name}</S.restaurantName>
          <a 
            href={`${GOOGLE_MAP_URL}${data.name} ${data.address}`} 
            target='_blank' 
            rel="noopener noreferrer"
            style={{
              textDecorationLine: 'none',
              color: '#3C4043',
              fontWeight: 'bold',
              fontSize: '0.7rem',
            }}>
            <S.restaurantLocationBox>위치</S.restaurantLocationBox>
          </a>
        </div>
        <div>
          <p style={{ fontSize: '0.9rem' }}>주소: {data.address}</p>
          <p style={{ fontSize: '0.9rem' }}>번호: {data.phone}</p>
        </div>
      </S.restaurantInfoBox>
    </S.restaurant>
  );
});

// Modal 컴포넌트를 분리하여 메모이제이션
const ShareModal = React.memo(({ modalBackground, onClose, onCopy, shareCode }) => {
  const navigate = useNavigate();
  
  return (
    <S.modalContainer ref={modalBackground} onClick={onClose}>
      <S.wrap>
        <S.modalContent>
          <S.modalCloseButtonBox>
            <S.modalCloseButton onClick={() => navigate('/select-keyword')}>
              공유 완료
            </S.modalCloseButton>
          </S.modalCloseButtonBox>
          <S.shareCodeContainer>
            <p>초대코드 공유</p>
            <S.shareCodeBoxContainer>
              <S.shareCodeBox type="text" value={shareCode} readOnly />
              <S.shareBtn src={shareBtn} alt="shareBtn" />
              <S.copyBtn src={copyBtn} alt="copyBtn" onClick={onCopy} />
            </S.shareCodeBoxContainer>
          </S.shareCodeContainer>
        </S.modalContent>
      </S.wrap>
    </S.modalContainer>
  );
});


const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shareCode, setShareCode] = useState('KLLEIR82K');
  const modalBackground = useRef();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shareCode)
      .then(() => alert("텍스트가 클립보드에 복사되었습니다!"))
      .catch((error) => alert(`복사 실패: ${error}`));
  }, [shareCode]);

  const handleModalClose = useCallback((e) => {
    if (e.target === modalBackground.current) {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setError(null);
    };

    const errorCallback = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // 레스토랑 데이터를 useMemo로 메모이제이션
  const restaurantList = useMemo(() => restaurantsInfo.restaurants.map((data, index) => (
    <Restaurant key={data.id || index} data={data} />
  )), []);

  return (
    <S.main>
      <S.container>
        <form>
          <S.searchBox>
            <S.searchingMagnifyingGlass src={searchingMagnifyingGlass} alt='error' />
            <S.searchInputBox type="search" placeholder='가고싶은 식당명을 입력해주세요.' />
          </S.searchBox>
        </form>
        
        <div>
          <S.textsBox>
            <S.texts>요즘 유행하고 있어요!</S.texts>
          </S.textsBox>
          <div>
            <ReactWordcloud options={WORDCLOUD_OPTIONS} words={words} />
          </div>
        </div>

        <S.textsBox>
          <S.texts>근처 식당들을 살펴보아요 👀</S.texts>
        </S.textsBox>

        <S.restaurantsBox>
          {restaurantList}
        </S.restaurantsBox>

        <S.makeGroupBtn onClick={() => setModalOpen(true)}>그룹 만들기</S.makeGroupBtn>
        
        {modalOpen && (
          <ShareModal 
            modalBackground={modalBackground}
            onClose={handleModalClose}
            onCopy={handleCopy}
            shareCode={shareCode}
          />
        )}
      </S.container>
    </S.main>
  );
};

export default React.memo(Main);