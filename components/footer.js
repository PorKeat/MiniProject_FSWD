export default function renderFooter() {
  const currentPath = window.location.pathname;

  const getImageHref = (path) => {
    if (currentPath.includes('pages')) {
      return `../../assets/image/${path}`;
    }
    return `../assets/image/${path}`;
  };

  const getPageHref = (path) => {
    if (path === 'index.html') {
      return `/src/index.html`;
    }
    return `/src/pages/${path}`;
  };

  const footerHTML = `
      <footer class="w-full h-fit bg-[#141c2c] text-white">
        <div class="w-full mx-auto sm:px-10 px-4 pb-10">
          <div class="flex flex-col lg:flex-row gap-8 pt-12">
            <!-- Column 1 -->
            <div class="lg:flex-1">
              <img class="w-40" src="${getImageHref('logo2.png')}" alt="logo" />
              <p class="text-lg mb-8">
                Everything was seamless. The private guides were interesting
              </p>
              <ul class="text-gray-300 font-semibold space-y-3">
                <li class="flex items-center gap-3">
                  <i class="fa-solid fa-location-dot text-[#2a9d8f]"></i>
                  <span>Sarbet, Addis Ababa, Ethiopia</span>
                </li>
                <li class="flex items-center gap-3">
                  <i class="fa-solid fa-phone text-[#2a9d8f]"></i>
                  <span>(+251) 913 4***30</span>
                </li>
                <li class="flex items-center gap-3">
                  <i class="fa-solid fa-envelope text-[#2a9d8f]"></i>
                  <span>sammytg66@gmail.com</span>
                </li>
              </ul>
  
              <!-- Socials -->
              <div class="flex gap-4 mt-6">
                <a
                  href="#"
                  class="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:bg-[#2a9d8f] transition-colors"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:bg-[#2a9d8f] transition-colors"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:bg-[#2a9d8f] transition-colors"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
  
            <!-- Column 2 -->
            <div class="mt-28 lg:flex-1 justify-center items-center text-center">
              <h2 class="text-3xl font-semibold mb-7">Links</h2>
              <ul class="space-y-4 text-lg">
                <li>
                  <a
                    href="${getPageHref('index.html')}"
                    class="hover:text-[#2A9D8F] transition-colors"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="${getPageHref('services.html')}"
                    class="hover:text-[#2A9D8F] transition-colors"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="${getPageHref('about.html')}"
                    class="hover:text-[#2A9D8F] transition-colors"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    href="${getPageHref('contact.html')}"
                    class="hover:text-[#2A9D8F] transition-colors"
                    >Contact</a
                  >
                </li>
                <li>
                  <a
                    href="${getPageHref('blog.html')}"
                    class="hover:text-[#2A9D8F] transition-colors"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
  
            <!-- Column 3 -->
            <div class="mt-28 lg:flex-1">
              <h2 class="text-3xl font-semibold mb-8">Latest News and Blogs</h2>
              <div class="space-y-6">
                <a href="${getPageHref('blogDetail.html')}" class="group block">
                  <div class="flex gap-4">
                    <div
                      class="relative overflow-hidden rounded-lg w-[200px] h-[150px]"
                    >
                      <img
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src="${getImageHref('AngkorWat.png')}"
                        alt="Angkor Wat"
                      />
                      <div
                        class="absolute inset-0 bg-[#2A9D8F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -left-full group-hover:left-0"
                      ></div>
                    </div>
                    <div>
                      <h3
                        class="text-lg group-hover:text-[#2A9D8F] transition-colors"
                      >
                        Angkor Wat, Siem Reap
                      </h3>
                      <p class="text-sm text-gray-500 mt-1">Nov 17, 2024</p>
                    </div>
                  </div>
                </a>
  
                <a href="${getPageHref('blogDetail.html')}" class="group block">
                  <div class="flex gap-4">
                    <div
                      class="relative overflow-hidden rounded-lg w-[200px] h-[150px]"
                    >
                      <img
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src="${getImageHref('PhnomPenh.png')}"
                        alt="Phnom Penh"
                      />
                      <div
                        class="absolute inset-0 bg-[#2A9D8F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -left-full group-hover:left-0"
                      ></div>
                    </div>
                    <div>
                      <h3
                        class="text-lg group-hover:text-[#2A9D8F] transition-colors"
                      >
                        Phnom Penh (PNH)
                      </h3>
                      <p class="text-sm text-gray-500 mt-1">Nov 01, 2024</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
  
          <hr class="border-gray-700 mt-14" />
  
          <div
            class="flex flex-col sm:flex-row justify-center items-center py-4 gap-2 text-center"
          >
            <span>&copy; 2024 Sammy-TG All Right Reserved</span>
            <span class="hidden sm:inline">|</span>
            <span>Thank You</span>
          </div>
        </div>
      </footer>
    `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
