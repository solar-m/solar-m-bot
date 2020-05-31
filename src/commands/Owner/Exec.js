const { Command } = require("discord-akairo");
const { execSync } = require("child_process");

module.exports = class ExecCommand extends Command {
  constructor() {
    super("exec", {
      aliases: ["exec", "execute"],
      args: [
        {
          id: "exec",
          prompt: {
            start: "Please provide something to run",
          },
          match: "content",
        },
      ],
      description: {
        content: "Executes a bash command",
        usage: "exec <command>",
      },
      ownerOnly: true,
    });
  }

  exec(message, { exec }) {
    return message.util.send(
      `\`\`\`bash\n${
        execSync(exec).toString().length > 1950
          ? `${execSync(exec).toString().substring(0, 1950)}...`
          : execSync(exec)
      }\`\`\``
    );
  }
};
