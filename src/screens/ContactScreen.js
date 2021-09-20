import React from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import Fade from 'react-reveal/Fade'
const Wrapper = styled.div`
  .circular {
    height: 150px;
    width: 150px;
    text-align: center;
    padding: 25px;
    background: #457da4;
    color: #fff;
    margin: 0 auto;
    border-radius: 50%;
  }
  .circular h1 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5rem;
    align-self: center;
  }
  .center {
    position: relative;
  }
  .absolute {
    position: absolute;
    top: -155px;
    left: 0;
  }
  .bg1 {
    background: #69cda5 !important;
  }
  .text h3 {
    color: #457da4;
  }
  .text p {
    max-width: 100%;
    font-weight: 500;
  }
  .paras p {
    max-width: 100%;
  }
  .textCenter {
    margin-top: 1rem;
  }
  .banner {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background: #e1e1ff;
  }
`
const ContactScreen = () => {
  return (
    <Wrapper className='section'>
      <section className='section-center center'>
        <div className='absolute'>
          <Fade left>
            <div className='circular bg1'>
              <h1>最新 消息</h1>
            </div>
          </Fade>
        </div>
      </section>
      <Fade bottom>
        <section className='section-center textCenter'>
          <div className='text'>
            <h3>青創平台</h3>
            <p>
              香港青年創新創業發展平台（青創平台）為香港這個融合多元創新文化的社區，提供嶄新而專業的創業服務，提高香港青年創業的成功機會。藉著強大的支援後盾，以「立足香港價值，面向環球巿場」為發展目標，向有志於不同領域發展的準創業家提供支援，透過創新的商業模式，積極發掘人才，提供全方位的創業服務，以「先扶持，後同行，繼而共同拓展更大巿場」為最終目標。
            </p>
          </div>
          <div className='banner'>
            <h4>拓展更大巿場」為最</h4>
          </div>
          <div className='paras'>
            <p>
              意應徵者請提交中、英文履歷，現有及要求薪金，電郵至
              <a href='mailto:hr@hkincubation.com'>hr@hkincubation.com</a>
              人力資源總監收。
            </p>
            <p>
              所有個人資料只會用作招聘相關用途，僅限本公司授權人員查閱，並根據個人資料（私隱）條例進行保密處理。
            </p>
          </div>
        </section>

        <Form />
      </Fade>
    </Wrapper>
  )
}

export default ContactScreen
