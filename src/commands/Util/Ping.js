const { Command } = require("discord-akairo");

module.exports = class PingCommand extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping", "latency"],
      description: {
        content: "Displays the latency of the bot",
      },
    });
  }

  exec(message) {
    return message.util.send(`Pong! Latency is: \`${this.client.ws.ping} MS\``);
  }
};
