const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

module.exports = class AvatarCommand extends Command {
  constructor() {
    super("avatar", {
      aliases: ["avatar", "av", "pfp", "profilepicture"],
      args: [
        {
          id: "member",
          type: "member",
          default: (_) => _.member,
        },
      ],
      description: {
        content: "Displays the avatar of a user in the guild",
        usage: "avatar [member]",
      },
    });
  }

  exec(message, { member }) {
    return message.util.send(
      new MessageEmbed()
        .setColor("#33cc33")
        .setAuthor(
          `${
            member === message.member ? `Your` : member.user.username
          }'s Avatar`,
          undefined,
          member.user.displayAvatarURL({ dynamic: true })
        )
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    );
  }
};
