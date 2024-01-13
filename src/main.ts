import "./style.scss"; 
import $ from 'jquery';





// THE CONTENT OF NAVBAR HAD TO BE DONE REVERSELY DUE TO UNKNOWN REASONS


class customHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- PLEASE COPY FROM HERE TO COPY STOP HERE TO INNERHTML MAIN.TS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css" integrity="sha512-tx5+1LWHez1QiaXlAyDwzdBTfDjX07GMapQoFTS74wkcPMsI3So0KYmFe6EHZjI8+eSG0ljBlAQc3PQ5BTaZtQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aref+Ruqaa|Lexend|Open+Sans">


        <header class="flex-centerize">
            
        <img src="https://anydayguide.com/uploads/events/holidays/commemorates/kedah.png">
    
        <nav>
                
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a style="cursor: pointer" class="dropdown-button">Point of Interest
        <i class="fa-solid fa-caret-down"></i></a>
        
        <div class="dropdown-content"> 
        <a href="attractions.html">Attractions</a>
        <a href="amenities.html">Amenities</a>
        </div>
        
        <a href="staff.html">Administration</a>
        <a href="newsroom.html">Newsroom</a>
        <a href="contacts.html">Contacts</a>
        
        </nav>
        
        
        </header>
        <!-- COPY STOP HERE -->
        `
    }
}

customElements.define ('custom-header', customHeader)








// DROPDOWN CONFIGURATIONS

let isMouseOverDropdownButton = false;

let dropdownButton = document.querySelector('.dropdown-button');

let myQuerySelector = document.querySelector('.dropdown-content');


dropdownButton?.addEventListener('mouseover', () => {
    isMouseOverDropdownButton = true;
    console.log(isMouseOverDropdownButton)
    myQuerySelector?.classList.add('show');
});
myQuerySelector?.addEventListener('mouseover', () => {
    isMouseOverDropdownButton = true;
    console.log(isMouseOverDropdownButton)
    myQuerySelector?.classList.add('show');
});

dropdownButton?.addEventListener('mouseout', () => {
    isMouseOverDropdownButton = false;
    console.log(isMouseOverDropdownButton)
    myQuerySelector?.classList.remove('show');
});

myQuerySelector?.addEventListener('mouseout', () => {
    isMouseOverDropdownButton = false;
    console.log(isMouseOverDropdownButton)
    myQuerySelector?.classList.remove('show');
});









// DETECT DARK MODE

let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
console.log(theme);
if (theme == 'dark') {
    document.querySelector('body')?.classList.add('dark-theme');
} else {
    document.querySelector('body')?.classList.add('light-theme');
}









// ELIMINATING FOUC

$( document ).ready(function() {
    console.log( "ready!" );
    document.body.style.visibility = 'visible';
});






// FOR ATTRACTIONS PAGE

class imageAlbum extends HTMLElement {
    connectedCallback() {

        let attractions: any[] = [
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/padi.jpg',   'Kedai 1', 'Description kedai 1'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/lake.jpg',   'Kedai 2', 'Description kedai 2'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/telaga.jpg', 'Kedai 3', 'Description kedai 3'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/padi.jpg',   'Kedai 1', 'Description kedai 1'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/lake.jpg',   'Kedai 2', 'Description kedai 2'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/telaga.jpg', 'Kedai 3', 'Description kedai 3'],
        ];
        
        let starsHTML = '';
        
        for (let i = 0; i < attractions.length; i++) {
            starsHTML += '<div class="attractions-images img'+ (i+1) +'">';
            starsHTML += '<p>'+ attractions[i][2] +'</p>';
            starsHTML += '<h5>'+ attractions[i][1] +'</h5>';
            starsHTML += '<div class="gradient-overlay"></div></div>';

            starsHTML += '<style>';
            starsHTML += '.img'+ (i+1) +'{';
            starsHTML += 'background-image: url('+ attractions[i][0] +');';
            starsHTML += 'animation: var(--anim-preset-upIn) '+ (0.1*(i+1)) +'s;';
            starsHTML += '}';
            starsHTML += '</style>';
        }
        
        this.innerHTML = starsHTML;
        
    }
}


customElements.define ('image-album', imageAlbum);




class foodAlbum extends HTMLElement {
    connectedCallback() {

        let attractions: any[] = [
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/padi.jpg',   'Kedai 1', 'Description kedai 1'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/lake.jpg',   'Kedai 2', 'Description kedai 2'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/telaga.jpg', 'Kedai 3', 'Description kedai 3'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/padi.jpg',   'Kedai 1', 'Description kedai 1'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/lake.jpg',   'Kedai 2', 'Description kedai 2'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/telaga.jpg', 'Kedai 3', 'Description kedai 3'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/padi.jpg',   'Kedai 1', 'Description kedai 1'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/lake.jpg',   'Kedai 2', 'Description kedai 2'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/telaga.jpg', 'Kedai 3', 'Description kedai 3'],
        ];
        
        let starsHTML = '';
        
        for (let i = 0; i < attractions.length; i++) {
            starsHTML += '<div class="food-images food-img'+ (i+1) +'">';
            
            starsHTML += '<div class="food-captions">';
            starsHTML += '<h5>'+ attractions[i][1] +'</h5>';
            starsHTML += '<p>'+ attractions[i][2] +'</p>';
            starsHTML += '</div>';
            
            starsHTML += '</div>';



            starsHTML += '<style>';
            starsHTML += '.food-img'+ (i+1) +'{';
            starsHTML += 'background-image: url('+ attractions[i][0] +');';
            starsHTML += 'animation: var(--anim-preset-leftIn) '+ (0.1*(i+1)) +'s;';
            starsHTML += '}';
            starsHTML += '</style>';
        }
        
        this.innerHTML = starsHTML;
        
    }
}


customElements.define ('food-album', foodAlbum);













// SMOOTH SCROLLING OFFSET

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    if (href) {
        $('html, body').animate({
           scrollTop: $(href).offset()!.top - 80, // Offset value
        }, 500, 'linear');
    }
});