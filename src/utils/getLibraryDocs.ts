import { getEndPoint } from "./endpoint";

export const getLibraryDocs = async (library: string) => {
  const endpoint = getEndPoint();
  const url = `${endpoint}/api/${library}.txt`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching documentation: ${response.statusText}`);
    }
    const documentationText = await response.text();
    return documentationText;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return (
      `No documentation found for this library. For information, when fetching ${url}, error message: ` +
      errorMessage
    );
  }
};
