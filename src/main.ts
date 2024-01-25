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
        <a href="attractions.html">Point of Interest</a>

        <a style="cursor: pointer" class="dropdown-button">Administration
        <i class="fa-solid fa-caret-down"></i></a>
        <div class="dropdown-content"> 
        <a href="ahli-majlis.html">Profil Ahli Majlis '23-'25</a>
        <a href="departments.html">Departments</a>
        </div>
        
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
        const arraySelect: String = this.getAttribute('arraySelect') || '0';

        let adminAssets: any[] = [];

        if (arraySelect === 'profil-majlis') {
            adminAssets = [ // no-display, show, no-img, parent
                ['no-display','', '', ''],
                ['show'      ,"TUAN NASRUN BIN DATO' MOHD SHERIFF, AMK., BCK.", 'Yang Dipertua, Majlis Daerah Pendang', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/12/Encik-Nasrun-bin-DatoMohd-Sheriff-3-1024x1536.jpg'],
                ['no-display','', '', ''],
                ['show'      ,'EN. HAMDI BIN ABDULLAH ZAWAWI, BCK.', 'Ketua Penolong Pegawai Daerah Kanan (Pengurusan Tanah)', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg'],
                ['show'      ,'DSP. ARRIZ SHAM BIN HAMEZAH', 'Ketua Polis Daerah Pendang', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/04/DSP_ARRIZ_SHAM-removebg-preview.png'],
                ['show'      ,'KOSONG', 'Pegawai Kesihatan Daerah Pendang', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg'],
                ['show'      ,'PUAN WIRDA ASMAT', 'Ketua Penolong Pengarah', 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/wirda-asmat.jpg'],
                ['show'      ,'PN. NORFAZNI BINTI MUSTAFFA , BCK.', 'CIO - Setiausaha, Ketua Pegawai Maklumat', 'https://pbt.kedah.gov.my/wp-content/uploads/2022/12/Puan-Norfazni-binti-Mustaffa-1-scaled.jpg'],
                ['show'      ,'EN. SHAFIZ SHAM BIN HJ. MD NOOR', 'Jurutera Daerah JKR Pendang', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg'],
                ['show'      ,'EN. AHMAD AZRI BIN SALLEH', 'Jurutera Daerah JPS Kota Setar', 'https://curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-768x1031.jpg'],
                
                ['show', 'EN. IBRAHIM BIN HUSSAIN',                   'Ahli Majlis Zon 1 | Taman Gemilang I / Taman Gemilang II / Taman Bakti / Taman Bestari / Taman Seri Gading.',                      'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-11.50.49-AM.jpeg'   ],
                ['show', 'EN. MHD JAILANI BIN ABD RAHMAN',            'Ahli Majlis Zon 2 | Taman Seri Wawasan / Taman Cemerlang / Taman Berjaya',                                                         'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.15-PM-1.jpeg' ],
                ['show', 'PN. WANNA A/P DIN CHU@NUR WANA BT ABDULLAH','Ahli Majlis Zon 3 | Taman Koperasi Risda / Taman Kemangi / Taman Dahlia / Taman Melati / Taman Reflesia',                          'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.15-PM.jpeg'   ],
                ['show', 'EN. BAHARUDIN BIN AHMAD',                   'Ahli Majlis Zon 4 & Zon 5 | Taman Setia / Taman Seri Alam / Taman Setia Indah',                                                    'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.17-PM.jpeg'   ],
                ['show', 'EN. ABDUL KADIR BIN AWANG',                 'Ahli Majlis Zon 6 | Taman Sejahtera / Taman Aman / Taman Kiara Mas',                                                               'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.21-PM-1.jpeg' ],
                ['show', 'EN. MOHAMAD ADIB BIN YUSOFF',               'Ahli Majlis Zon 7 | Taman Gembira / Rancangan Perum,Ahan Awam 1 / Taman Seri Seberang / Taman Selesa / Taman Murni / Taman Impian','https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.20-PM.jpeg'   ],
                ['show', 'EN. IBRAHIM BIN WAHAB',                     'Ahli Majlis Zon 8 & Zon 9 | Taman Seri Mas / Taman Seri Mas Ii / Taman Sri Delima',                                                'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.19-PM.jpeg'   ],
                ['show', 'EN. AZHAR BIN ABU BAKAR',                   'Ahli Majlis Zon 10 | Taman Seri Pendang Ii / Taman Seri Pendang Iii / Taman Muhibbah',                                             'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM-1.jpeg' ],
                ['show', 'DATIN DR RAHIMAH BT SAHIT',                 'Ahli Majlis Zon 11 | Taman Mawar / Taman Melor / Taman Seroja',                                                                    'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.21-PM.jpeg'   ],
                ['show', 'PUAN. FARIDATULAIN BT NAWAWI',              'Ahli Majlis Zon 12 | Taman Orkid / Taman Teratai',                                                                                 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.22-PM-1.jpeg' ],
                ['show', 'EN. MOHD FAIZAL BIN MOHD RAMLI',            'Ahli Majlis Zon 13 | Taman Sukamari / Pendang Square / Pekan Pendang Baru',                                                        'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM.jpeg'   ],
                ['show', 'EN. MUHAMMAD SUHAIMI BIN SAAD',             'Ahli Majlis Zon 14 | Taman Harmoni / Taman Seri Tajung / Pekan Tanah Merah',                                                       'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.23-PM-2.jpeg' ],
                ['show', 'EN. ROZALI BIN OTHMAN',                     'Ahli Majlis Zon 15 | Taman Nangka Madu / Taman Semarak / Taman Jenun',                                                             'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.22-PM.jpeg'   ],
                ['show', 'EN. MOHD ZABANDI BIN ABD KADIR',            'Ahli Majlis Zon 16 | Taman Seri Jelai / Taman Seri Layang-Layang / Taman Bunga Raya / Taman Nuri / Pekan Tokai',                   'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.24-PM-1-1.jpeg'],
                ['show', 'EN. SAIFUL SYAZWAN BIN SYAFIE',             'Ahli Majlis Zon 17 | Taman Merpati / Taman Kenari / Taman Tokai Jaya / Taman Merak Ii',                                            'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.25.00-PM.jpeg'   ],
                ['show', 'EN. MD HASSANI BIN HASHIM',                 'Ahli Majlis Zon 18 | Taman Seri Merbok / Taman Cenderawasih',                                                                      'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.28.30-PM.jpeg'   ],
                ['show', 'EN. ABDUL MUTALIB BIN AZMI',                'Ahli Majlis Zon 19 | Taman Seri Putih / Taman Saga / Taman Residensi Bidara / Pekan Kilang Kecil',                                 'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.26.56-PM.jpeg'   ],
                ['show', 'EN. MOHD NASIR BIN AHMAD',                  'Ahli Majlis Zon 20 | Taman Pudina / Pekan Kubur Panjang / Taman Inai / Felda Sg Tiang / Pekan Kg Baru',                            'https://pbt.kedah.gov.my/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-12.13.24-PM.jpeg'   ],
                
            ];
        } else if (arraySelect === 'jabatan') {
        
            adminAssets = [ // no-display, show, no-img, parent
                ['no-display',"", '', ''], //0
                ['no-img'    ,"TUAN NASRUN BIN DATO' MOHD SHERIFF, AMK., BCK.", 'Yang Dipertua, Majlis Daerah Pendang'],
                ['no-display',"", '', ''],
                ['no-display',"", '', ''],
                ['no-img'    ,'PN. NORFAZNI BINTI MUSTAFFA , BCK.', 'Setiausaha, Majlis Daerah Pendang'],
                ['no-display',"", '', ''], //5
                


                ['parent', '<br>Unit<br>Undang-undang<br><br>',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]], //6
                ['parent', 'Unit<br>Komunikasi Korporat<br>dan Perhubungan Awam',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 3', 'jawatan 3'],
                ]],
                ['parent', '<br>Unit<br>Pusat Sehenti<br><br>',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 3', 'jawatan 3'],
                ]],
                ['no-display',"", '', ''],
                ['parent', 'Unit<br>Audit Dalam',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]], //9
                ['no-display',"", '', ''],
                


                ['no-display',"", '', ''],
                ['no-img'    ,"MOHAMMAD ZAHIMI BIN HARUN", 'Pegawai Tadbir N44'],
                ['no-display',"", '', ''],

                ['parent', 'Bahagian<br>Pentadbiran',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 2', 'jawatan 2'],
                ]],
                ['parent', 'Bahagian<br>Sumber Manusia',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>ICT',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                ]], //15


                
                ['no-display',"", '', ''], //16
                ['no-img'    ,"SITI NUR HANANIE BINTI SUKARNO - K", 'Akauntan WA41'],
                ['no-display',"", '', ''],

                ['parent', 'Bahagian<br>Hasil',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>Perbelanjaan',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Unit<br>Perolehan',[
                    ['Nama 1', 'jawatan 1'],
                ]], //21


                
                ['no-display',"", '', ''], //22
                ['no-img'    ,"MOHD SHAHRIL BIN ZOLKIPLI", 'Penolong Pegawai Penilaian W32'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Penilaian',[
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>Pengurusan Harta',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 1', 'jawatan 1'],
                ]], //26
                ['no-display',"", '', ''],


                
                ['no-display',"", '', ''], //27
                ['no-img'    ,"RIZAL BIN AHMAD", 'Penolong Jurutera JA36'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Bangunan',[
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>Penyelenggaraan',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]],
                ['parent', 'Unit Projek<br>dan Infrastruktur',[
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['no-display',"", '', ''], //27
                ['no-img'    ,"RIZAL BIN AHMAD", 'Penolong Jurutera JA36'],
                ['no-display',"", '', ''],


                
                ['no-display',"", '', ''], //34
                ['no-img'    ,"TPR. MOHD NASIR BIN MOHAMMAD", 'Pegawai Perancang Bandar dan Desa JA44'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Perancangan Fizikal',[
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>Landskap',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]],
                ['no-display',"", '', ''],
                

                
                ['no-display',"", '', ''], //34
                ['no-img'    ,"ABDUL LATIF BIN MAN", 'Penolong Pegawai Kesihatan Persekitaran U36 (TBK2)'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Pelesenan',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Bahagian<br>Kesihatan',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]],
                ['no-display',"", '', ''],
                


                ['no-display',"", '', ''], //34
                ['no-img'    ,"MASRIL SAFIZAM BIN MD SAAD", 'Penolong Pegawai Penguat Kuasa KP29'],
                ['no-display',"", '', ''],
                ['no-display',"", '', ''], //34
                ['no-img'    ,"SHAMSUDIN BIN BAHAROM", 'Pembantu Penguat Kuasa KP22'],
                ['no-display',"", '', ''],
                
                ['parent', 'Pembantu Penguat<br>Kuasa KP19',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 1', 'jawatan 1'],
                ]],
                ['parent', 'Pembantu Tadbir<br>(Perkeranian/ Operasi) N22 (TBK1)',[
                    ['Nama 1', 'jawatan 1'],
                    ['Nama 2', 'jawatan 2'],
                ]],
                ['no-display',"", '', ''],


                
                ['no-display',"", '', ''], //34
                ['no-img'    ,"BISMAYAZAR BINTI YUSOFF", 'Penolong Pegawai Tadbir N29'],
                ['no-display',"", '', ''],
                ['no-display',"", '', ''], //34
                ['no-img'    ,"NORHIDAYAH BINTI MD DESA", 'Pembantu Tadbir (Perkeranian/ Operasi) N19'],
                ['no-display',"", '', ''],


                



            ];
        }
        
    
    let starsHTML = '';
    
    for (let i = startIndex; i <= endIndex; i++) {
            
        starsHTML += '<div class="admin admin-animation'+ (i+0) +'">';
            
            if (adminAssets[i][0] === 'no-display') {
                console.log('No display applied. Skipping...');
            } else if (adminAssets[i][0] === 'show') {
                starsHTML += '    <img src="'+ adminAssets[i][3] +'">';
                starsHTML += '    <h6>'+ adminAssets[i][1] +'</h6>';
                starsHTML += '    <p>'+ adminAssets[i][2] +'</p>';
            } else if (adminAssets[i][0] === 'no-img') {
                starsHTML += '    <h6>'+ adminAssets[i][1] +'</h6>';
                starsHTML += '    <p>'+ adminAssets[i][2] +'</p>';
            } else if (adminAssets[i][0] === 'parent') {
                starsHTML += '    <h6 style="font-size: 25px;">'+ adminAssets[i][1] +'</h6>';
                
                for (let j = 0; j < adminAssets[i][2].length; j++) {
                    starsHTML += '<div class="admin admin-child" ';
                    starsHTML += 'style="animation: var(--anim-preset-upIn) '+ (0.1 * ((i) + j)) +'s;">'
                    starsHTML += '    <h6>'+ adminAssets[i][2][j][0] +'</h6>';
                    starsHTML += '    <p>'+ adminAssets[i][2][j][1] +'</p>';
                    starsHTML += '</div>';
                }
            }
            starsHTML += '</div>';
        }
        
        starsHTML += '<style>';
        for (let i = startIndex; i <= endIndex; i++) {
            if (adminAssets[i][0] === 'no-display') {
                console.log('No animation applied. Skipping...');
            } else if (adminAssets[i][0] === 'show') {
                starsHTML += '.admin-animation'+ (i) +'{animation: var(--anim-preset-upIn) '+ (0.1*(i)) +'s;}';
            } else if ((adminAssets[i][0] === 'no-img') || (adminAssets[i][0] === 'parent')) {
                starsHTML += '.admin-animation'+ (i) +'{animation: var(--anim-preset-upIn) '+ (0.1*(i)) +'s;}';
            }
        }
        starsHTML += '</style>';
        
        
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