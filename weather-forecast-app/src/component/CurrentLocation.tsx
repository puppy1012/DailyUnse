import React, { useEffect, useState } from 'react';
import { convertToGrid } from '../utils/helpers';

interface Props {
  onLocation: (coords: { nx: number; ny: number }) => void;
}

export default function CurrentLocation({ onLocation }: Props) {
  const [regionName, setRegionName] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`;
        const res = await fetch(url, {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY!}`,
          },
        });

        const data = await res.json();
        const region = data.documents?.[0];

        if (region) {
          const { nx, ny } = convertToGrid(parseFloat(region.y), parseFloat(region.x));
          onLocation({ nx, ny });
          setRegionName(region.address_name);

        }
      },
      (err) => {
        console.error('위치 정보 가져오기 실패', err);
        setRegionName('위치 정보를 가져올 수 없습니다.');

      }
    );
  }, []);

  return( 
  <span>{regionName ?? '로딩중...'}</span>

)}
