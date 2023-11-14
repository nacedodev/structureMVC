import { Vista } from "./vista.js"

export class Vista3 extends Vista{
    constructor(controlador,base){
        super(controlador,base)

        const btn1 = this.base.querySelectorAll('button')[0]
        btn1.onclick = this.pulsarBoton3

        const head = document.createElement('h2')
        head.textContent = 'Contenido de la vista3'
    
        const p = document.createElement('p')
        p.textContent = 'Contenido de prueba para la Vista 3. Puedes cambiar este texto y agregar elementos adicionales según lo que estás construyendo.'

        this.base.appendChild(head)
        this.base.appendChild(p)
    }
    pulsarBoton3 = () => this.controlador.irAVista(this.controlador.vista1)
}