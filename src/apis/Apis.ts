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
const dataLandingPage: LandingPageData = {
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
    { id: 2, urlImg: "URL_FOR_PIC_2" },
    { id: 3, urlImg: "URL_FOR_PIC_3" },
    { id: 4, urlImg: "URL_FOR_PIC_4" },
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
