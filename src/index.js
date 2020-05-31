const SolarClient = require("./structures/SolarClient");
const { token, prefix, owners } = require("../config");

const client = new SolarClient({
  token,
  prefix,
  owners,
});

(async () => {
  await client.start();
})();
