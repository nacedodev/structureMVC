import { Vista } from "./vista.js"

export class Vista1 extends Vista{
    constructor(controlador , base){
        super(controlador,base)

        const btn1 = this.base.querySelectorAll('button')[0]
        btn1.onclick = this.pulsarBoton1

        const head = document.createElement('h2')
        head.textContent = 'Contenido de la vista1'
    
        const p = document.createElement('p')
        p.textContent = 'Este es un contenido de prueba para la Vista 1. Puedes agregar cualquier tipo de información que desees aquí.'

        this.base.appendChild(head)
        this.base.appendChild(p)
    }
    
    pulsarBoton1 = () => this.controlador.irAVista(this.controlador.vista2)
}