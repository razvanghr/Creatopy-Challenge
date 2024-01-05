interface ExtractedData {
  title?: string;
  description?: string;
  callToAction?: string;
}

export const dataExtractor = (input: string): ExtractedData => {
  const fields: string[] = input.split("\n\n");

  const extractedData: ExtractedData = {};

  fields.forEach((field) => {
    if (field.startsWith("Title:")) {
      extractedData.title = field.replace("Title: ", "");
    } else if (field.startsWith("Description:")) {
      extractedData.description = field.replace("Description: ", "");
    } else if (field.startsWith("Call to Action:")) {
      extractedData.callToAction = field.replace("Call to Action: ", "");
    }
  });

  return extractedData;
};
