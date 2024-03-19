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
    title: string;
   content: string;
  };
  footer: {
    title: string;
    content: string;
  };
}

// Image
export interface ImgProps {
  urlImg: string;
}

// ScreenSizeDetectProps
export interface ScreenSizeDetectProps {
  screenNow: string;
  windowWidth: number;
  windowHeight: number;
}

export interface FooterProps{
  windowWidth:number;
}
export interface StyledFooterProps {
  $backgroundImageUrl: string;
}

export interface Headerprops {
  isDesktop:boolean;
}