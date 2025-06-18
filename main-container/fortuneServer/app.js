// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
//
// const app = express();
// const port = 3004;
//
// app.use(cors());
//
// app.get('/api/fortune', async (req, res) => {
//     const { birth = '1980-11-09', target = '2016-09-11' } = req.query;
//     const [birthYear, birthMonth, birthDay] = birth.split('-');
//     const [targetYear, targetMonth, targetDay] = target.split('-');
//
//     try {
//         const response = await axios.get('https://api.un7.kr/api/v1/day', {
//             params: {
//                 'api-key': process.env.API_KEY,
//                 targetYear,
//                 targetMonth,
//                 targetDay,
//                 birthYear,
//                 birthMonth,
//                 birthDay,
//                 birthHour: 11,
//                 isLunar: 'false'
//             }
//         });
//
//         res.json({ result: response.data });
//
//     } catch (err) {
//         console.error('🚨 API 호출 오류:', err.response?.data || err.message);
//         res.status(500).json({ error: '운세 호출 실패' });
//     }
// });
//
// app.listen(port, () => {
//     console.log(`✅ Fortune 서버 실행 중: http://localhost:${port}`);
// });
