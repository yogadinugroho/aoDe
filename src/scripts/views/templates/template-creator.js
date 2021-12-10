/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

const createDoaItemTemplate = (doa) => `
    <div class="doa-item">
        <div class="img-item">
            <img class="lazyload" data-src="${doa.gambar}" alt="${doa.nama}">
        </div>
        <div class="content-item" id="content-item">
            <div class="title-item">
                <h3><a id="title-doa" href="${`/#/show/${doa.id}`}">${doa.nama}</a></h3>
            </div>
        </div>
    </div>
`;
const createDetailDoaItemTemplate = (doa) => `
    <h2 tabindex="0" align="center" id="title-page">${doa.nama.toUpperCase()}</h2>
    <div class="card mx-auto card-detail">
        <img class="lazyload" data-src="${doa.gambar}" class="card-img-top" alt="${doa.nama}">
        <div class="card-body">
            <h3 tabindex="0" class="card-title">Lafal :</h3>
            <p class="card-text" id="txt-lafal" align="justify">${doa.ayat}</p>
        </div>
        <div class="card-body">
            <h3 tabindex="0" class="card-title">Latin :</h3>
            <p class="card-text" align="justify">${doa.latin}</p>
        </div>
        <div class="card-body">
            <h3 tabindex="0" class="card-title">Artinya :</h3>
            <p class="card-text" align="justify">${doa.artinya}</p>
        </div>
        <div class="container-button">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn-voice" aria-label="dengarkan latin"><i class="fas fa-volume-up"></i></button>
                <button class="btn-ingin" aria-label="ingin dihafal"><i class="fas fa-book-open"></i></button>
                <button class="btn-sudah" aria-label="sudah dihafal"><i class="fas fa-check-circle"></i></button>
            </div>
        </div>
    </div>
`;
export {
  createDoaItemTemplate,
  createDetailDoaItemTemplate,
};
