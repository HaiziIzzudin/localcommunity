import "./style.scss"; 
import $ from 'jquery';



// THE CONTENT OF NAVBAR

class customHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- PLEASE COPY FROM HERE TO COPY STOP HERE TO INNERHTML MAIN.TS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css" integrity="sha512-tx5+1LWHez1QiaXlAyDwzdBTfDjX07GMapQoFTS74wkcPMsI3So0KYmFe6EHZjI8+eSG0ljBlAQc3PQ5BTaZtQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aref+Ruqaa|Lexend|Open+Sans">


        <header class="flex-centerize">
            
        <img src="https://anydayguide.com/uploads/events/holidays/commemorates/kedah.png">
        
        <i class="fa-solid fa-bars"></i>

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






let dropdownButton = document.querySelector('.dropdown-button');
let myQuerySelector = document.querySelector('.dropdown-content');

dropdownButton?.addEventListener('click', () => {
    if (myQuerySelector?.classList.contains('show')) {
        console.log('Contains show. Removing...');
        myQuerySelector?.classList.remove('show');
    } else {
        console.log("Don't have show class. Adding...");
        myQuerySelector?.classList.add('show');
    }
});







let menuBtn = document.querySelector('.fa-bars') as HTMLElement;
let navExpand = document.querySelector('nav');

menuBtn?.addEventListener('click', () => {
    
    if (navExpand?.classList.contains('show')) {
        navExpand?.classList.remove('show');
    } else {
        navExpand?.classList.add('show');
    }
});









let tocBtn = document.querySelector('.toc') as HTMLElement;
let tocExpand = document.querySelector('.sidenav');

tocBtn?.addEventListener('click', () => {
    
    if (tocExpand?.classList.contains('sidenav-show')) {
        tocExpand?.classList.remove('sidenav-show');
    } else {
        tocExpand?.classList.add('sidenav-show');
    }
});













// DETECT DARK OR LIGHT MODE

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




















