import React from 'react'
import styled from 'styled-components'

export default function ServiceReady() {
  return (
    <Wrapper>
     <ServiceReadyImage src="https://www.snubh.org/dept/static/images/common/bg/bgServiceReady.png" alt="서비스 준비 중 이미지" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 100px;

`

const ServiceReadyImage = styled.img`
    width: 280px;
    height: auto;
    object-fit: cover;    
    margin: 180px auto 140px;
    `


