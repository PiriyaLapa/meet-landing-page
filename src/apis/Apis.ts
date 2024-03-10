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
    title: "group chat for everyone",
    content:
      "Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.",
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
    smallTitle: "Built for modern use",
    Title: "Smarter meetings, all in one place",
    content:
      "Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.",
  },
  footer: {
    title: "Experience more together",
    content:
      "Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.",
  },
};
