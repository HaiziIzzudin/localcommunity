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
            ['https://github.com/HaiziIzzudin/localcommunity/blob/main/src/images/titi-dua-lapis.jpg?raw=true', 'Titi Dua Lapis', 'Marvel design of two way river intersection in Kampung Titi Dua Lapis.', 'https://maps.app.goo.gl/C61U3jLt9WtfQF5b9'],
            ['https://raw.githubusercontent.com/HaiziIzzudin/localcommunity/main/src/images/telaga.jpg', 'Telaga Gajah', 'Thousand of history of Telaga Gajah in Pendang, Kedah', 'https://maps.app.goo.gl/yodNbX4M4akFDPt8A'],
            ['https://i.ytimg.com/vi/9zB01qk3M-w/maxresdefault.jpg', 'Taman Tasik Pendang', 'Enjoy a refreshing outside in Taman Tasik Pendang','https://maps.app.goo.gl/798c8kJrgxfSESQy5'],
            ['https://github.com/HaiziIzzudin/localcommunity/blob/main/src/images/campsite.png?raw=true','A-Rang Escape & Campsite','Have a challenging life at campsite, located in Kampung Bakar Arang, Pendang.','https://maps.app.goo.gl/oaGgdtvNCDxJCko86'],
            ['https://github.com/HaiziIzzudin/localcommunity/blob/main/src/images/jasnyta.jpg?raw=true','Jasnyta Cabin','Accommodation with a peaceful atmosphere, swimming pool and enjoy the view of the sunset','https://maps.app.goo.gl/UeLm6cJyUqScu7xq9'],
            ['https://github.com/HaiziIzzudin/localcommunity/blob/main/src/images/banian.jpg?raw=true', 'Kampung Adat Melayu Seri Banian','Village taste in the past','https://maps.app.goo.gl/RA98Tp6sfPvKTYgh7'],
            ['https://github.com/HaiziIzzudin/localcommunity/blob/main/src/images/ikan-bakar.jpg?raw=true', 'Man Bai Ikan Bakar','There is a variety of grilled fish, grilled meat and village-style dishes.','https://maps.app.goo.gl/nKrsUcqhZ21p7DUJ9'],
            ['https://pendanglakeresort.com.my/wp-content/uploads/2022/03/photo_2022-03-23_12-44-50-768x576.jpg', 'Pendang Lake Resort', 'A Countryside Resort Surrounded by Peaceful Lake with Panoramic View','https://maps.app.goo.gl/EUEbfgCztQpS88Nm8'],
        ];
        
        let starsHTML = '';
        
        for (let i = 0; i < attractions.length; i++) {
            starsHTML += `
            <div class="attractions-images img`+ (i+1) +`">
                <button onclick="window.open('`+ attractions[i][3] +`', '_blank')";>
                Open in Google Maps
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <p>`+ attractions[i][2] +`</p>
                <h5>`+ attractions[i][1] +`</h5>

                <div class="gradient-overlay"></div>
            </div>`;

            starsHTML += '<style>';
            starsHTML += '.img'+ (i+1) +'{';
            starsHTML += 'background-image: url('+ attractions[i][0] +');';
            starsHTML += 'animation: var(--anim-preset-blurIn) '+ (0.1*(i+1)) +'s;';
            starsHTML += '}';
            starsHTML += '</style>';
        }
        
        this.innerHTML = starsHTML;
        
    }
}
customElements.define ('image-album', imageAlbum);

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
                    ['PENOLONG PEGAWAI UNDANG-UNDANG L29','Mohd Redzuan Bin Cyril Pancratius'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22 (TBK1)','Zuriana Binti Hashim'],
                ]], //6
                ['parent', 'Unit<br>Komunikasi Korporat<br>dan Perhubungan Awam',[
                    ['PENOLONG PEGAWAI TADBIR N29','Radzie Iszuan Bin Jamadi'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19','Nur Aina Afifah Binti Abd Latiff - K'],
                    ['PEMBANTU AWAM H11','Norwani Binti Ahmad - K'],
                ]],
                ['parent', '<br>Unit<br>Pusat Sehenti (OSC)<br><br>',[
                    ['PEGAWAI PERANCANG BANDAR DAN DESA (PLANMalaysia) J41','Natasha Binti Shafiee'],
                    ['PENOLONG JURUTERA JA36 (TBK1)','Ahmad Azman Bin Idris'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19', `<ol>
                    <li>Siti Mariam Binti Ariffin
                    <li>Muhammad Hanif Bin Mat Dzahir - K
                    `],
                ]],
                ['no-display',"", '', ''],
                ['parent', 'Unit<br>Audit Dalam',[
                    ['PENOLONG JURUAUDIT W29','Muhamad Shahnizam Bin Mokhtar'],
                    ['PEMBANTU AKAUNTAN W19',"Muhammad 'Adnin Bin Subri - K"],
                ]], //9
                ['no-display',"", '', ''],
                


                ['no-display',"", '', ''],
                ['no-img'    ,"MOHAMMAD ZAHIMI BIN HARUN", 'Pegawai Tadbir N44'],
                ['no-display',"", '', ''],

                ['parent', 'Bahagian<br>Pentadbiran',[
                    ['PENOLONG PEGAWAI TADBIR N29','Wan Armaedah Binti Wan Ikram'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22','Saidatunor Shaniza Binti Md Desa'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19', `<ol>
                    <li>Nasrul Bin Noorulin 
                    <li>Siti Sarah Najwa Binti Sahid Abdullah - K
                    `],
                    ['PEMBANTU OPERASI N11', `<ol>
                    <li>Md Isa Bin Abdul Rahman 
                    <li>Mohd Amir Asyraf Bin Ismail - K
                    <li>Salehudin Bin Hj Ismail - K
                    `],
                    ['PEMANDU KENDERAAN H11', `<ol>
                    <li>Mohd Yusof Bin Saad
                    <li>Shahrul Azhar Bin Ab Manan
                    `],
                ]],
                ['parent', 'Bahagian<br>Sumber Manusia',[
                    ['PENOLONG PEGAWAI TADBIR N29','Muhammad Azrai Bin Ahmad Hajazi'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22','Darusalam Bin Kamis'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19', `<ol>
                    <li>Rohaya Binti Omar
                    <li>Muhammad Fashwan Bin Dato' Fathullah Suhaimi - K
                    `],
                ]],
                ['parent', 'Bahagian<br>ICT',[
                    ['PENOLONG PEGAWAI TEKNOLOGI MAKLUMAT FA29','Zahrul Anwar Bin Zakaria'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22 (TBK1)','Md Shamsul Bin Awang'],
                    ['JURUTEKNIK KOMPUTER FT19', `<ol>
                    <li>Mohd Zaidi Bin Yusuff
                    <li>Nur Hidayah Binti Riduan - K
                    `],
                ]], //15


                
                ['no-display',"", '', ''], //16
                ['no-img'    ,"SITI NUR HANANIE BINTI SUKARNO - K", 'Akauntan WA41'],
                ['no-display',"", '', ''],

                ['parent', 'Bahagian<br>Hasil',[
                    ['PENOLONG AKAUNTAN W32 (TBKI)', 'Mohamad Najib bin Othman'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19', `
                    <ol>
                    <li>Asma binti Abdullah
                    <li>Siti Noor Ba'ee binti Ahmad Tahir
                    <li>Luqran Hakim bin Mohd Faizal - K
                    `],
                    ['PENGHANTAR NOTIS H11 ', 'Mohamad Hafizuddin bin Bakori'],
                ]],
                ['parent', 'Bahagian<br>Perbelanjaan',[
                    ['PENOLONG AKAUNTAN W29', 'Nor Hanisah binti Hamzah'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22','Fitrinnida binti Abd Samad'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19','Nur Famiza Binti Ahmad'],
                    ['PEMBANTU TADBIR (KEWANGAN) 16/19','Noor Azlinda Binti Jamaludin'],
                    ['PEMBANTU AKAUNTAN W19','Nurain Binti A. Rahman - K'],
                ]],
                ['parent', 'Unit<br>Perolehan',[
                    ['PEMBANTU AKAUNTAN WI9', `<ol>
                    <li>Mohd Mazlan Bin Wahab - K
                    <li>Qatrulnada Binti Abd. Halim -K
                    `],
                ]], //21


                
                ['no-display',"", '', ''], //22
                ['no-img'    ,"MOHD SHAHRIL BIN ZOLKIPLI", 'Penolong Pegawai Penilaian W32'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Penilaian',[
                    ['PEMBANTU PENILAIAN W19', `<ol>
                    <li>Cik Mahaya Binti Mohd Yazid
                    <li>Shakira Bashira Binti Ramli
                    <li>Khairul Azha Bin Mohd Rodzi - K
                    `],
                ]],
                ['parent', 'Bahagian<br>Pengurusan Harta',[
                    ['PENOLONG PEGAWAI PENILAIAN W29','Faridatul Mastura Binti Yahya'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19','Siti Nadiah Binti Mohd Rodzi'],
                    ['PEMBANTU AWAM H11', `<ol>
                    <li>Khairul Fathi Bin Md Ramli- K
                    <li>Mohd Nizar Adha Bin Che Sobar - K
                    <li>Mohamad Syawal Bin Nordin - K
                    <li>Ahmad Syukri Bin Ismail - K
                    `],
                ]], //26
                ['no-display',"", '', ''],


                
                ['no-display',"", '', ''], //27
                ['no-img'    ,"RIZAL BIN AHMAD", 'Penolong Jurutera JA36'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Bangunan',[
                    ['PENOLONG JURUTERA JA29', 'Najmiyah binti Abdullah'],
                ]],
                ['parent', 'Bahagian<br>Penyelenggaraan',[
                    ['PENOLONG JURUTERA JA29', 'Mohammad Yusairee bin Abdul Wahid'],
                    ['PEMBANTU AWAM H11', `
                    <ol>
                    <li>Zainon bin Bahari
                    <li>Fairol Asdzahar bin Mohd Arshad
                    <li>Mohd Saiful Azwan Bin Abdul Basir - K
                    <li>Hazrul Bin Hashim - K
                    <li>Mohd Hafiz Bin Zameri - K
                    <li>Muhammad Farhan Bin Natmat - K
                    `],
                ]],
                ['parent', 'Unit Projek<br>dan Infrastruktur',[
                    ['PENOLONG JURUTERA JA29', 'Mohd Izzat bin Jamaludin'],
                ]],
                ['no-display',"", '', ''], //27
                ['no-img'    ,"PEMBANTU TADBIR (PEKERANIAN/OPERASI) N19", `
                <ol>
                <li>Najwani binti Abu Hassan
                <li>Mohd Fakharul Anuar bin Ahmad Nazawi
                <li>Zulaikha binti Kamarudin - K
                `],
                ['no-display',"", '', ''],


                
                ['no-display',"", '', ''], //34
                ['no-img'    ,"TPr. MOHD NASIR BIN MOHAMMAD", 'Pegawai Perancang Bandar dan Desa JA44'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Perancangan Fizikal',[
                    ['PENOLONG PEGAWAI PERANCANG BANDAR DAN DESA JA36 (TBK1)','Siti Rohayu Binti Othman'],
                    ['PENOLONG PEGAWAI PERANCANG BANDAR DAN DESA JA29',`<ol>
                    <li>Mohd Azrul Hafizi Bin Adnan
                    <li>Rostam Bin Razak
                    `],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19',`<ol>
                    <li>Zawiyah Binti Mahmud
                    <li>Shafrida Binti Mohd Kassim
                    `],
                    ['PELUKIS PELAN JA19','Khairul Anuar Bin Mohd Fauzi - K'],
                ]],
                ['parent', 'Bahagian<br>Landskap',[
                    ['PENOLONG ARKITEK LANDSKAP JA29','Khairul Azhar Bin Idris'],
                    ['PEMBANTU TADBIR (PERKERANIAN/OPERASI) N19','Nur Nasuha Binti Khairul Anwar - K'],
                    ['PENOLONG PEGAWAI PERTANIAN G29','Mohd Tajuddin Bin Omar@Azizan'],
                    ['PEMBANTU AWAM H11',`<ol>
                    <li>Rasli Bin Mat Hussain	
                    <li>Khairul Anuar Bin Haron	
                    <li>Noroden Bin Abdul Rahim	
                    <li>Nasrol Haizi Bin Talib	
                    <li>Mohd Adzrul Bin Mahabib Yusree - K
                    <li>Suzally Bin Saad
                    <li>Zaibidi Bin Che Tam - K
                    <li>Badrol Kamal Bin Abu Bakar - K
                    <li>Mufti Bin Yaacob - K
                    <li>Muhammad Zulmajdi Bin Bukhari - K
                    <li>Nasrul Hamdi Bin Kadir - K
                    <li>Mohamad Badrul Hanif Bin Nasri - K
                    <li>Mohammad Fadhli Bin Rosli - K
                    <li>Muhammad Akmal Bin Ismail- K
                    <li>Muhammad Yusrizan Syazri Bin Yusree - K
                    `],
                ]],
                ['no-display',"", '', ''],
                

                
                ['no-display',"", '', ''], //34
                ['no-img'    ,"ABDUL LATIF BIN MAN", 'Penolong Pegawai Kesihatan Persekitaran U36 (TBK2)'],
                ['no-display',"", '', ''],
                
                ['parent', 'Bahagian<br>Pelesenan',[
                    ['MIMI JAZWANI BINTI JAMALLUDDIN', 'Pembantu Kesihatan Awam U19'],
                    ['MOHAMMAD BADRUL HAFIZ BIN NASRI - K', 'Pembantu Tadbir (Perkeranian/Operasi) N19'],
                ]],
                ['parent', 'Bahagian<br>Kesihatan',[
                    ['NORSIAH BINTI MAHAMUD', 'Penolong Pegawai Kesihatan Persekitaran U32 (TBK1)'],
                    ['PEMBANTU KESIHATAN AWAM U19', `
                    <ol>
                    <li>Muhamad Nazmi Bin Kamarudin
                    <li>Mohamad Hafizhafizi Bin Abidin
                    `],
                ]],
                ['no-display',"", '', ''],
                


                ['no-display',"", '', ''], //34
                ['no-img'    ,"MASRIL SAFIZAM BIN MD SAAD", 'Penolong Pegawai Penguat Kuasa KP29'],
                ['no-display',"", '', ''],
                ['no-display',"", '', ''], //34
                ['no-img'    ,"SHAMSUDIN BIN BAHAROM", 'Pembantu Penguat Kuasa KP22'],
                ['no-display',"", '', ''],
                
                ['no-img', 'PEMBANTU PENGUAT KUASA KP19',`<ol>
                <li>Munirah Binti Ayob
                <li>Che Wan Nur Hazwani Binti Che Wan Azmi
                <li>Muhamad Shaiful Bin Harun
                <li>Zulfadzli Bin Mat Rodi
                <li>Mohd Farhan Aswad Bin Badrisham
                <li>Mohd Roshidi Bin Sharif - K
                <li>Mohd Nafis Syazwan Bin Saawi - K
                <li>Hamizi Bin Hamzah - K
                <li>Mohammad Rashdan Bin Ramli - K
                <li>Abdul Jamil Bin Yusof - K
                <li>Nordin Bin Ismail - K
                <li>Fatin Fatira Binti Abdul Jamil - K
                `],
                ['no-img', 'PEMBANTU TADBIR (PERKERANIAN/OPERASI) N22 (TBK1)','Fatimah Binti Ahmad'],
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
                    starsHTML += `
                    <div class="admin admin-child" 
                    style="animation: var(--anim-preset-upIn) `+ (0.1 * ((i+2) + j)) +`s;">
                        <h6>`+ adminAssets[i][2][j][0] +`</h6>
                        <p>`+ adminAssets[i][2][j][1] +`</p>
                    </div>
                    `;
                }
            }
            starsHTML += '</div>';
        }
        
        starsHTML += '<style>';
        for (let i = startIndex; i <= endIndex; i++) {
            if (adminAssets[i][0] === 'no-display') {
                console.log('No animation applied. Skipping...');
            } else if (adminAssets[i][0] === 'show') {
                starsHTML += '.admin-animation'+ (i) +'{animation: var(--anim-preset-blurIn) '+ (0.1*(i)) +'s;}';
            } else if ((adminAssets[i][0] === 'no-img') || (adminAssets[i][0] === 'parent')) {
                starsHTML += '.admin-animation'+ (i) +'{animation: var(--anim-preset-blurIn) '+ (0.1*(i)) +'s;}';
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
            scrollTop: $(href).offset()!.top - 100, // Offset value
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