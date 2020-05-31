const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");

module.exports = class DogCommand extends Command {
  constructor() {
    super("dog", {
      aliases: ["dog", "doggo"],
      description: {
        content: "Displays an image of a dog",
      },
    });
  }

  async exec(message) {
    const { message: msg, status } = await (
      await fetch(`https://dog.ceo/api/breeds/image/random`)
    ).json();

    if (status !== "success")
      return message.util.send(
        `There was an error with the API. Please check back later`
      );

    return message.util.send(
      new MessageEmbed().setColor("#33cc33").setImage(msg)
    );
  }
};
