export const initialNodes = [
    {
        id: "1",
        data: { label: "test1" },
        position: { x: 0, y: 0 },
        type: "circle"
    },
    {
        id: "2",
        data: { label: "test2" },
        position: { x: 100, y: 100 },
        type: "circle"
    },
    {
        id: "3",
        data: { label: "test3" },
        position: { x: 0, y: 350 },
        type: "circle"
    },
    {
        id: "4",
        data: { label: "test4" },
        position: { x: 332, y: 253 },
        type: "circle"
    },
    {
        id: "5",
        data: { label: "test5" },
        position: { x: 245, y: 20 },
        type: "circle"
    },
    {
        id: "6",
        data: { label: "test6" },
        position: { x: 478, y: 400 },
        type: "circle"
    },
    {
        id: "7",
        data: { label: "test7" },
        position: { x: 564, y: 312 },
        type: "circle"
    }
];

export const initialEdges = [
    { id: "1-2", source: "1", target: "2", label: "USD", type: "straight" },
    { id: "1-5", source: "1", target: "5", label: "BTC", type: "straight" },
    { id: "2-3", source: "2", target: "3", label: "FFF", type: "straight" },
    { id: "2-4", source: "2", target: "4", label: "ABC", type: "straight" },
    { id: "3-1", source: "3", target: "1", label: "BTC", type: "straight" },
    { id: "3-5", source: "3", target: "5", label: "DOG", type: "straight" },
    { id: "4-7", source: "4", target: "7", label: "BTC", type: "straight" },
    { id: "5-7", source: "5", target: "7", label: "CAT", type: "straight" },
    { id: "6-7", source: "7", target: "6", label: "CAT", type: "straight" }
];

export const objectData = [
    {
        id: "xh0IZHmJ9ETF4s77pF2L9rr7Yt",
        currentBalance: "806 USDT",
        totalSent: "94,06.1506 USDT",
        totalRecieved: "8,406.1506 USDT",
        transRatio: "7/123",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "15/12/2022 10:06:05",
            amount: "12.678 USDT",
            isRecieved: false
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "07/09/2022 22:06:14",
            amount: "199.99 USDT",
            isRecieved: true
        }
    },
    {
        id: "53Kv6h2KG5chl28Bg5S6Ag26vL",
        currentBalance: "7030 USDT",
        totalSent: "45,686 USDT",
        totalRecieved: "70,301 USDT",
        transRatio: "6/76",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "25/05/2023 19:08:16",
            amount: "347.8 USDT",
            isRecieved: true
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "21/01/2023 21:10:49",
            amount: "40.19 USDT",
            isRecieved: false
        }
    },
    {
        id: "M7Es0q4J23dUdfWn15N8ucv2W7",
        currentBalance: "351 USDT",
        totalSent: "6,075 USDT",
        totalRecieved: "4,199 USDT",
        transRatio: "9/2",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "13/02/2023 11:49:54",
            amount: "18.678 USDT",
            isRecieved: false
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "27/11/2022 18:18:13",
            amount: "355.99 USDT",
            isRecieved: false
        }
    },
    {
        id: "91vrc2ra0Q2mMJ1ZA8g1UH5k7M",
        currentBalance: "645 USDT",
        totalSent: "6,377 USDT",
        totalRecieved: "1,231,263 USDT",
        transRatio: "5/143",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "07/05/2023 01:19:32",
            amount: "205 USDT",
            isRecieved: true
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "24/02/2023 05:14:31",
            amount: "3,508 USDT",
            isRecieved: true
        }
    },
    {
        id: "yJjy60vnB0VnV12PPZ9Y86deMy",
        currentBalance: "630 USDT",
        totalSent: "7,293 USDT",
        totalRecieved: "776 USDT",
        transRatio: "8/41",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "25/05/2023 04:56:24",
            amount: "233.58 USDT",
            isRecieved: true
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "07/12/2022 12:28:42",
            amount: "250.2 USDT",
            isRecieved: false
        }
    },
    {
        id: "qnl46237h41tq9BI2PC77z9BIi",
        currentBalance: "79 USDT",
        totalSent: "4637 USDT",
        totalRecieved: "6193 USDT",
        transRatio: "9/7",
        latestTransaction: {
            id: "sduf6hgq2BySDSAh1nicd398hBSGj",
            time: "05/08/2023 22:06:30",
            amount: "74.1 USDT",
            isRecieved: true
        },
        firstTransaction: {
            id: "0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R",
            time: "10/07/2023 20:30:59",
            amount: "450 USDT",
            isRecieved: false
        },
    },
    {
        id: "ti4g51FAA159QFWc7inH6kmsU9",
        currentBalance: "106 USDT",
        totalSent: "4,760 USDT",
        totalRecieved: "5,160 USDT",
        transRatio: "6/3",
        latestTransaction: {
            id: "Aasdf8hnjm1ySDSAh1nicd398hBSGj",
            time: "08/07/2023 02:59:08",
            amount: "160 USDT",
            isRecieved: false
        },
        firstTransaction: {
            id: "qnl46237h41tq9BI2PC77z9BIi",
            time: "26/09/2022 21:13:03",
            amount: "29 USDT",
            isRecieved: true
        }
    }
];