class adminCharts extends HTMLElement {
    connectedCallback() {

        const startIndex = parseInt(this.getAttribute('startIndex') || '0');
        const endIndex = parseInt(this.getAttribute('endIndex') || '0');

        let adminAssets: any[] = [
            ['', '', '', false],
            ["TUAN NASRUN BIN DATO' MOHD SHERIFF, AMK., BCK.", 'Yang Dipertua, Majlis Daerah Pendang', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/12/Encik-Nasrun-bin-DatoMohd-Sheriff-3-1024x1536.jpg', true],
            ['', '', '', false],
            ['EN. HAMDI BIN ABDULLAH ZAWAWI, BCK.', 'Ketua Penolong Pegawai Daerah Kanan (Pengurusan Tanah)', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg', true],
            ['DSP. ARRIZ SHAM BIN HAMEZAH', 'Ketua Polis Daerah Pendang', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/04/DSP_ARRIZ_SHAM-removebg-preview.png', true],
            ['KOSONG', 'Pegawai Kesihatan Daerah Pendang', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg', true],
            ['PUAN WIRDA ASMAT', 'Ketua Penolong Pengarah', 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/wirda-asmat.jpg', true],
            ['PN. NORFAZNI BINTI MUSTAFFA , BCK.', 'CIO - Setiausaha, Ketua Pegawai Maklumat', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/12/Puan-Norfazni-binti-Mustaffa-1-scaled.jpg', true],
            ['EN. SHAFIZ SHAM BIN HJ. MD NOOR', 'Jurutera Daerah JKR Pendang', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg', true],
            ['EN. AHMAD AZRI BIN SALLEH', 'Jurutera Daerah JPS Kota Setar', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg', true],
            
            ['EN. IBRAHIM BIN HUSSAIN',                   'Ahli Majlis Zon 1 | Taman Gemilang I / Taman Gemilang II / Taman Bakti / Taman Bestari / Taman Seri Gading.',                      'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-11.50.49-AM.jpeg'   , true],
            ['EN. MHD JAILANI BIN ABD RAHMAN',            'Ahli Majlis Zon 2 | Taman Seri Wawasan / Taman Cemerlang / Taman Berjaya',                                                         'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.15-PM-1.jpeg' , true],
            ['PN. WANNA A/P DIN CHU@NUR WANA BT ABDULLAH','Ahli Majlis Zon 3 | Taman Koperasi Risda / Taman Kemangi / Taman Dahlia / Taman Melati / Taman Reflesia',                          'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.15-PM.jpeg'   , true],
            ['EN. BAHARUDIN BIN AHMAD',                   'Ahli Majlis Zon 4 & Zon 5 | Taman Setia / Taman Seri Alam / Taman Setia Indah',                                                    'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.17-PM.jpeg'   , true],
            ['EN. ABDUL KADIR BIN AWANG',                 'Ahli Majlis Zon 6 | Taman Sejahtera / Taman Aman / Taman Kiara Mas',                                                               'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.21-PM-1.jpeg' , true],
            ['EN. MOHAMAD ADIB BIN YUSOFF',               'Ahli Majlis Zon 7 | Taman Gembira / Rancangan Perum,Ahan Awam 1 / Taman Seri Seberang / Taman Selesa / Taman Murni / Taman Impian','https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.20-PM.jpeg'   , true],
            ['EN. IBRAHIM BIN WAHAB',                     'Ahli Majlis Zon 8 & Zon 9 | Taman Seri Mas / Taman Seri Mas Ii / Taman Sri Delima',                                                'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.19-PM.jpeg'   , true],
            ['EN. AZHAR BIN ABU BAKAR',                   'Ahli Majlis Zon 10 | Taman Seri Pendang Ii / Taman Seri Pendang Iii / Taman Muhibbah',                                             'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM-1.jpeg' , true],
            ['DATIN DR RAHIMAH BT SAHIT',                 'Ahli Majlis Zon 11 | Taman Mawar / Taman Melor / Taman Seroja',                                                                    'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.21-PM.jpeg'   , true],
            ['PUAN. FARIDATULAIN BT NAWAWI',              'Ahli Majlis Zon 12 | Taman Orkid / Taman Teratai',                                                                                 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.22-PM-1.jpeg' , true],
            ['EN. MOHD FAIZAL BIN MOHD RAMLI',            'Ahli Majlis Zon 13 | Taman Sukamari / Pendang Square / Pekan Pendang Baru',                                                        'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM.jpeg'   , true],
            ['EN. MUHAMMAD SUHAIMI BIN SAAD',             'Ahli Majlis Zon 14 | Taman Harmoni / Taman Seri Tajung / Pekan Tanah Merah',                                                       'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM-2.jpeg' , true],
            ['EN. ROZALI BIN OTHMAN',                     'Ahli Majlis Zon 15 | Taman Nangka Madu / Taman Semarak / Taman Jenun',                                                             'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.22-PM.jpeg'   , true],
            ['EN. MOHD ZABANDI BIN ABD KADIR',            'Ahli Majlis Zon 16 | Taman Seri Jelai / Taman Seri Layang-Layang / Taman Bunga Raya / Taman Nuri / Pekan Tokai',                   'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.24-PM-1-1.jpeg',true],
            ['EN. SAIFUL SYAZWAN BIN SYAFIE',             'Ahli Majlis Zon 17 | Taman Merpati / Taman Kenari / Taman Tokai Jaya / Taman Merak Ii',                                            'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.25.00-PM.jpeg'   , true],
            ['EN. MD HASSANI BIN HASHIM',                 'Ahli Majlis Zon 18 | Taman Seri Merbok / Taman Cenderawasih',                                                                      'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.28.30-PM.jpeg'   , true],
            ['EN. ABDUL MUTALIB BIN AZMI',                'Ahli Majlis Zon 19 | Taman Seri Putih / Taman Saga / Taman Residensi Bidara / Pekan Kilang Kecil',                                 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.26.56-PM.jpeg'   , true],
            ['EN. MOHD NASIR BIN AHMAD',                  'Ahli Majlis Zon 20 | Taman Pudina / Pekan Kubur Panjang / Taman Inai / Felda Sg Tiang / Pekan Kg Baru',                            'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.24-PM.jpeg'   , true],
        ];
        
        let starsHTML = '';
        
        for (let i = startIndex; i <= endIndex; i++) {
            starsHTML += '<div class="admin admin-animation'+ (i+0) +'">';
            starsHTML += '    <img src="'+ adminAssets[i][2] +'">';
            starsHTML += '    <h6>'+ adminAssets[i][0] +'</h6>';
            starsHTML += '    <p>'+ adminAssets[i][1] +'</p>';
            starsHTML += '</div>';

            // console.log(i)
            
            if (adminAssets[i][3] == true) {
                starsHTML += '<style>';
                starsHTML += '.admin-animation'+ (i) +'{animation: var(--anim-preset-upIn) '+ (0.1*(i+1)) +'s;}';
                starsHTML += '</style>';
            }

        }
        
        this.innerHTML = starsHTML;
        
    }
}


customElements.define ('admin-charts', adminCharts);













// SMOOTH SCROLLING OFFSET

$('a[href*="#"], button[onclick^="window.location.href = \'#backtotop\'"]').on('click', function(e) {
    e.preventDefault();
    let href;
    if ($(this).is('a')) {
        href = $(this).attr('href');
    } else {
        href = $(this).attr('onclick')!.split("'")[1];
    }
    if (href) {
        $('html, body').animate({
            scrollTop: $(href).offset()!.top - 95, // Offset value
        }, 500, 'linear');
    }
});








// NEWSROOM: SHOW SIDENAV IF MEDIAQUERY IS ABOVE BREAKPOINT TABLET

let sidenav = document.querySelector('.sidenav');


// FUNCTION DEFINITION SIDENAV
function sidenavClass() {

    if (window.matchMedia("(min-width: 850px)").matches) {
    
        console.info("The browser window is >=850px.");
        sidenav?.classList.add('sidenav-show');
        sidenav?.classList.remove('sidenav-hide');
    
    } else {
    
    console.info("The browser window is <850px.");
        
        sidenav?.classList.add('sidenav-hide');
        sidenav?.classList.remove('sidenav-show');
        
    }
    
    let toc = document.querySelector('.toc');
    
    toc?.addEventListener('click', function() {
        
        if (sidenav?.classList.contains('sidenav-hide')) {
            sidenav?.classList.remove('sidenav-hide');
            sidenav?.classList.add('sidenav-show');
        } else {
            sidenav?.classList.remove('sidenav-show');
            sidenav?.classList.add('sidenav-hide');
        }
        
    });

}


window.addEventListener('resize', sidenavClass);
sidenavClass();