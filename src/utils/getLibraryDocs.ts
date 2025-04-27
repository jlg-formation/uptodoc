import { getEndPoint } from "./endpoint";

export const getLibraryDocs = async (library: string) => {
  const endpoint = getEndPoint();
  const url = `${endpoint}/api/${library}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching documentation: ${response.statusText}`);
    }
    const documentationText = await response.json();
    return documentationText;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return (
      "No documentation found for this library. For information, error message: " +
      errorMessage
    );
  }
};
