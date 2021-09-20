import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import styled from 'styled-components'
// const Wrapper = styled.div`
//   .hamburger {
//     display: block;
//     color: red;
//   }
//   .inline {
//     display: inline-block;
//   }
//   .grid {
//     display: grid;
//     grid-template-columns: 20% 80%;
//   }
//   .flex-end {
//     align-items: flex-end;
//   }
// `
export const data = [
  {
    id: 1,
    title: '孵化計劃',
    subMenu: [
      { id: 1, name: 'submenu1' },
      { id: 2, name: 'submenu2' },
    ],
  },
  {
    id: 2,
    title: '初創團隊',
    subMenu: [
      { id: 1, name: 'submenu1' },
      { id: 2, name: 'submenu2' },
    ],
  },
  {
    id: 3,
    title: '初創團隊',
    subMenu: [
      { id: 1, name: 'submenu1' },
      { id: 2, name: 'submenu2' },
    ],
  },
]
const NavBar = () => {
  return (
    <>
      <Navbar
        scrolling
        dark
        expand='md'
        //   fixed='top'
        variant='dark'
        bg='transparant'
        //   expand='lg'
      >
        <Container flush>
          <Navbar.Brand href='#home'>
            {' '}
            <div className='logo'>
              <img
                src='https://14augesthotel.com/HKYI/images/logo.png'
                alt=''
                className='center1'
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-light-example' />
          <Navbar.Collapse className='hamburger'>
            <Nav>
              {data.map((button) => {
                const { id, title, subMenu } = button
                return (
                  <NavDropdown className='btnNav' key={id} title={title}>
                    {subMenu.map((submenu, index) => {
                      return (
                        <NavDropdown.Item key={index} href='#action/3.1'>
                          {submenu.name}
                        </NavDropdown.Item>
                      )
                    })}
                  </NavDropdown>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
