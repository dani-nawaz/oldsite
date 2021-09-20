import { Box, Divider, TextField } from '@material-ui/core'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { data } from './NavBar'
const Wrapper = styled.div`
  .formCenter {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  @media screen and (max-width: 880px) {
    .formCenter {
      grid-template-columns: 1fr;
    }
  }
  .dropdowns {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  .btn {
    width: 190px;
    background: transparent;
    color: black;
    margin-bottom: 1rem;
    border: 1px solid black;
  }
  .topbar {
    display: grid;
    grid-template-columns: 1fr 3fr;

    align-items: self-end;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 500px) {
    .topbar {
      display: grid;
      grid-template-columns: 1fr;
      align-items: self-end;
    }
  }
  .topText {
    color: #457da4;
  }
  .topPara {
    margin-bottom: 3rem;
  }
  .btn3 {
    color: red;
  }
  .submit {
    width: 100px;
    margin: 1rem 1rem;
  }
  .P {
    color: white;
    background: #69cda5;
  }
  .P2:hover {
    color: white;
    background: #69cda5;
  }
`
const Form = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='topbar' style={{ marginBottom: '1rem' }}>
          <div className='search'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id='search' label='Search' variant='standard' />
            </Box>
          </div>
          <div className='rightTop'>
            <div className='topText'>
              <h3>香港青年創新創業發</h3>
            </div>
            <Divider />
          </div>
        </div>
        <div className='section-center formCenter'>
          <div className='left'>
            <div className='dropdowns'>
              {data.map((button) => {
                const { id, title, subMenu } = button
                return (
                  <Dropdown key={id}>
                    <Dropdown.Toggle className='btn'>{title}</Dropdown.Toggle>
                    {subMenu.map((dropdown) => (
                      <Dropdown.Menu style={{ width: '65%' }} key={dropdown.id}>
                        <Dropdown.Item href='#/action-1'>
                          {dropdown.name}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    ))}
                  </Dropdown>
                )
              })}
            </div>
          </div>
          <div className='right'>
            <div className='topPara'>
              <p className='heade'>主要職責：</p>
              <p>• 建立高效及有系统性的項目管理框架及流程</p>
              <p>
                •
                與各部門合作及溝通，統籌及管理平台有關的項目進度，內部資源配合進度等
              </p>
              <p>
                •
                負責準備會議報告表及進度表，向管理層解說及負責作總匯報項目的進度及情況
              </p>
              <p>
                •
                與各部門合作及溝通，統籌及管理平台有關的項目進度，內部資源配合進度等
              </p>
            </div>
            <div className='botPara'>
              <p className='heade'>主要職責：</p>
              <p>• 建立高效及有系统性的項目管理框架及流程</p>
              <p>
                •
                與各部門合作及溝通，統籌及管理平台有關的項目進度，內部資源配合進度等
              </p>
              <p>
                •
                負責準備會議報告表及進度表，向管理層解說及負責作總匯報項目的進度及情況
              </p>
              <p>
                •
                與各部門合作及溝通，統籌及管理平台有關的項目進度，內部資源配合進度等
              </p>
            </div>
            <div>
              <Button className='submit P' variant='primary'>
                Primary
              </Button>
              <Button className='submit p2' variant='outline-dark'>
                Dark
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Form
