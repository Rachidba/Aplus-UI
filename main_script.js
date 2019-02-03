        
       	    var menu_button = document.getElementById("menu-icon");
            var dark = document.getElementById("dark");
            var menu = document.getElementById("drop-down-menu");

            var about_button = document.getElementById("about-button");
            var about = document.getElementById("about");
            var close_icon_about = document.getElementById("close-icon-about");

            var contact_button = document.getElementById("contact-button");
            var contact = document.getElementById("contact");
            var close_icon_contact = document.getElementById("close-icon-contact");

            var courses_button = document.getElementById("courses-button");
            var browse = document.getElementById("browse");

            var help_button = document.getElementById("help-button");
            var help = document.getElementById("help");
            var close_icon_help = document.getElementById("close-icon-help");

            var courses = document.getElementById("courses-container");

            var cat_buttons_array = new Array();
            cat_buttons_array[0]=document.getElementById("mip-button");
            cat_buttons_array[1]=document.getElementById("bcg-button");
            cat_buttons_array[2]=document.getElementById("eco-button");
            
            
            var courses_popup = document.getElementById("course-popup");  
            var close_icon_courses_popup = document.getElementById("close-icon-course-popup");
            var course_popup_title = document.getElementById("course-popup-title");
            var course_popup_thumbnail = document.getElementById("course-popup-thumbnail"); 
            var course_popup_form_button_link = document.getElementById("course-popup-form-button-link"); 

            var course_popup_help = document.getElementById("course-popup-help"); 
            var course_popup_contact = document.getElementById("course-popup-contact"); 

            var mip_form_link = "https://docs.google.com/forms/d/e/1FAIpQLSfx961Mn3LG8YX-cYs67tcx23XkPsE7pRdVELShbt0StLTKUw/viewform";
            var bcg_form_link = "https://docs.google.com/forms/d/e/1FAIpQLSf5-Mb4VSGKNHgDofTilHilw0_TsOz3E6BD5EnaEozDQ3U0Jw/viewform";
            // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSepURbCgSS8gsnAkPpB36muFRGWYbXHHobvYZ8712BpZcmpJw/viewform" width="640" height="1809" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            var eco_form_link = "";
            var form_link = mip_form_link;

//*************************************************************
        function init(){
            
            var mobile = false;
            if(window.innerWidth < 720) mobile = true;
       
            close_icon_courses_popup.onclick = function(){
                   courses_popup.setAttribute("class" ,"hide");
                   dark.setAttribute("class" , " hide fadeout");
            }


            menu_button.onclick = function(){
                     dark.setAttribute("class" , "show fadein");
                     menu.setAttribute("class" , "slide-right");
            }
            dark.onclick = function(){
                if(mobile){ 
                    dark.setAttribute("class" , " hide fadeout");
                     menu.setAttribute("class" , "slide-left");}
            }


            var marginY = 0;
            var destination = 0;
            var speed = 15;
            var scroller = null;
            function scroll(){
                marginY = marginY+speed; 
                if(marginY >= destination) {
                    marginY = 0;
                    return 0;}
                window.scroll(0,marginY);
                scroller = setTimeout(scroll,10);
            }
            courses_button.onclick =  function(){
            dark.setAttribute("class" , " hide fadeout");
            if(mobile) menu.setAttribute("class" , "slide-left");             
            destination = document.getElementById("courses_titles").offsetTop;
            scroll();   
            }

            browse.onclick = function(){           
            destination = document.getElementById("courses_titles").offsetTop;
            scroll();   
            }

            about_button.onclick = function(){     
                    if(!mobile) dark.setAttribute("class" , "show fadein");
                    about.setAttribute("class" ,"show full-fadein");
                    if(mobile) menu.setAttribute("class" , "slide-left");
            }
            close_icon_about.onclick = function(){
                     dark.setAttribute("class" , " hide fadeout");
                     about.setAttribute("class" ,"hide fadeout");
            }

            help_button.onclick = function(){
                    window.scroll(0,0);
                    if(!mobile) dark.setAttribute("class" , "show fadein");     
                    help.setAttribute("class" ,"show full-fadein");
                    if(mobile)   menu.setAttribute("class" , "slide-left");
            }
            close_icon_help.onclick = function(){
                     dark.setAttribute("class" , " hide fadeout");
                     help.setAttribute("class" ,"hide fadeout");
            }


            contact_button.onclick = function(){
                    window.scroll(0,0);
                    if(!mobile) dark.setAttribute("class" , "show fadein");        
                    contact.setAttribute("class" ,"show full-fadein");
                    if(mobile) menu.setAttribute("class" , "slide-left");
            }
            close_icon_contact.onclick = function(){
                     dark.setAttribute("class" , " hide fadeout");
                     contact.setAttribute("class" ,"hide fadeout");
            }

            for(var i=0;i<3;i++){

            cat_buttons_array[i].onclick = function(){

                for(var i=0;i<3;i++)
                    cat_buttons_array[i].setAttribute("class" ,"");

                this.setAttribute("class" ,"clicked");
                if(this.id == "bcg-button") {
                    loadcourses("bcg.html");
                    form_link = bcg_form_link;
                                            }
                else{
                    if(this.id == "mip-button"){
                     loadcourses("mip.html");
                     form_link = mip_form_link;
                                               }
                    else{ 
                        form_link = eco_form_link;
                        loadcourses("eco.html");
                        }
                    }
                
                                                       }

                                  }

            course_popup_help.onclick = function(){
                close_icon_courses_popup.onclick();
                help_button.onclick();
            }
            course_popup_contact.onclick =function(){
                close_icon_courses_popup.onclick();
                contact_button.onclick();
            }

            loadcourses("mip.html");
            

       	}
//******************************************************************
   window.onload = init;

                    function loadcourses(e){
            var xhr = new XMLHttpRequest();
            xhr.open('GET',e,true);
            xhr.onload = function(){
                 if(this.status == 200){
                    courses.innerHTML = this.responseText;
                 }
                 courses_info();
            }

            xhr.send();
            
            }



                function courses_info(){

            var courses_list = document.getElementsByClassName("course");
            
            for(var i = 0;i<courses_list.length;i++){
                courses_list[i].onclick = function(){
                    dark.setAttribute("class" , "show fadein");


                    var course_img = ((this.childNodes)[1].childNodes)[1];
                    var course_img_src = course_img.getAttribute("src");
                    course_popup_thumbnail.style.backgroundImage = "url('"+course_img_src+"')";


                    var course_dat = (this.childNodes)[3].childNodes;
                    course_popup_title.innerText = course_dat[1].innerText;
                     
                    
                    course_popup_form_button_link.setAttribute("href" ,form_link);
                    courses_popup.setAttribute("class" ,"show full-fadein");
                                                     }
                                                     }

                                       }
