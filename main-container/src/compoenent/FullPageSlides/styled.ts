// src/compoenent/FullPageSlides/styled.ts
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StepCircle = styled.span`
  border: 1px solid #000;
  border-radius: 40px;
  padding: 4px 16px;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.5;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 45px;
`;
export const InstallButtonWrapper = styled.div`
  background-color: #f8d57e;
  padding: 12px 24px;
  border-radius: 40px;
  cursor: pointer;
`;

export const InstallButtonText = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;
export const Spacing = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;
