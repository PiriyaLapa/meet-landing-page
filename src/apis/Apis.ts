import path from "path";

interface GalleryPicture {
  id: number;
  urlImg: string;
}

interface LandingPageData {
  header: {
    title: string;
    content: string;
  };
  galleryPic: GalleryPicture[];
  galleryCard: {
    smallTitle: string;
    Title: string;
    content: string;
  };
  footer: {
    title: string;
    content: string;
  };
}

// Define the landing page data
export const dataLandingPage: LandingPageData = {
  header: {
    title: "Your Title Here",
    content: "Your Content Here",
  },
  galleryPic: [
    {
      id: 1,
      urlImg: path.join(
        __dirname,
        "src",
        "assets",
        "desktop",
        "image-woman-in-videocall.jpg"
      ),
    },
    {
      id: 2,
      urlImg: path.join(
        __dirname,
        "src",
        "assets",
        "desktop",
        "image-man-texting.jpg"
      ),
    },
    {
      id: 3,
      urlImg: path.join(
        __dirname,
        "src",
        "assets",
        "desktop",
        "image-men-in-meeting.jpg"
      ),
    },
    {
      id: 4,
      urlImg: path.join(
        __dirname,
        "src",
        "assets",
        "desktop",
        "image-women-videochatting.jpg"
      ),
    },
  ],
  galleryCard: {
    smallTitle: "Gallery Card Small Title",
    Title: "Gallery Card Title",
    content: "Gallery Card Content",
  },
  footer: {
    title: "Footer Title",
    content: "Footer Content",
  },
};
