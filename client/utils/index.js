export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};


export const jobRoute = `https://jobbingapi.onrender.com/api/jobs`



// export const jobRoute = 'http://localhost:3005/api/jobs';
// export const url = "https://jobbingapi.onrender.com/jobs";