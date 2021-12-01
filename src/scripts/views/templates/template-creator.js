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
export {
  createDoaItemTemplate,
};
