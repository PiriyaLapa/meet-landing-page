const detectScreenSize = (windowWidth:number) => {
  return windowWidth <= 767
    ? "Mobile"
    : windowWidth <= 1023
    ? "Tablet"
    : windowWidth <= 1439
    ? "Laptop"
    : "Desktop";
};

export default detectScreenSize;
