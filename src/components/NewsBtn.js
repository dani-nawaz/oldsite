import React from 'react'
import styled from 'styled-components'

const TopNews = () => {
  return (
    <Wrapper>
      <div className='absolute flex'>
        <div className='circular '>
          <h1>最新 消息</h1>
        </div>
        <div className='tabs'>
          <button className='btnNav'> 最新 消息</button>
          <button className='btnNav'>最新 消息</button>
          <button className='btnNav'>最新 消息</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default TopNews
const Wrapper = styled.div``
