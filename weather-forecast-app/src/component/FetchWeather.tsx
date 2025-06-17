import React, { useEffect, useState } from 'react';
import { getForecastValues, getLatestBaseTime } from '../utils/helpers';
import styled from 'styled-components';

interface Props {
  location: {
    nx: number;
    ny: number;
  };
}

export default function FetchWeather({ location }: Props) {
  const [temperature, setTemperature] = useState<string | null>(null);
  const [rain, setRain] = useState<string | null>(null);
  const [sky, setSky] = useState<string | null>(null);
  const [pop, setPop] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { nx, ny } = location;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { base_date, base_time } = getLatestBaseTime();
        const key = process.env.REACT_APP_WEATHER_API_KEY!;
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${key}&numOfRows=100&pageNo=1&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&dataType=JSON`;

        const res = await fetch(url);
        const raw = await res.text();

        const data = JSON.parse(raw);
        const { resultCode, resultMsg } = data?.response?.header || {};

        if (resultCode !== '00') {
          setError(resultMsg || '날씨 데이터 오류');
          return;
        }

        const items = data.response.body?.items?.item ?? [];
        const { temperature, rain,sky,pop } = getForecastValues(items);
        setTemperature(temperature);
        setRain(rain ?? '0');
        setSky(sky);
        setPop(pop ?? '0');      
      
      } catch (err) {
        console.error('fetch error', err);
        setError('날씨 정보를 불러오는 중 문제가 발생했습니다.');
      }
    };

    fetchWeather();
  }, [nx, ny]);

  return (
    <Wrapper>
      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <InfoGroup>
          <Divider>|</Divider>
          <InfoText>{temperature}℃</InfoText>
          <Divider>|</Divider>
          <InfoText>{sky}</InfoText>
          {/* <Divider>|</Divider>
          <InfoText>강수량 {rain === '강수없음' ? '0mm' : `${rain}mm`} ({pop}%)</InfoText> */}
        </InfoGroup>
      )}
    </Wrapper>
  );
}

  const Wrapper = styled.div`
  display: flex;
`;

const InfoGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Divider = styled.span`
  margin: 0 4px;
  color: #e5e7eb; /* Tailwind의 text-gray-200 */
`;

const ErrorText = styled.p`
  color: red;
`;

const InfoText = styled.span``;