import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import Modal from 'components/Modal';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.white};
  width: 85%;
  height: 100%;
  transform: translateX(${({ isVisible }) => (isVisible ? 0 : '100%')});
  transition: transform 0.5s;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: 900px) {
    width: calc(100% - 500px);
  }

  ::-webkit-scrollbar {
    width: 10px;
    border-left: 2px solid #ddd;
    /* Kolor #ddd jest używany tylko w tutaj,
    dlatego też nie dodaje go do theme
     */
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.darkPurple};
  }
`;

const StyledHeader = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.darkPurple};
  font-size: ${({ theme }) => theme.font.regular};
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  z-index: 2;
`;

const StyledItems = styled.div`
  margin: 5px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
`;

const Results = ({ data }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [detailsAboutModal, setDetailsAboutModal] = useState({});
  return (
    <div>
      <StyledWrapper isVisible={data}>
        <StyledHeader>Results:</StyledHeader>
        <StyledItems>
          {data
            ? data.map(({ data, links }) => {
                console.log(data[0]);
                const { nasa_id, title, description } = data[0];
                const { href } = links[0];
                return (
                  <Card
                    key={nasa_id}
                    fOnClick={() => {
                      setDetailsAboutModal({ title, imgUrl: href, description });
                      setModalIsVisible(true);
                    }}
                    title={title}
                    short={nasa_id}
                    img={href}
                  />
                );
              })
            : ''}
        </StyledItems>
      </StyledWrapper>
      <Modal
        isVisible={modalIsVisible}
        title={detailsAboutModal.title}
        imgUrl={detailsAboutModal.imgUrl}
        description={detailsAboutModal.description}
        close={() => setModalIsVisible(false)}
      />
    </div>
  );
};

export default Results;
