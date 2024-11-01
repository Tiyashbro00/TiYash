const fs = require("fs");
module.exports = {
  config:{
        name: "tiyash",
        version: "1.0.1",
        prefix: false,
        permssion: 0,
        credits: "nayan", 
        description: "Fun",
        category: "no prefix",
        usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
        if (body.indexOf("tafriya")==0 || body.indexOf("Tafriya")==0 || body.indexOf("Efa")==0 || body.indexOf("efa")==0) {
                var msg = {
                                body: "═────🥰🥰────═\n- 🥀❝অনেক!!ইচ্ছে!!করে,♡︎🙂\nღ-❝তোমায়!! খুব!! শক্ত!! ❝করে!! জড়িয়ে!!\nধরে!! বলিᢀ!!࿐😘💋😍🥀\nღ-❝ভালোবাসি!! তোমায়!! ❝নিজের!!\nচেয়েও!! বেশিᢀ!!࿐😻🌺\n\❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P",
                                attachment: fs.createReadStream(__dirname + `/Joy/tafriyaefa.mp4`)
                        }
                        api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
                }
        },
        start: function({ nayan }) {

  }
}
