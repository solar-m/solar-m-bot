const { Command } = require("discord-akairo");
const { inspect } = require("util");

const ms = require("ms");

module.exports = class EvalCommand extends Command {
  constructor() {
    super("eval", {
      aliases: ["eval", "evaluate"],
      args: [
        {
          id: "code",
          match: "content",
          prompt: {
            start: "Please provide something to eval.. I can't evaluate air.",
          },
        },
      ],
      description: {
        content: "Evaluates JavaScript code, and returns an output",
        usage: "eval <code>",
        examples: ["eval 2 + 4", "eval this.client.user.username"],
      },
      ownerOnly: true,
    });
  }

  async exec(message, { code }) {
    try {
      const hrStart = process.hrtime();
      let result = inspect(eval(code));
      const hrEnd = process.hrtime(hrStart);

      return message.util.send(
        `Result Ran in: ${ms(hrEnd[1] / 1000000)}\n\`\`\`js\n${
          result.length > 1900 ? `${result.substring(0, 1900)}...` : result
        }\`\`\``
      );
    } catch (error) {
      return message.util.send(`Error:\n\`\`\`js\n${error}\`\`\``);
    }
  }
};
