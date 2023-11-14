import { Vista1 } from './views/vista1.js'
import { Vista2 } from './views/vista2.js';
import { Vista3 } from './views/vista3.js';

class Game {
    constructor() {

        const div1 = document.getElementById('vista1')
        const div2 = document.getElementById('vista2')
        const div3 = document.getElementById('vista3')

        this.vista1 = new Vista1(this,div1)
        this.vista2 = new Vista2(this,div2)
        this.vista3 = new Vista3(this,div3)
        this.irAVista(this.vista1)
    }

    ocultar(){
        const vistas = [this.vista1, this.vista2, this.vista3];
        vistas.forEach(vista => {
            vista.mostrar(false);
        });
	}

    irAVista(vista) {
        this.ocultar();
        vista.mostrar(true);
    }
}

// Crear una instancia de la clase Game
window.onload = () => new Game()
