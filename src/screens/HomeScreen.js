import React from 'react'
import styled from 'styled-components'

import Ad from '../components/Ad'

import TopNews from '../components/TopNews'
import BotNews from '../components/BotNews'
import TextImage from '../components/TextImage'
import Slide from 'react-reveal/Slide'
const HomeScreen = () => {
  return (
    <Wrapper className='section' style={{ overflow: 'hidden' }}>
      <Slide right>
        <Ad />
      </Slide>

      <section className='newSection section'>
        <Slide right>
          <TopNews />
        </Slide>
      </section>
      <div className='section-center bg_text'>
        <Slide bottom>
          <TextImage />
        </Slide>
      </div>
      <section className='newSection section'>
        <Slide right>
          <BotNews />
        </Slide>
      </section>
    </Wrapper>
  )
}

export default HomeScreen
const Wrapper = styled.div`
  .bg_text {
    background-image: url('https://14augesthotel.com/HKYI/images/header.jpg');
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg1 {
    background: #69cda5 !important;
  }
  .bg-circle {
    position: relative;
    width: 220px;
    height: 220px;
    background-image: url('https://14augesthotel.com/HKYI/images/1.png');
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 1rem;
    transition: all linear 250ms;
  }
  .bg-circle:hover {
    transform: scale(1.3);
  }
  .bg-circle h3 {
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
  }
  .inner-div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 100px;
    grid-gap: 1rem;
    /* margin: 0 auto; */
  }
  @media screen and (max-width: 980px) {
    .inner-div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 100px;
      grid-gap: 1rem;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 630px) {
    .inner-div {
      display: grid;
      grid-template-columns: 1fr;
      padding: 100px;
      grid-gap: 1rem;
      margin-right: -15px;
      margin-left: -15px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 850px) {
    .news {
      /* display: grid; */
      align-items: center;
      justify-content: center;
      /* flex-direction: row; */
      grid-template-columns: 1fr !important;
    }
  }
  .news {
    display: grid;
    /* align-items: center; */

    grid-template-columns: 20% 80%;
  }
  .newSection {
    background: #eafaf5;
  }
  .circular {
    height: 150px;
    width: 150px;
    text-align: center;
    padding: 25px;
    background: #457da4;
    color: #fff;
    margin: 5rem auto;
    border-radius: 50%;
  }
  .circular h1 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5rem;
    align-self: center;
  }
  .right {
    /* display: grid; */
    /* padding: 1rem; */
    /* margin: 1rem; */
  }
`
