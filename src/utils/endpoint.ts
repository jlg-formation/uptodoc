export const getEndPoint = () => {
  const env = process.env;
  let endpoint = env.UPTODOC_ENDPOINT;
  if (!endpoint) {
    endpoint = "https://github.com/jlg-formation/uptodoc";
  }
  return endpoint;
};
