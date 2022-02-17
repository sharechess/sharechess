const download = (data: string | Blob, name: string, ext: string) => {
  const url = typeof data === "string" ? data : URL.createObjectURL(data);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}_${Date.now()}.${ext}`;
  link.target = "_blank";
  link.click();
  URL.revokeObjectURL(url);
};

export default download;
