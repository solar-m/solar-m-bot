const { Command, version: AkairoVersion } = require("discord-akairo");
const { MessageEmbed, version: DiscordJSVersion } = require("discord.js");

const ms = require("ms");

module.exports = class InfoCommand extends Command {
  constructor() {
    super("info", {
      aliases: ["info", "information"],
      description: {
        content: "Displays the information about the bot.",
      },
    });
  }

  exec(message) {
    return message.util.send(
      new MessageEmbed()
        .setColor("#33cc33")
        .setDescription(
          `Hello! I am a bot developed by: <@!${this.client.ownerID[0]}>. Enjoy me, please!`
        )
        .addField(
          `General`,
          `**Guilds**: ${this.client.guilds.cache.size}\n**Users**: ${
            this.client.users.cache.size
          }\n**Uptime**: ${ms(this.client.uptime)}`,
          true
        )
        .addField(
          `Versions`,
          `**Node.js**: ${process.version}\n**Discord.js**: ${DiscordJSVersion}\n**Akairo**: ${AkairoVersion}`,
          true
        )
        .addField(
          `Links`,
          `**Invite**: [Link](https://discord.com/oauth2/authorize?client_id=716382280754397184&scope=bot&permissions=3072)\n**GitHub**: [Link](https://github.com/solar-m/solar-m-bot)`,
          true
        )
    );
  }
};
