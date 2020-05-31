const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");

module.exports = class AlpcaCommand extends Command {
  constructor() {
    super("alpca", {
      aliases: ["alpca"],
      description: {
        content: "Displays an image of an alpca",
      },
    });
  }

  async exec(message) {
    const { success, data } = await (
      await fetch(`https://apis.duncte123.me/alpaca`)
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
