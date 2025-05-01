const Navbar = () => {
  const currentPath = window.location.pathname;

  const getImageHref = (path) => {
    if (currentPath.includes("pages")) {
      return `../../assets/image/${path}`;
    }
    return `../assets/image/${path}`;
  };

  const getPageHref = (path) => {
    if (path === "index.html") {
      return `/src/index.html`;
    }
    return `/src/pages/${path}`;
  };

  return `
      <section
        id="nav"
        class="flex items-center justify-between py-4 px-6 w-[75%] mx-auto text-amber-50 fixed left-0 right-0 z-[100] rounded-full transition-all duration-300 top-5 ease-in-out"
      >
        <div class="flex items-center gap-2">
          <img
            src="${getImageHref("logo2.png")}"
            alt="Logo"
            class="h-[25px] w-[20px] object-cover"
          />
          <h1 class="font-black tracking-wide text-lg text-[#f5f5f5]">
            Sabay<span class="text-[#2A9D8F]">Trip</span>
          </h1>
        </div>
        <ul class="flex gap-7 mr-4 font-medium text-[16px]">
          <li class="relative group">
            <a
              href="${getPageHref("index.html")}"
              class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>
          <li class="relative group">
            <a
              href="${getPageHref("services.html")}"
              class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300"
            >
              Services
            </a>
          </li>
          <li class="relative group">
            <a
              href="${getPageHref("about.html")}"
              class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300"
            >
              About Us
            </a>
          </li>
          <li class="relative group">
            <a
              href="${getPageHref("contact.html")}"
              class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300"
            >
              Contact
            </a>
          </li>
          <li class="relative group">
            <a
              href="${getPageHref("blog.html")}"
              class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300"
            >
              Blog
            </a>
          </li>
        </ul>
  
        <div class="flex gap-4">
          <button class="cursor-pointer">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            class="bg-[#2A9D8F] hover:bg-[#21867A] py-2 px-4 rounded-full transition duration-300"
          >
            Log In
          </button>
        </div>
      </section>
      <!-- search -->
      <div
        id="searchModal"
        class="fixed inset-0 bg-[rgba(36,36,36,0.9)] bg-opacity-90 backdrop-blur-[15px] flex items-center justify-center z-[9999] hidden"
      >
        <button
          id="closeModal"
          class="absolute top-6 right-10 text-white text-3xl hover:text-[#2A9D8F] transition duration-300 cursor-pointer"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="w-[80%] mx-auto px-6">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-8 py-3 border-[#2A9D8F] text-white text-lg focus:outline-none border-b-4"
          />
          <button
            class="bg-[#2A9D8F] hover:bg-[#21867A] p-[14px] rounded-4xl w-full mt-5 text-md font-medium text-[#f5f5f5] tracking-widest cursor-pointer"
          >
            SEARCH
          </button>
        </div>
      </div>
    `;
};

const NavbarScript = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar").innerHTML = Navbar();

    const searchBtn = document.querySelector(".fa-magnifying-glass");
    const modal = document.getElementById("searchModal");
    const closeBtn = document.getElementById("closeModal");
    const navbar = document.getElementById("nav");

    searchBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        navbar.classList.remove("w-[75%]", "rounded-full", "top-5");
        navbar.classList.add(
          "w-[100%]",
          "top-0",
          "bg-[rgba(36,36,36,0.1)]",
          "backdrop-blur-[32px]"
        );
      } else {
        navbar.classList.remove(
          "w-[100%]",
          "top-0",
          "bg-[rgba(36,36,36,0.1)]",
          "backdrop-blur-[32px]"
        );
        navbar.classList.add("w-[75%]", "rounded-full", "top-5");
      }
    });
  });
};

export default NavbarScript;
