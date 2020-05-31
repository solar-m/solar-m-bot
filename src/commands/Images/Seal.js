const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");

module.exports = class SealCommand extends Command {
  constructor() {
    super("seal", {
      aliases: ["seal"],
      description: {
        content: "Displays an image of a seal",
      },
    });
  }

  async exec(message) {
    const { success, data } = await (
      await fetch(`https://apis.duncte123.me/seal`)
    ).json();

    if (!success)
      return message.util.send(
        `There was an error with the API. Please check back later`
      );

    return message.util.send(
      new MessageEmbed().setColor("#33cc33").setImage(data.file)
    );
  }
};
