const {
  AkairoClient,
  CommandHandler,
  ListenerHandler,
} = require("discord-akairo");

module.exports = class SolarClient extends AkairoClient {
  constructor(data = {}) {
    super({
      ownerID: data.owners,
      disableMentions: "everyone",
    });

    this.data = data;
  }

  commandHandler = new CommandHandler(this, {
    directory: require("path").join("src", "commands"),
    prefix: "sm?",
    argumentDefaults: {
      prompt: {
        start: (msg, str) =>
          `${msg.author}, ${str}\n\nYou can type \`cancel\` to cancel the command.`,
        retry: (msg, str) =>
          `${msg.author}, ${str}\n\nYou can type \`cancel\` to cancel the command.`,
        cancel: `Cancelled the command successfully.`,
        timeout: `Oooh... You took too long there..`,
        ended: `Too many tries. I can't let you use this command right now.`,
        time: 3e4,
        retries: 2,
      },
      otherwise: "",
    },
    handleEdits: true,
    commandUtil: true,
    automateCategories: true,
  });

  eventHandler = new ListenerHandler(this, {
    directory: require("path").join("src", "events"),
  });

  async init() {
    this.commandHandler.loadAll();
    this.eventHandler.loadAll();
  }

  async start() {
    await this.init();
    return super.login(this.data.token);
  }
};
