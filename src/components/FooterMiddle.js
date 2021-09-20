import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import styled from 'styled-components'
const FooterMiddle = () => {
  return (
    <Wrapper className='middle'>
      <div className='left'>
        <ul className='nav middlenav'>
          <li className='nav_items midd'>
            <a className='nav_links' href='/'>
              <FacebookIcon />
            </a>
          </li>
          <li className='nav_items midd'>
            <a className='nav_links' href='/'>
              <InstagramIcon />
            </a>
          </li>
          <li className='nav_items midd'>
            <a className='nav_links' href='/'>
              <LinkedInIcon />
            </a>
          </li>
          <li className='nav_items midd'>
            <a className='nav_links' href='/'>
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className='right'>
        <img src='https://14augesthotel.com/HKYI/images/logo2.png' alt='logo' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default FooterMiddle
