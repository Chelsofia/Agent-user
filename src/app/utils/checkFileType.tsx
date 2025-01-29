export const checkFileType = (fileUrl: string | undefined): "image" | "video" | "unknown" => {
    if (typeof fileUrl !== "string") return "unknown"; // Ensure it's a string
  
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "mov", "avi", "wmv", "flv", "webm", "mkv"];
  
    // Extract file extension from URL
    const extension = fileUrl.split(".").pop()?.toLowerCase();
  
    if (extension && imageExtensions.includes(extension)) {
      return "image";
    } else if (extension && videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  };
  