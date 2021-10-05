
export class ShapeGeneratorService {

    private windowHeight = 0;
    private windowWidth = 0

    constructor(sidebarWidth: number) {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth - sidebarWidth;
    }

    setWindowWidth(sidebarWidth: number) {
        this.windowWidth = window.innerWidth - sidebarWidth;
    }

    get circle() {
        const randomSize = this.randomIntFromInterval(20, 80);
        const randomTop = this.randomIntFromInterval(randomSize + 5, this.windowHeight - randomSize - 5);
        const randomLeft = this.randomIntFromInterval(randomSize + 5, this.windowWidth - randomSize - 5);
        return {
            'height': `${randomSize}px`,
            'width': `${randomSize}px`,
            'background-color': this.getRandomColor(),
            'border-radius': '50%',
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get square() {
        const randomSize = this.randomIntFromInterval(20, 80);
        const randomTop = this.randomIntFromInterval(randomSize + 5, this.windowHeight - randomSize - 5);
        const randomLeft = this.randomIntFromInterval(randomSize + 5, this.windowWidth - randomSize - 5);
        return {
            'height': `${randomSize}px`,
            'width': `${randomSize}px`,
            'background-color': this.getRandomColor(),
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get rectangle() {
        const randomSizeHeight = this.randomIntFromInterval(15, 50);
        const randomSizeWidth = this.randomIntFromInterval(30, 100);
        const randomTop = this.randomIntFromInterval(randomSizeHeight + 5, this.windowHeight - randomSizeHeight - 5);
        const randomLeft = this.randomIntFromInterval(randomSizeWidth + 5, this.windowWidth - randomSizeWidth - 5);
        return {
            'height': `${randomSizeHeight}px`,
            'width': `${randomSizeWidth}px`,
            'background-color': this.getRandomColor(),
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get triangleUp() {
        const randomSides = this.randomIntFromInterval(15, 50);
        const randomBottomSide = randomSides * 2;
        const randomTop = this.randomIntFromInterval(randomSides + 5, this.windowHeight - randomSides - 5);
        const randomLeft = this.randomIntFromInterval(randomBottomSide + 5, this.windowWidth - randomBottomSide - 5);
        return {
            'height': '0',
            'width': '0',
            'border-left': `${randomSides}px solid transparent`,
	        'border-right': `${randomSides}px solid transparent`,
	        'border-bottom': `${randomBottomSide}px solid ${this.getRandomColor()}`,
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get triangleDown() {
        const randomSides = this.randomIntFromInterval(15, 50);
        const randomTopSide = randomSides * 2;
        const randomTop = this.randomIntFromInterval(randomSides + 5, this.windowHeight - randomSides - 5);
        const randomLeft = this.randomIntFromInterval(randomTopSide + 5, this.windowWidth - randomTopSide - 5);
        return {
            'height': '0',
            'width': '0',
            'border-left': `${randomSides}px solid transparent`,
	        'border-right': `${randomSides}px solid transparent`,
	        'border-top': `${randomTopSide}px solid ${this.getRandomColor()}`,
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get triangleLeft() {
        const randomSides = this.randomIntFromInterval(15, 50);
        const randomRightSide = randomSides * 2;
        const randomTop = this.randomIntFromInterval(randomRightSide + 5, this.windowHeight - randomRightSide - 5);
        const randomLeft = this.randomIntFromInterval(randomSides + 5, this.windowWidth - randomSides - 5);
        return {
            'height': '0',
            'width': '0',
            'border-top': `${randomSides}px solid transparent`,
	        'border-right': `${randomRightSide}px solid ${this.getRandomColor()}`,
	        'border-bottom': `${randomSides}px solid transparent`,
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    get triangleRight() {
        const randomSides = this.randomIntFromInterval(15, 50);
        const randomLeftSide = randomSides * 2;
        const randomTop = this.randomIntFromInterval(randomLeftSide + 5, this.windowHeight - randomLeftSide - 5);
        const randomLeft = this.randomIntFromInterval(randomSides + 5, this.windowWidth - randomSides - 5);
        return {
            'height': '0',
            'width': '0',
            'border-top': `${randomSides}px solid transparent`,
	        'border-left': `${randomLeftSide}px solid ${this.getRandomColor()}`,
	        'border-bottom': `${randomSides}px solid transparent`,
            'position': 'absolute',
            'top': `${randomTop}px`,
            'left': `${randomLeft}px`
        };
    }

    private randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    private getRandomColor() {
        const randomColor = this.randomIntFromInterval(1, 10);
        switch(randomColor) {
            case 1: {
                return 'Red';
            }
            case 2: {
                return 'DarkMagenta';
            }
            case 3: {
                return 'Tomato';
            }
            case 4: {
                return 'DodgerBlue';
            }
            case 5: {
                return 'MediumSeaGreen';
            }
            case 6: {
                return 'Gray';
            }
            case 7: {
                return 'SlateBlue';
            }
            case 8: {
                return 'Violet';
            }
            case 9: {
                return 'LightGray';
            }
            case 10: {
                return 'Aquamarine';
            }
        }
        return '';
    }
}