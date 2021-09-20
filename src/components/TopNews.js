import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const TopNews = () => {
  return (
    <Wrapper>
      <section className='section-center news'>
        <div className='left'>
          <div className='bg1 circular'>
            <h1>最新 消息</h1>
          </div>
        </div>
        <div className='right'>
          <Slider />
        </div>
      </section>
    </Wrapper>
  )
}

export default TopNews
const Wrapper = styled.div``
