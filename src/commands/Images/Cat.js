const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");

module.exports = class CatCommand extends Command {
  constructor() {
    super("cat", {
      aliases: ["cat"],
      description: {
        content: "Displays an image of a cat",
      },
    });
  }

  async exec(message) {
    const { file } = await (await fetch(`http://aws.random.cat/meow`)).json();

    if (!file)
      return message.util.send(
        `There was an error with the API. Please check back later`
      );

    return message.util.send(
      new MessageEmbed().setColor("#33cc33").setImage(file)
    );
  }
};
