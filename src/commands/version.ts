import { version as packageVersion } from "../../package.json";

export function version() {
  console.log(`Version: ${packageVersion}`);
}
