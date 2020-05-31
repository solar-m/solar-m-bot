const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = class MemeCommand extends Command {
  constructor() {
    super("meme", {
      aliases: ["meme", "sendmeme", "randommeme"],
      description: {
        content: "Shows you a nice meme",
      },
    });
  }

  async exec(message) {
    const res = await fetch(
      `https://www.reddit.com/r/memes.json?sort=top&t=week`
    );
    const { data } = await res.json();

    const safe = message.channel.nsfw
      ? data.children
      : data.children.filter((post) => !post.data.over_18);
    if (!safe.length) return message.util.send(`Couldn't get post.`);

    const post = safe[Math.floor(Math.random() * safe.length)];

    return message.util.send(
      new MessageEmbed()
        .setColor("#33cc33")
        .setAuthor(
          `${post.data.title}`,
          message.author.displayAvatarURL({ dynamic: true }),
          `https://reddit.com${post.data.permalink}`
        )
        .setImage(post.data.url)
        .setFooter(`👍 ${post.data.ups} ~ 💬 ${post.data.num_comments}`)
    );
  }
};
