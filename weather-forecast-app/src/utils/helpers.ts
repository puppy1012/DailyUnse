interface WeatherItem {
  category: string;
  fcstTime: string;
  fcstValue: string;
}


export function convertToGrid(lat: number, lon: number) {
  const RE = 6371.00877;
  const GRID = 5.0;
  const SLAT1 = 30.0;
  const SLAT2 = 60.0;
  const OLON = 126.0;
  const OLAT = 38.0;
  const XO = 43;
  const YO = 136;
  const DEGRAD = Math.PI / 180.0;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  let sn = Math.tan(Math.PI * 0.25 + slat2 / 2) / Math.tan(Math.PI * 0.25 + slat1 / 2);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + slat1 / 2);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat / 2);
  ro = (re * sf) / Math.pow(ro, sn);
  let ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD / 2);
  ra = (re * sf) / Math.pow(ra, sn);
  let theta = lon * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2 * Math.PI;
  if (theta < -Math.PI) theta += 2 * Math.PI;
  theta *= sn;
  const x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  const y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  return { nx: x, ny: y };
}

export function getLatestBaseTime() {
  const now = new Date();
  const baseTimes = [2, 5, 8, 11, 14, 17, 20, 23];

  for (let i = baseTimes.length - 1; i >= 0; i--) {
    const base = new Date(now);
    base.setHours(baseTimes[i], 10, 0, 0); // 발표 시간 +10분

    if (now >= base) {
      const baseDate = new Date(now);
      if (baseTimes[i] === 23 && now.getHours() < 2) {
        baseDate.setDate(baseDate.getDate() - 1);
      }

      return {
        base_date: baseDate.toISOString().slice(0, 10).replace(/-/g, ''),
        base_time: String(baseTimes[i]).padStart(2, '0') + '00',
      };
    }
  }

  // 발표 전이라면 전날 23시 기준 사용
  const baseDate = new Date(now);
  baseDate.setDate(baseDate.getDate() - 1);
  return {
    base_date: baseDate.toISOString().slice(0, 10).replace(/-/g, ''),
    base_time: '2300',
  };
}
export const getForecastValues = (items: any[]) => {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}00`;

  const getNearestFcstTime = (category: string) => {
    const times = items
      .filter((i) => i.category === category)
      .map((i) => i.fcstTime)
      .sort();

    return times.find((t) => t >= currentTime) ?? times[times.length - 1];
  };

  const getValue = (category: string) => {
    const time = getNearestFcstTime(category);
    return items.find((i) => i.category === category && i.fcstTime === time)?.fcstValue;
  };

  const skyCode = getValue('SKY');
  const rain = getValue('PCP');
  const pop = getValue('POP');
  const tmp = getValue('TMP');
  
  const skyEmoji  =
    skyCode === '1'
      ? '맑음☀️'
      : skyCode === '3'
      ? '구름많음⛅ '
      : skyCode === '4'
      ? '흐림☁️'
      : '정보 없음❓';

  return {
    temperature: tmp ?? 'N/A',
    rain: typeof rain === 'string' && rain.includes('없음') ? '0' : rain ?? '0',
    sky: skyEmoji ,
    pop: pop ?? '0',
  };
};




// export function extractForecastValues(items: WeatherItem[]) {
//   const now = new Date();
//   const nowHour = now.getHours();
//   const currentTime = `${String(nowHour).padStart(2, '0')}00`;

//   const timeCandidates = items
//     .filter((i) => i.category === 'TMP')
//     .map((i) => i.fcstTime)
//     .sort();

//   const nearestTime = timeCandidates.find((t) => t >= currentTime) ?? timeCandidates[0];

//   const getValue = (category: string): string => {
//     return (
//       items.find((i) => i.category === category && i.fcstTime === nearestTime)?.fcstValue ??
//       'N/A'
//     );
//   };

//   return {
//     nearestTime,
//     temperature: getValue('TMP'),
//     rain: getValue('PCP'), // 강수량
//     sky: getValue('SKY'), // 하늘 상태 (선택적)
//     pop: getValue('POP'), // 강수 확률 (선택적)
//   };
// }