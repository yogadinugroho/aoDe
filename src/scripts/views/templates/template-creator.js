/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

const createDoaItemTemplate = (doa) => `
    <div class="doa-item">
        <div class="img-item">
            <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg">
        </div>
        <div class="content-item">
            <div class="title-item">
                <h3><a id="title-doa" href="${`/#/show/${doa.id_doa}`}">${doa.nama}</a></h3>
            </div>
        </div>
    </div>
`;
const createDetailDoaItemTemplate = (doa) => `
    <h2 align="center">${doa.nama}</h2>
    <div class="card mx-auto card-detail">
        <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Lafal :</h5>
            <p class="card-text" align="justify">${doa.lafal}</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Transliterasi :</h5>
            <p class="card-text" align="justify">${doa.transliterasi}</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Artinya :</h5>
            <p class="card-text" align="justify">${doa.arti}</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Sumber :</h5>
            <p class="card-text" align="justify">${doa.riwayat}</p>
        </div>
        <div class="container-button">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    </div>
`;
export {
  createDoaItemTemplate,
  createDetailDoaItemTemplate,
};
