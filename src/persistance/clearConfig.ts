const clearConfig = () => {
  localStorage.removeItem("boardConfig");
  localStorage.removeItem("gameConfig");
  localStorage.removeItem("siteConfig");
};

export default clearConfig;
