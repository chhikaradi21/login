import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    elementsArr = [];

    elementTypes = {
        heading: {name: 'heading', content: '<h1 contenteditable="true" class="element-custom display-inline" > Heading </h1>'},
        image: {
            name: 'image',
            content: '<img id="my-image" class="card-img-top image-custom element-custom display-inline" src="/assets/images/default-img.gif" alt="Smiley face">'
        },
        paragraph: {
            name: 'paragraph',
            content: '<p contenteditable="true" class="element-custom display-inline" > Enter text here </p>'
        },
        link: {
            name: 'link',
            content: '<a href="https://www.google.com" class="card-link element-custom display-inline" target="_blank">Click here to open goole search</a>'
        }
    };

    addImageSrc(objType) {
        var index = $(this).index();
        console.log(index);

        // sample external image.
        // https://static.pexels.com/photos/34950/pexels-photo.jpg
        var imageSource = $('#image-source').val() || '/assets/images/default-img.gif';
        $(this).attr('src',imageSource);
    }

    renderElements(){
        for (var i = 0; i < this.elementsArr.length; i++) {
            var typeObj = this.elementsArr[i];
            if (typeObj.name === this.elementTypes.heading.name) {
                document.getElementById('painting-area').innerHTML += this.elementTypes.heading.content;
            } else if (typeObj.name === this.elementTypes.image.name) {
                document.getElementById('painting-area').innerHTML += this.elementTypes.image.content;
                var imagesArr = document.getElementsByClassName("image-custom");
                for(var j = 0; j < imagesArr.length; j++){
                    imagesArr[j].addEventListener("click", this.addImageSrc);
                }

            } else if (typeObj.name === this.elementTypes.paragraph.name) {
                document.getElementById('painting-area').innerHTML += this.elementTypes.paragraph.content;
            } else if (typeObj.name === this.elementTypes.link.name) {
                document.getElementById('painting-area').innerHTML += this.elementTypes.link.content;
            }

        }
    };

    clearArea(){
        this.elementsArr = [];
        this.renderElements();
        document.getElementById('painting-area').innerHTML = '';
    }

    addElement(pTypeObj) {
        this.elementsArr.push(pTypeObj);
        document.getElementById('painting-area').innerHTML = '';
        this.renderElements();
    }


    ngOnInit() {
    }

}
