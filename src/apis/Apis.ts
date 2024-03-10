import urlImg1 from "../assets/desktop/image-man-texting.jpg";
import urlImg2 from "../assets/desktop/image-men-in-meeting.jpg";
import urlImg3 from "../assets/desktop/image-woman-in-videocall.jpg";
import urlImg4 from "../assets/desktop/image-women-videochatting.jpg";

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
      urlImg: urlImg1,
    },
    {
      id: 2,
      urlImg: urlImg2,
    },
    {
      id: 3,
      urlImg: urlImg3,
    },
    {
      id: 4,
      urlImg: urlImg4,
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
