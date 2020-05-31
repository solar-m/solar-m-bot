const { Listener } = require("discord-akairo");

module.exports = class ReadyListener extends Listener {
  constructor() {
    super("ready", {
      event: "ready",
      emitter: "client",
    });
  }

  exec() {
    console.log(`${this.client.user.tag} is online!`);
  }
};
