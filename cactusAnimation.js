class Cactus {
    constructor(options) {
        this.ctx = options.ctx; // визуализация контекста

        this.image = options.image;

        this.width = options.width;
        this.height = options.height;

        this.render();
    }

    render() {
        this.ctx.drawImage( // функция для отображения
            this.image, // наше изображение
            this.width + 306,
            0,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        )
    }
}
const canvas_2 = document.getElementById('Cactus');
canvas_2.width = 1204;
canvas_2.height = 300;

let cactusImage = new Image();
cactusImage.src = 'https://wmpics.pics/di-648A.png';

let cactus = new Cactus({
    ctx: canvas_2.getContext('2d'),
    image: cactusImage,
    width: 25,
    height: 55
})



