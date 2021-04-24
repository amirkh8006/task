**Title**
----
  Start Cron Job For Getting Data And Set It In Mongo And Redis

* **URL**

  http://localhost:3000/startJob

* **Method:**

  `GET`
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `Job Started...`
    
    

**Title**
----
  Stop Cron Job 

* **URL**

  http://localhost:3000/stopJob

* **Method:**

  `GET`
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `Job Stoped...`
    
    
    
**Title**
----
  Get Data From Target API

* **URL**

  http://localhost:3000/getData

* **Method:**

  `GET`
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `API DATA / JSON`
    
 
 
 **Title**
----
  Get Data From MongoDB DataBase

* **URL**

  http://localhost:3000/getDataFromDB

* **Method:**

  `GET`
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
    {
        "_id": "6083e3481f48e38e172eb7ba",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:16.246Z",
        "updatedAt": "2021-04-24T09:22:16.246Z"
    },
    {
        "_id": "6083e3501f48e38e172eb7bb",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:24.293Z",
        "updatedAt": "2021-04-24T09:22:24.293Z"
    },
    {
        "_id": "6083e3531f48e38e172eb7bc",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:27.736Z",
        "updatedAt": "2021-04-24T09:22:27.736Z"
    },
    {
        "_id": "6083e3591f48e38e172eb7bd",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:33.325Z",
        "updatedAt": "2021-04-24T09:22:33.325Z"
    }
]`




**Title**
----
  Get Data From Redis

* **URL**

  http://localhost:3000/getDataFromRedis

* **Method:**

  `GET`
* **Success Response:**
  

  * **Code:** 200 <br />
        **Content:** `[
    {
        "_id": "6083e3481f48e38e172eb7ba",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:16.246Z",
        "updatedAt": "2021-04-24T09:22:16.246Z"
    },
    {
        "_id": "6083e3501f48e38e172eb7bb",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:24.293Z",
        "updatedAt": "2021-04-24T09:22:24.293Z"
    },
    {
        "_id": "6083e3531f48e38e172eb7bc",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:27.736Z",
        "updatedAt": "2021-04-24T09:22:27.736Z"
    },
    {
        "_id": "6083e3591f48e38e172eb7bd",
        "p": "233,330",
        "h": "233,390",
        "l": "233,280",
        "d": "30",
        "dp": 0.01,
        "dt": "high",
        "t": "۱۳:۵۱:۳۴",
        "ts": "2021-04-24 13:51:34",
        "createdAt": "2021-04-24T09:22:33.325Z",
        "updatedAt": "2021-04-24T09:22:33.325Z"
    }
]`

    

