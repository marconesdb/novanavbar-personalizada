
        // Adicionar evento de clique ao botão do menu de serviços
        document.getElementById("services-menu").addEventListener("click", function() {
            var dropdownMenu = document.getElementById("dropdown-menu");
            if (dropdownMenu.classList.contains("active")) {
                dropdownMenu.classList.remove("active");
            } else {
                dropdownMenu.classList.add("active");
            }
        });

        // Adicionar evento de clique ao botão do menu toggle
        document.getElementById("menu-toggle").addEventListener("click", function() {
            var menuItems = document.querySelector('.menu-items'); // Corrigido para '.menu-items'
            var navbar = document.querySelector('.navbar');
            var logo = document.getElementById("logo");
            if (menuItems.style.display === "none" || menuItems.style.display === "") {
                menuItems.style.display = "flex";
                navbar.classList.add("active");
                logo.style.display = "none";
            } else {
                menuItems.style.display = "none";
                navbar.classList.remove("active");
                logo.style.display = "flex";
            }
        });