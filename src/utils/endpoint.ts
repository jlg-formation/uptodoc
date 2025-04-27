export const getEndPoint = () => {
  const env = process.env;
  let endpoint = env.UPTODOC_ENDPOINT;
  if (!endpoint) {
    endpoint =
      "https://raw.githubusercontent.com/jlg-formation/uptodoc/master/docs";
  }
  return endpoint;
};
