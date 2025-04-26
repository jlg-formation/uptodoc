import { start } from "./commands/start";
import { version } from "./commands/version";

export async function runCli() {
  const args = process.argv.slice(2);

  const command = args[0];

  switch (command) {
    case "start":
      console.log("about to start...");
      await start();
      break;
    case "version":
      version();
      break;
    default:
      console.log("Unknown command.");
      console.log("Available commands: start, version");
      process.exit(1);
  }
}
