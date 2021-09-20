import React from 'react'
// import Tabs from '../components/Tabs'
import Cards from '../components/Cards'
import NewsBtn from '../components/NewsBtn'
import styled from 'styled-components'
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
  .flex {
    display: flex;
  }
  .btnNav {
    background: transparent;
    color: #457da4;
    border: none;
    border-bottom: 2px solid #457da4;
    margin: 0 1rem;
    transition: all linear 250ms;
  }
  .btnNav:hover {
    color: #69cda5;
    border-bottom: 2px solid #69cda5;
    transform: translatey(-3px);
  }
  .tabs {
    align-self: flex-end;
    margin-bottom: 1rem;
  }
  .card-center {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5rem;
  }
  @media screen and (max-width: 980px) {
    .card-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.5rem;
    }
  }
  @media screen and (max-width: 765px) {
    .card-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
    }
  }
  @media screen and (max-width: 495px) {
    .card-center {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 0.5rem;
    }
  }
`
const NewsScreen = () => {
  return (
    <Wrapper className='section'>
      <section className='section-center center'>
        <Fade left>
          <NewsBtn />
        </Fade>
        <section className='section-center card-center'>
          <Fade left>
            {cards.map((card) => (
              <Cards card={card} />
            ))}
          </Fade>
        </section>
      </section>
    </Wrapper>
  )
}

export default NewsScreen
const cards = [
  {
    id: 1,
    image: 'https://14augesthotel.com/HKYI/images/4.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore  aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 2,
    image: 'https://14augesthotel.com/HKYI/images/3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 3,
    image: 'https://14augesthotel.com/HKYI/images/2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 4,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 5,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 6,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 7,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 8,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 9,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
  {
    id: 10,
    image: 'https://14augesthotel.com/HKYI/images/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: '年輕人勇於挑戰',
  },
]
