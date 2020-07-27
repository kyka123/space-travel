import React, { useState } from 'react';
import Input from 'components/Input';
import Results from 'components/Results';
import styled from 'styled-components';
import axios from 'axios';
import debounce from 'lodash.debounce';

const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.lightPurple};
  font-weight: 200;
  font-size: ${({ theme }) => theme.font.big};
  margin-bottom: 50px;
`;

const StyledSearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-80%);
`;

const Home = () => {
  const [data, setData] = useState(false);

  const getData = debounce(function({ value }) {
    axios
      .get(`https://images-api.nasa.gov/search?q=${value}&media_type=image`)
      .then(res => res.data.collection.items)
      .then(data => {
        const isCorrectData = !!value && data.length > 1;
        if (isCorrectData) {
          setData(data);
        } else {
          setData(false);
        }
      })
      .catch(err => {
        console.log(err);
        setData(false);
      });
  }, 1000);

  const sendTarget = ({ target }) => getData(target);

  return (
    <div>
      <StyledSearchWrapper onClick={() => setData(false)}>
        <StyledHeader>Space travel</StyledHeader>
        <Input onChange={sendTarget} placeholder="For example moon" />
      </StyledSearchWrapper>
      <Results data={data} />
    </div>
  );
};

export default Home;
