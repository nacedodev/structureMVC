import { Vista } from "./vista.js"

export class Vista2 extends Vista{
    constructor(controlador,base){
        super(controlador,base)

        const btn1 = this.base.querySelectorAll('button')[0]
        btn1.onclick = this.pulsarBoton2

        const head = document.createElement('h2')
        head.textContent = 'Contenido de la vista2'
    
        const p = document.createElement('p')
        p.textContent = '¡Hola desde la Vista 2! Este es un texto de muestra para llenar este div. Puedes personalizarlo según tus necesidades.'
    

        this.base.appendChild(head)
        this.base.appendChild(p)
    }
    pulsarBoton2 = () => this.controlador.irAVista(this.controlador.vista3)
}