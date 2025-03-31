const addImage = () => {
    const newImage = {
        id: images.length + 1,
        src: 'https://scontent.fasu6-1.fna.fbcdn.net/v/t39.30808-6/486625066_1096377335862893_6208095750383997392_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWVTgeE_uZpWPNr3jzLU7TKApsTAPO5VYoCmxMA87lVpBd-L4T0Y3fk8mvSjy7LfgQPMqtTnKIBmECKNH8ILvg&_nc_ohc=5S5q0D7Tqm8Q7kNvgHzXGYa&_nc_oc=Adm91zAuzO09e34mnp_GvPXQc3_lVO5b1Ct_gRMuSSh_6O2CUOTBf95jHRJec2j949U&_nc_zt=23&_nc_ht=scontent.fasu6-1.fna&_nc_gid=wuKBZLVkh1Ulj_TarJ6Z7A&oh=00_AYECYHITULTHwvqyJGsklem9py9QpBZRcNQxVOUmr0DAFw&oe=67F081F7',
        title: `Imagen ${images.length + 1}`,
        likes: 0
    };
    setImages([...images, newImage]);
};

document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-btn");
    menuButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle("hidden");
        });
    });
});