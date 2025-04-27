# uptodoc

> A lightweight MCP (Model Context Protocol) server for IDE-integrated AI agents
> (e.g., GitHub Copilot, Roocode, Cursor, Windsurf).

## Overview

**uptodoc** provides a local server implementing the Model Context Protocol
(MCP).  
It allows AI assistants integrated into IDEs like VSCode to query a custom
documentation database, offering more relevant and up-to-date information about
libraries and frameworks.

Once configured in your IDE, the assistant will automatically communicate with
uptodoc to enhance coding suggestions.

Typical use cases:

- Fetching more recent or project-specific documentation
- Improving AI suggestions in coding assistants
- Extending Copilot, Roocode, Cursor, or Windsurf with custom knowledge

## Requirements

- **Node.js** version **22** or higher
- **VSCode** version **1.99.3** or higher (or any compatible MCP client)

Make sure these tools are installed and up to date before using uptodoc.

## Installation

You don't need to install **uptodoc** globally.  
It is automatically launched by your IDE when configured correctly.

Make sure `npx` is available on your system (comes with Node.js).

> Note: The package must be available on npm under the name
> `@jlgformation/uptodoc`.

## IDE Configuration

To use **uptodoc** in VSCode, add the following to your settings (e.g.,
`.vscode/settings.json`) :

```json
{
  // rest of the user settings.json config.
  "mcp": {
    "servers": {
      "uptodoc": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "@jlgformation/uptodoc", "start"],
        "env": {
          "UPTODOC_ENDPOINT": "https://<yoursite.org>/<path>"
        }
      }
    }
  }
}
```

Put the Github Copilot AI Assistant in `agent mode`. Then start the MCP server
on vscode.

You should be able to talk to the AI assistant. Do not hesitate to add in your
prompt the magical formula: `use uptodoc`.

Example:

```
I want to install the tototructruc library. How to do ? use uptodoc.
```

As you can see above, the endpoint for the documentation can be configured. By
default it is:

```
UPTODOC_ENDPOINT=https://raw.githubusercontent.com/jlg-formation/uptodoc/master/docs
```

And there are some stupid docs:
https://github.com/jlg-formation/uptodoc/tree/master/docs

## References

- https://code.visualstudio.com/docs/copilot/chat/mcp-servers

## Author

Jean-Louis GUENEGO <jlguenego@gmail.com>
