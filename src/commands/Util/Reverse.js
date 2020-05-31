const { Command } = require("discord-akairo");

module.exports = class ReverseCommand extends Command {
  constructor() {
    super("reverse", {
      aliases: ["reverse"],
      args: [
        {
          id: "text",
          prompt: {
            start: "Please provide some text",
          },
          match: "content",
        },
      ],
      description: {
        content: "Reverses a peice of text",
        usage: "reverse <text>",
      },
    });
  }

  exec(message, { text }) {
    return message.util.send(text.split("").reverse().join(""));
  }
};
