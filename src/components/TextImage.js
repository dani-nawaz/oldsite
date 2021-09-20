import React from 'react'
import styled from 'styled-components'
const data = [
  { id: 1, text: 'TEXT' },
  { id: 2, text: 'TEXT' },
  { id: 3, text: 'TEXT' },
  { id: 4, text: 'TEXT' },
  { id: 5, text: 'TEXT' },
  { id: 6, text: 'TEXT' },
]
const TextImage = () => {
  return (
    <Wrapper>
      <div className='inner-div'>
        {data.map((circle) => {
          return (
            <div className='bg-circle' key={circle.id}>
              <h3 className='text-align'>{circle.text}</h3>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default TextImage
const Wrapper = styled.div``
