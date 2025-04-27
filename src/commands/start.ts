import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import packageJson from "../../package.json";
import { getEndPoint } from "../utils/endpoint";
import { getLibraryDocs } from "../utils/getLibraryDocs";

export async function start() {
  const endpoint = getEndPoint();
  console.log("endpoint: ", endpoint);
  // Create an MCP server
  const server = new McpServer({
    name: "Demo",
    version: packageJson.version,
    description:
      "Retrieves up-to-date documentation and code examples for any library.",
  });

  // Add an addition tool
  server.tool(
    "get_subject",
    { a: z.number(), b: z.number() },
    async ({ a, b }) => ({
      content: [{ type: "text", text: String(a + b) }],
    })
  );

  server.tool(
    "get-uptodate-docs-for-library",
    "Fetches up to date documentation for a library",
    {
      library: z.string().describe("Library name."),
    },
    async ({ library }) => {
      const documentationText = await getLibraryDocs(library);
      return {
        content: [
          {
            type: "text",
            text: documentationText,
          },
        ],
      };
    }
  );

  // Start receiving messages on stdin and sending messages on stdout
  console.log("About to start the server...");
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Server started!");
}
