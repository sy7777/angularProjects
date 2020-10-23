let express = require("express");
let axios = require("axios");
let app = express();
app.get("/", (req, res) => {
  res.send("apiServer");
});
app.get("/api/index", async (req, res) => {
  let httpUrl =
    "https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX";
  let options = {
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Cookie":
        "s=cg1u2p83if; xq_a_token=3242a6863ac15761c18a8469b89065b03bd5e164; xq_r_token=729679220e12a2fbd19b15c94e6b7624c5ea8702; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwNDgwMzAzMSwiY3RtIjoxNjAzMzQ0MDEwNTQ0LCJjaWQiOiJkOWQwbjRBWnVwIn0.mCCeRiLyKU8KRDQb-gBR7FFNlPf50G5TiqowTNhuw3DFyJRcmrLAYgWwPxKZ3WDnpSVcn23TYOX8Aoc_GWqoS-N6V47MtoEAlM41mZrVX9-j6sIHGBE2adPXMaYBmZvImax9fuh5PKkOyqkQKS5yzi8rmw7MtGKpXSk4ECebtBWyYtdvz1D1tFENzlnY123uK9mORctw3aovl5wUqtn1Uz7jvBRpY6lkTwR63Vl3g5fHBSwlVbTmgRjPfUQtoKF53gx-ZTy6h_of4XtzWhE1cnFflenWmVhipWb1VGXgpnBpKkw8bctGyZVbLM6i1YwxCnyWnQnmGmmWabqX3PwdqQ; u=211603344059351; cookiesu=211603344059351; device_id=5c040507c2b2479f43caa5623fd27e1a; Hm_lvt_1db88642e346389874251b5a1eded6e3=1603344061; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1603351202",
      "Host": "stock.xueqiu.com",
      "Origin": "https://xueqiu.com",
      "Pragma": "no-cache",
      "Referer": "https://xueqiu.com/",
    //   "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36",
    },
  };
  let result;
  try {
    result = await axios.get(httpUrl, options);
  } catch (error) {
    console.log(error);
  }

  res.json(result.data);
});
app.listen(8080, () => {
  console.log("server start:", "http://localhost:8080");
});
