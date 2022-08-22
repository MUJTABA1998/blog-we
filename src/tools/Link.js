import "../index.css";

class Link {
  static get toolbox() {
    return {
      title: "Link",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>`,
    };
  }

  render() {
    const link = document.createElement("a");
    const icon = document.createElement("span");
    icon.innerHTML =
      "<img src='./images/link.png' alt='icon' class='link-icon'>";
    link.appendChild(icon);
    icon.classList.add("link-icon");
    const input = document.createElement("input");
    input.classList.add("link-input");
    input.setAttribute("placeholder", "Enter Link");
    link.appendChild(input);
    link.classList.add("link-section");
    return link;
  }

  save(blockContent) {
    const link = blockContent.children[1].value;
    console.log(link);
    return {
      link,
    };
  }
}

export default Link;
