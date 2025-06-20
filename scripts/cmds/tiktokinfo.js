const axios = require("axios");

module.exports = {
 config: {
 name: "tiktokinfo",
 aliases: ["tt","tikinfo"],
 version: "1.0",
 author: "sandy",
 countDown: 5,
 role: 0,
 shortDescription: "Get tiktok user info",
 longDescription: {
 en: "Provides you the information of tiktok user"
 },
 category: "tiktok",
 guide: {
 en: "{pn} <username>"
 }
 },

 onStart: async function ({ api, event, args, message }) {
 try { 
 const userName = args.join(' ');
 const response = await axios.get(`https://www.nguyenmanh.name.vn/api/tikInfo?query=${userName}&apikey=FSShCQne`);

 const message = {body:`Here's some information about :\n\──────── ${response.data.result.nickname} ────────\n\n❏Name: ${response.data.result.nickname}\n❏Username: ${response.data.result.uniqueId}\n❏Signature: ${response.data.result.signature}\n❏Total Follower: ${response.data.result.followerCount}\n❏Following: ${response.data.result.followingCount}\n❏Total Profile Heart: ${response.data.result.heartCount}\n❏Total Videos: ${response.data.result.videoCount}\n❏Profile Picture:`,attachment:await global.utils.getStreamFromURL(response.data.result.avatar)};
 return api.sendMessage(message, event.threadID);
 } catch (error) {
 console.error(error);
 message.reply("An error occurred while fetching the user information");
 }
 }
};
