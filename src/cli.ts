import { readdir } from "fs/promises";
import { resolve, extname, basename } from "path";

export async function runCli() {
  const args = process.argv.slice(2);
  const commandName = args[0];

  const commandsDir = resolve(import.meta.dirname, "./commands");
  const files = await readdir(commandsDir);

  // Collect available commands (only .ts files during dev, .mjs files after build)
  const availableCommands = files
    .filter((file) => extname(file) === ".ts" || extname(file) === ".js")
    .map((file) => basename(file, extname(file)));

  if (!commandName || !availableCommands.includes(commandName)) {
    console.log("❌ Unknown or missing command.");
    console.log("✅ Available commands:", availableCommands.join(", "));
    process.exit(1);
  }

  try {
    const commandFile = "file://" + resolve(commandsDir, `${commandName}.js`);
    const commandModule = await import(commandFile); // use `.js` after build
    if (typeof commandModule[commandName] === "function") {
      commandModule[commandName]();
    } else {
      console.log(`🚨 Command "${commandName}" is not properly exported.`);
      process.exit(1);
    }
  } catch (err) {
    console.error("Error running command:", err);
    process.exit(1);
  }
}
