/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

const createDoaItemTemplate = (doa) => `
    <div class="doa-item">
        <div class="img-item">
            <img class="lazyload" data-src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg" alt="${doa.nama}">
        </div>
        <div class="content-item" id="content-item">
            <div class="title-item">
                <h3><a id="title-doa" href="${`/#/show/${doa.id_doa}`}">${doa.nama}</a></h3>
            </div>
        </div>
    </div>
`;
const createDetailDoaItemTemplate = (doa) => `
    <h2 align="center" id="title-page">${doa.nama}</h2>
    <div class="card mx-auto card-detail">
        <img class="lazyload" data-src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg" class="card-img-top" alt="${doa.nama}">
        <div class="card-body">
            <h3 class="card-title">Lafal :</h3>
            <p class="card-text" id="txt-lafal" align="justify">${doa.lafal}</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">Transliterasi :</h3>
            <p class="card-text" align="justify">${doa.transliterasi}</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">Artinya :</h3>
            <p class="card-text" align="justify">${doa.arti}</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">Sumber :</h3>
            <p class="card-text" align="justify">${doa.riwayat}</p>
        </div>
        <div class="container-button">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn-voice" ><i class="fas fa-volume-up"></i></button>
                <button class="btn-ingin" ><i class="fas fa-book-open"></i></button>
                <button class="btn-sudah" ><i class="fas fa-check-circle"></i></button>
            </div>
        </div>
    </div>
`;
export {
  createDoaItemTemplate,
  createDetailDoaItemTemplate,
};
