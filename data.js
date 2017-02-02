function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let i =0
module.exports = function(requestId) {
  let id = ++i;
  return {
    "object":"page",
    "entry":[
      {
        "id": id,
        "time":Date.now(),
        "messaging":[
          {
            "sender":{
              "id": getRandomIntInclusive(1, 20)
            },
            "recipient":{
              "id":"2134"
            },
            "timestamp":Date.now(),
            "request_id": id,
            "message":{
              "mid":"mid.1457764197618:41d102a3e1ae206a38",
              "seq":73,
              "text":"hello, world!"
            }
          }
        ]
      }
    ]
  };
}