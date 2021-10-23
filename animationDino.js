class Sprite {
    constructor(options) {
        this.ctx = options.ctx; // визуализация конкекста в 2д формате

        this.image = options.image; // переменная содержащая изображение

        this.width = options.width; // ширина
        this.height = options.height; // высота

        this.numberOfFrames = options.numberOfFrames || 1;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;

        this.start();
    }

    render() {
        this.ctx.clearRect(0,0, this.width / this.numberOfFrames, this.height);
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames + 675,
            0,
            this.width / this.numberOfFrames,
            this.height,
            0,
            0,
            this.width / this.numberOfFrames,
            this.height
        )
    }

    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 5;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    start() {
        let loop = () => {
            this.update();
            this.render();

            window.requestAnimationFrame(loop);
        }
        window.requestAnimationFrame(loop);
    }

}

const canvas = document.getElementById('Dino');
canvas.width = 1204;
canvas.height = 300;

let dinoImage = new Image();
dinoImage.src = 'https://wmpics.pics/di-648A.png';

let sprite = new Sprite({
    ctx: canvas.getContext('2d'),
    image: dinoImage,
    width: 179,
    height: 50,
    numberOfFrames: 4,
    ticksPerFrame: 10,
})
