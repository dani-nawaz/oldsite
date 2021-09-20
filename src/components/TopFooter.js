import React from 'react'

import styled from 'styled-components'
const FooterMiddle = () => {
  return (
    <Wrapper className='top'>
      <ul className='nav topnav'>
        <li className='nav_items'>
          <a className='nav_links' href='/'>
            關於我們
          </a>
        </li>
        <li className='nav_items'>
          <a className='nav_links' href='/'>
            使用條款及免責聲明
          </a>
        </li>
        <li className='nav_items'>
          <a className='nav_links' href='/'>
            私隱及個人信息收集聲明
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default FooterMiddle
