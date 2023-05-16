class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.buid());
        shadow.appendChild(this.style());
        
    }

    buid(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card-left");

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card-right");
        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute('photo') || "assents/defaut.png"
        newsImage.alt = "Foto da noticia"
        cardRight.appendChild(newsImage);

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute('link-url')

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style(){
        const style = document.createElement('style');
        style.textContent = `
      
        
        .card{
            width: 80%;
            -webkit-box-shadow: 13px 14px 10px -14px rgba(0,0,0,0.96);
            -moz-box-shadow: 13px 14px 10px -14px rgba(0,0,0,0.96);
            box-shadow: 13px 14px 10px -14px rgba(0,0,0,0.96);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        
        }
        
        .card-left > a{
            margin-top: 15px;;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: 400;
        }
        .card-left > p {
            color: gray;
        }
        
        .card-left > span{
            font-weight: 400;
        }
        
        
        .card-right img{
            width: 250px;
            height: 190px;
        }
        `;

        return style
    }
}

customElements.define('card-news', Cardnews);