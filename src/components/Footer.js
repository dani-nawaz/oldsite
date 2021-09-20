import React from 'react'
import styled from 'styled-components'

import FooterMiddle from './FooterMiddle'
import TopFooter from './TopFooter'
const Footer = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <TopFooter />
        <FooterMiddle />
        <div className='bottom'>
          <p>©2021 香港青年創新創業發展平台版權所有</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.div`
  background: #457da4;
  .bottom {
    color: #a7b5bf;
    padding: 5px;
    margin-bottom: 1rem !important;
  }
  .bottom p {
    font-size: 15px;
    font-weight: 400;
  }
  .top {
    padding: 8px;
    border-bottom: 1px solid #a7b5bf;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .nav_items {
    display: block;
    padding: 0.5rem 1rem;
    color: #a7b5bf;
    font-size: 12px;
  }

  .nav_links {
    text-decoration: none;
    display: block;
    color: #a7b5bf;
    font-size: 12px;
    transition: all linear 250ms;
  }
  .nav_links:hover {
    color: #007bff;
  }
  .middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }
  img {
    width: 70px;
  }
  .middlenav {
    padding-left: opx;
    margin: 0;
  }
  .middlenav a {
    color: #457da4;
    font-size: 15px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-item: center;
    justify-content: center;
    padding: 5px 5px;
    transition: all linear 250ms;
  }
  .middlenav a svg {
    font-size: 20px;
  }
  .middlenav a:hover {
    color: #007bff;
  }
  .midd {
    padding: 0.1rem 0.5rem;
  }
`
