/*
 * @Author: Peanut
 * @Description:  实例化 - 入口文件
 * @Date: 2020-05-19 21:55:04
 * @Last Modified by: Peanut
 * @Last Modified time: 2020-05-19 23:23:11
 */
const { Wechaty } = require("wechaty");
const { PuppetPadplus } = require("wechaty-puppet-padplus");
const onFriendship = require("./listeners/on-friendship.js");
const puppet = new PuppetPadplus({
  // token: "puppet_padplus_9b52b76787196f50"
  token: "puppet_padplus_1fa58d1b1a98b39e"
});
const bot = new Wechaty({
  puppet,
  name: "WeChat-Robot"
});
bot.on("login", "./listeners/on-login.js");
bot.on("message", "./listeners/on-message");
bot.on("scan", "./listeners/on-scan");
bot.on("friendship", onFriendship(bot));
bot
  .start()
  .then(() => console.log("开始登陆微信"))
  .catch(e => console.error(e));
module.exports = bot;
