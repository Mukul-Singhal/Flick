export const home = (req, res) => res.send("HOME");
export const search = (req, res) => res.send("search");
export const videos = (req, res) => {
  console.log("mukul");
  return res.send("videos");
};
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");
