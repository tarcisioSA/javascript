    class tituloDinamico extends HTMLElement{
        constructor(){
            super();

            const shadow = this.attachShadow({mode: "open"});
            
            //Base do componente
            const componentRoot = document.createElement("h1");
            componentRoot.textContent = this.getAttribute("nome");

            //estilização do componente
            const style = document.createElement('style');
            style.textContent = `
            h1{
                color: black;
            }
            
            `;
            //enviando para a shadow
            shadow.appendChild(componentRoot);
            shadow.appendChild(style);

        }
    }

    customElements.define("titulo-dinamico", tituloDinamico);