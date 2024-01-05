export const getTemplateSize = (templateType: string) => {
  switch (templateType) {
    case "instagram-post-template":
      return "512x512";
    case "twitter-header-template":
      return "512x512";
    case "instagram-story-template":
      return "1024x1024";
    default:
      return "";
  }
};
