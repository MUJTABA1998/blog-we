import "../index.css";

class SimpleImage {
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("img-container");
    const label = document.createElement("label");
    const icon = document.createElement("span");
    icon.innerHTML =
      "<img src='./images/icons8-image-96.png' alt='icon' style={{width:'40px', height:'40px'}}/>";
    icon.classList.add("icon-image");
    label.appendChild(icon);
    const file = document.createElement("input");
    file.classList.add("file-input");
    file.type = "file";
    label.appendChild(file);
    div.appendChild(label);
    file.addEventListener("change", async (e) => {
      const base = createImgUrl(e.target.files[0]);
      label.classList.remove("hide-label");
      icon.classList.remove("icon-image");
      icon.classList.add("hide-icon");
      const img = document.createElement("img");
      img.classList.add("img-show");
      img.src = base;
      div.appendChild(img);
    });
    return div;
  }

  save(blockContent) {
    const main = blockContent.children;
    const url = createImgUrl(main[0].children[1].files[0]);
    return {
      url,
    };
  }
}

const createImgUrl = (img) => {
  return URL.createObjectURL(img);
};

export default SimpleImage;
