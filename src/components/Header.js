import React from 'react'
// import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'
import { Box, TextField } from '@material-ui/core'
import NavBar from './NavBar'
import HeroSlider from './heroSlider'
import Fade from 'react-reveal/Fade'
export const Header = () => {
  return (
    <Wrapper>
      <div className=' header'>
        <section className='section-center center'>
          <div className='container'>
            <Fade top>
              <div className='top-bar' style={{ marginBottom: '15px' }}>
                <div className='right'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    {/* <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                    <TextField id='search' label='Search' variant='standard' />
                  </Box>
                  <button style={{ marginTop: '10px' }} className='ring'>
                    繁
                  </button>
                  <button className='ring'>簡</button>
                  <button className='ring'>En</button>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <NavBar />
            </Fade>
          </div>
        </section>
        <Fade left>
          <div className='text-slider'>
            <HeroSlider />
          </div>
        </Fade>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .header {
    position: relative;
    min-height: 600px;
    background-image: url('https://14augesthotel.com/HKYI/images/header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .center {
    /* display: flex;
    flex-direction: column; */
    /* justify-items: center; */
    /* flex-wrap: nowrap; */

    /* align-content: space-between; */
    /* color: red; */
  }
  .text-slider {
    position: absolute;
    bottom: 10%;
    max-width: 1140px;
    left: 0;
    /* color: red; */
    right: 0;
  }
  .top-bar {
    height: 40px;
    text-align: right;
  }
  .ring {
    font-size: 12px;
    margin: 0 3px;
    background: #fff;
    padding: 5px 7px 5px 7px;
    border: 0;
    font-weight: 700;
    border-radius: 50%;
  }
  .ring2 {
    width: 150px;
    border-radius: 15px;
    border: 0;
    margin-top: 12px;
  }
  .right {
    float: right;
    display: block;
  }
  .navbar {
    display: flex;
    align-items: center;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 240px;
    background: #fff;
    border-radius: 40px;
  }
  .btnNav {
    color: #ffff;
    border-bottom: 2px solid #fffffe;
    margin: 0 1rem;
    transition: all linear 250ms;
  }
  .btnNav:hover {
    border-bottom: 2px solid #69cda5;
    transform: translateX(3px);
  }
`
