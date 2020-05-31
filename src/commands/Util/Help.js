const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

module.exports = class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "commands", "cmds"],
      args: [
        {
          id: "cmd",
          type: "commandAlias",
        },
      ],
      description: {
        content: "Displays the commands, or information on a specific command",
        usgae: "help [commnad]",
      },
    });
  }

  exec(message, { cmd }) {
    const embed = new MessageEmbed();

    if (!cmd) {
      for (const category of this.handler.categories
        .filter(
          (c) =>
            ![
              ...(this.client.ownerID.includes(message.author.id)
                ? []
                : ["Owner"]),
            ].includes(c.id)
        )
        .values()) {
        embed.addField(
          `${category.id} [${category.size}]`,
          category.map((cmd) => `\`${cmd.aliases[0]}\``).join(", ") || "None"
        );
      }

      return message.util.send(
        embed
          .setColor("#33cc33")
          .setDescription(
            `Hello! I am ${this.client.user.username}! I am just a simple bot that offers some features. Please enjoy what we have though! ^.^`
          )
          .setAuthor(
            `Commands | ${message.author.username}`,
            message.author.displayAvatarURL()
          )
      );
    }

    return message.util.send(
      embed
        .setColor("#33cc33")
        .setAuthor(
          `${cmd} | ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setDescription(
          `Aliases: ${cmd.aliases
            .map((a) => `\`${a}\``)
            .join(", ")}\nDescription: ${cmd.description.content}`
        )
    );
  }
};
