const screenWidth = window.innerWidth;

const breakPoints = {
  isTablet: screenWidth >= 768,
  isDesktop: screenWidth >= 1280,
  isMobile: screenWidth < 768,
};

export const customMakeSelectStyles = {
  container: (styles) => ({
    ...styles,
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "16px"
      : "14px",
    minWidth: breakPoints.isDesktop ? "224px" : "",
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    height: "50px",
    background: "rgba(247, 247, 251, 1)",
    borderRadius: "14px",
    gap: breakPoints.isTablet ? (breakPoints.isDesktop ? "32px" : "16px") : "0",
    padding: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "14px 18px"
        : "8px 12px"
      : "4px 6px",
    alignContent: breakPoints.isDesktop ? "center" : "",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "16px"
      : "14px",
    fontWeight: "500",
    lineHeight: "20px",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "rgba(18, 20, 23, 1)" : "rgba(18, 20, 23, 0.2)",
    background: isFocused ? "rgba(247, 247, 251, 1)" : "#FFF",
    fontSize: breakPoints.isTablet ? "16px" : "12px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  menu: (styles) => ({
    ...styles,
    background: "#FFF",
    padding: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "14px 18px"
        : "14px 16px"
      : "10px 12px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    margin: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    gap: breakPoints.isTablet ? "8px" : "4px",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    "&::-webkit-scrollbar": {
      width: breakPoints.isTablet ? "8px" : "4px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.05)",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    width: breakPoints.isDesktop ? "117px" : "",
    color: "rgba(18, 20, 23, 1)",
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "12px"
      : "12px",
    fontWeight: 500,
    lineHeight: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "20px"
        : "16px"
      : "20px",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "fit-content"
        : "auto"
      : "auto",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
  }),
};

export const customPriceSelectStyles = {
  container: (styles) => ({
    ...styles,
    minHeight: "50px",
    maxHeight: "50px",
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "16px"
      : "10px",
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    height: "50px",
    background: "rgba(247, 247, 251, 1)",
    borderRadius: "14px",
    gap: breakPoints.isTablet ? (breakPoints.isDesktop ? "32px" : "16px") : "0",
    padding: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "14px 18px"
        : "8px 12px"
      : "4px 6px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "16px"
      : "10px",
    fontWeight: "500",
    lineHeight: "20px",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "rgba(18, 20, 23, 1)" : "rgba(18, 20, 23, 0.2)",
    background: isFocused ? "rgba(247, 247, 251, 1)" : "#FFF",
    fontSize: breakPoints.isTablet ? "16px" : "12px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  menu: (styles) => ({
    ...styles,
    background: "#FFF",
    padding: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "14px 18px"
        : "14px 16px"
      : "10px 12px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    margin: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    gap: breakPoints.isTablet ? "8px" : "4px",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    "&::-webkit-scrollbar": {
      width: breakPoints.isTablet ? "8px" : "4px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.05)",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    width: breakPoints.isDesktop ? "40px" : "",
    color: "rgba(18, 20, 23, 1)",
    fontSize: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "18px"
        : "12px"
      : "12px",
    fontWeight: 500,
    lineHeight: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "20px"
        : "16px"
      : "20px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    alignItems: breakPoints.isDesktop ? "start" : "center",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: breakPoints.isTablet
      ? breakPoints.isDesktop
        ? "fit-content"
        : "auto"
      : "auto",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    padding: "0",
  }),
};
