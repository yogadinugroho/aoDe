// template untuk doa-doa
const createDoaItemTemplate = (data) => `
            <div class="doa-item">
                <div class="img-item">
                    <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg">
                    </div>
                <div class="title-item">
                    <h3 align="center">${data.nama}</h3>
                </div>
            </div>
`;

export default createDoaItemTemplate;
