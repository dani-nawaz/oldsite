import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Pagination } from 'swiper'

SwiperCore.use([Pagination])
const data = [
  {
    id: 1,
    title1: '青年創新創業',
    title2: '你將改變世界',
    para1: 'Youth Innovation and Incubation Development',
    para2: 'You Will You Will Change the World',
  },
  {
    id: 1,
    title1: '青年創新創業',
    title2: '你將改變世界',
    para1: 'Youth Innovation and Incubation Development',
    para2: 'You Will You Will Change the World',
  },
  {
    id: 2,
    title1: '青年創新創業',
    title2: '你將改變世界',
    para1: 'Youth Innovation and Incubation Development',
    para2: 'You Will You Will Change the World',
  },
  {
    id: 3,
    title1: '青年創新創業',
    title2: '你將改變世界',
    para1: 'Youth Innovation and Incubation Development',
    para2: 'You Will You Will Change the World',
  },
]

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        style={{
          maxWidth: '90vw',
          maxHeight: '50vh',
          background: 'transparent',
          marginBottom: '1rem',
        }}
        className='mySwiper'
      >
        {data.map((slide) => {
          const { id, title1, title2, para1, para2 } = slide
          return (
            <SwiperSlide key={id}>
              <div class='item'>
                <h4
                  class='white'
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '400',
                    lineHeight: '1',
                    color: '#fffffe',
                  }}
                >
                  {title1}
                </h4>
                <h4
                  class='white'
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '400',
                    lineHeight: '1',
                    color: '#fffffe',
                  }}
                >
                  {title2}
                </h4>
                <p
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    lineHeight: '0.9',
                    color: '#fffffe',
                  }}
                >
                  {para1}
                </p>
                <p
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    lineHeight: '0.7',
                    color: '#fffffe',
                  }}
                >
                  {para2}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
