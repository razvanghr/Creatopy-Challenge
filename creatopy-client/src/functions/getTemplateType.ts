export const getTemplateType = (
  selectedTemplate: string
): React.CSSProperties => {
  switch (selectedTemplate) {
    case "instagram-post-template":
      return { width: 500, height: 500, borderRadius: "30px", padding: "20px" };
    case "twitter-header-template":
      return { width: 1500, height: 500, padding: "20px" };
    case "instagram-story-template":
      return { width: 1080, height: "auto", padding: "20px" };
    default:
      return {};
  }
};
