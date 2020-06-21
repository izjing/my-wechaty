/**
 * 处理好友关系模块
 * by: Peanut
 */
const {
  Friendship
} = require("wechaty");
const config = require("../config");

// const bot = require("../app.js");
/**
 * 自动同意好友请求
 */

module.exports = bot => {
  return async function onFriendship(friendship) {
    if (friendship.type() === Friendship.Type.Receive) {
      await friendship.accept();
      const name = friendship.contact().name()
      // 根据名称获取好友
      const contact1 = await bot.Contact.find({name: 'ziji'})
      await contact1.say(config.allKeywords)
      // 根据备注获取好友
      const contact = await bot.Contact.find({alias: 'ziji'})
      await contact.say(`
      微信昵称：${name}
      微信号：${friendship.payload.contactId}
      申请理由：${friendship.hello()}`)
    }
  }
}
