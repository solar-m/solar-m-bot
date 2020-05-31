const { Command } = require("discord-akairo");

const mock = (str) =>
  str
    .split("")
    .map((char) =>
      Math.random() > 0.5 ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");

module.exports = class MockCommand extends Command {
  constructor() {
    super("mock", {
      aliases: ["mock"],
      args: [
        {
          id: "text",
          prompt: {
            start: "Please provide some text for me to mock",
          },
          match: "content",
        },
      ],
      description: {
        content:
          "Mocks a peice of text from switching to lowercase to uppercase",
        usage: "mock <text>",
      },
    });
  }

  exec(message, { text }) {
    return message.util.send(mock(text));
  }
};
