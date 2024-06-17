/* first opening.................................................................................... */
function OpenBlock_0(){
    let speed = 60;
    speed = 1;
    let cursor = document.getElementsByClassName("cursor")[0];
    let text = [
        'Привет, я Анастасия Чистоева!',
        'Можно просто Энн =)',
        '',
        'В настоящее время я в поисках работы в области web-разработки.'
    ]; 

    let k = 0;
    let i = 0;

    function typeWriter() {
        if (k < text.length){
            let span = document.createElement('span');
            span.textContent = '';
            cursor.insertAdjacentElement('beforeBegin', span);
            typing();
            function typing(){
                if (i < text[k].length) {
                    span.innerHTML += text[k].charAt(i);
                    i++;
                    setTimeout(typing, speed);
                }else{
                    k++;
                    i=0;
                    let br = document.createElement('br');
                    span.insertAdjacentElement('afterEnd', br);
                    setTimeout(typeWriter, 1000);
                }           
            }
        }else{
            function openMenu(){
                cursor.remove();
                let menu = document.getElementById('menu');
                menu.classList.remove('hidden');
                menu.classList.add('menu');

                let changeBlock = document.getElementById('changeBlock');
                changeBlock.classList.remove('hidden');
                changeBlock.classList.add('changeBlock');

                let footer = document.getElementsByTagName('footer')[0];
                footer.classList.remove('hidden');
                footer.classList.add('footer_show');
            }
            openMenu();
        }
    }
    typeWriter();

    function hoverSvg() { 
        let blocksNav = document.getElementsByClassName('svgItem');

        let svg = document.getElementsByClassName('svg'); 

        let classLists = ['menu_skills', 'menu_cert', 'menu_portfolio', 'menu_me', 'telegram', 'git', 'mail'];

        for (let i = 0; i < blocksNav.length; i++){
            blocksNav[i].addEventListener('mouseover', function(){
                svg[i].classList.add(classLists[i]);
            });
            blocksNav[i].addEventListener('mouseout', function(){
                svg[i].classList.remove(classLists[i]);
            });
        }
    } 
    hoverSvg();    
}
OpenBlock_0();

/*to change blocks...............................................................*/
function changeBlocks(){
    let target_block = 0;

    let menu_item = document.getElementsByClassName('menu_item');
    let blocks = document.getElementsByClassName('block');

    for (let i = 0; i < menu_item.length; i++){
        menu_item[i].addEventListener('click', function(){
            for (let j = 0; j < blocks.length; j++){
                blocks[j].classList.add('hidden');
            }
            blocks[i+1].classList.remove('hidden');
            target_block = i+1;
            
           
        });
    }

    let footer_nav = document.getElementsByClassName('footer_nav');

    for (let i = 0; i < footer_nav.length; i++){
        footer_nav[i].addEventListener('click', function(){
            for (let j = 0; j < blocks.length; j++){
                blocks[j].classList.add('hidden');
            }
            blocks[i].classList.remove('hidden');
            target_block = i;
        });
    }

    let back = document.getElementById('back');
    let next = document.getElementById('next');



    back.addEventListener("click", () => {
        blocks[target_block].classList.add("hidden");
    if (target_block === 0){
        target_block = blocks.length - 1;
    }else{
        target_block--;
    }
        blocks[target_block].classList.remove("hidden");  
});

    next.addEventListener("click", () => {
        blocks[target_block].classList.add("hidden");
    if (target_block === blocks.length - 1){
        target_block = 0;
    }else{
        target_block++;
    }
        blocks[target_block].classList.remove("hidden"); 
    });
}

changeBlocks();

/*to slide certificates and projects................................................................*/
/*if (window.matchMedia("(min-width: 1024px)").matches) {*/
    if (window.matchMedia("(orientation: landscape)").matches) {
function slider_cert_horizontally(){
    let offset = 0;
    let slider_certs = document.getElementById('slider_certs');
    let cert_back = document.getElementById('cert_back');
    let cert_next = document.getElementById('cert_next');
    let img_cert = document.getElementsByClassName('img_cert');
    let max = img_cert.length * 31;

    cert_next.addEventListener('click', function(){
        offset += 31;

        if (offset >= max-31){
            offset = 0;
        }
        slider_certs.style.left = -offset + "vw";
    });

    cert_back.addEventListener('click', function(){
        offset -= 31;

        if (offset < 0){
            offset = max - 62;
        }
        slider_certs.style.left = -offset + "vw";
    });
}
slider_cert_horizontally();

function slider_portfolio_horizontally(){
    let offset = 0;
    let slider_certs = document.getElementById('slider_portfolio');
    let cert_back = document.getElementById('portfolio_back');
    let cert_next = document.getElementById('portfolio_next');

    let max = document.getElementsByClassName('video').length * 31;

    cert_next.addEventListener('click', function(){
        offset += 31;

        if (offset >= max-31){
            offset = 0;
        }
        slider_certs.style.left = -offset + "vw";
    });

    cert_back.addEventListener('click', function(){
        offset -= 31;

        if (offset < 0){
            offset = max - 62;
        }
        slider_certs.style.left = -offset + "vw";
    });
}

slider_portfolio_horizontally();
}else{
    function slider_cert_vertically(){
        let offset = 0;
        let slider_certs = document.getElementById('slider_certs');
        let cert_back = document.getElementById('cert_back');
        let cert_next = document.getElementById('cert_next');
        let img_cert = document.getElementsByClassName('img_cert');
        let max = img_cert.length * 32;

        cert_next.addEventListener('click', function(){
            offset += 32;
    
            if (offset >= max){
                offset = 0;
            }
            slider_certs.style.top = -offset + "vh";
        });
        cert_back.addEventListener('click', function(){
            offset -= 32;
    
            if (offset < 0){
                offset = max - 32;
            }
            slider_certs.style.top = -offset + "vh";
        });
    }
    slider_cert_vertically();

    function slider_portfolio_vertically(){
        let offset = 0;
        let slider_certs = document.getElementById('slider_portfolio');
        let cert_back = document.getElementById('portfolio_back');
        let cert_next = document.getElementById('portfolio_next');
    
        let max = document.getElementsByClassName('video').length * 21;
    
        cert_next.addEventListener('click', function(){
            offset += 20;
    
            if (offset >= max-20){
                offset = 0;
            }
            slider_certs.style.top = -offset + "vh";
        });
        cert_back.addEventListener('click', function(){
            offset -= 21;
    
            if (offset < 0){
                offset = max - 21;
            }
            slider_certs.style.top = -offset + "vh";
        });
    }
    
    slider_portfolio_vertically();
}






/*to mail.....................................................................*/
document.querySelector("#copyMail").addEventListener("click", function() {
    navigator.clipboard.writeText("repetitorchi@gmail.com").then(function() {
        let cursorWatcher = document.querySelector('#cursor-watcher');
        cursorWatcher.classList.remove('hidden');
        cursorWatcher.classList.add('cursor-watcher');
            document.onmousemove = function (e) {
            cursorWatcher.style.left = e.pageX + "px";
            cursorWatcher.style.top = e.pageY + "px";

            function cursorHide(){
                cursorWatcher.classList.remove('cursor-watcher');
                cursorWatcher.classList.add('hidden');
            };

            setTimeout(cursorHide, 2000);
        
}
    }).catch(function(error) {
        console.error('Error:', error);
    });
});
