import React from 'react'
import styled from 'styled-components'
const Ad = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <img src='https://14augesthotel.com/HKYI/images/banner.jpg' alt='ad' />
      </div>
    </Wrapper>
  )
}

export default Ad
const Wrapper = styled.div`
  img {
    width: 100%;
  }
`
