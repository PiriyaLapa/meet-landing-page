// BtnProp
export interface StyledBtnProp {
  btntype?: string;
}
export interface BtnDownloadProps {
  type: string;
}
// apis interface
export interface GalleryPicture {
  id: number;
  urlImg: string;
}

export interface LandingPageData {
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
