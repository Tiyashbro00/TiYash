module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100013494638409") {
		var aid = ["100089105937290"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল ❁𝐓𝐈𝐘𝐀𝐒𝐇𖣘 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না ❁𝐓𝐈𝐘𝐀𝐒𝐇𖣘 প্রচুর বিজি 🥵🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
