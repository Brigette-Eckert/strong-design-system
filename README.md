#ABOUT 
// Design System to rebuild html5up website using Particle 
#PROJECT NOTES
up build and document as I go - make the repo public 
Use bootstrap base - 
Make bullet points - walk through how to make it 
Walk through process of turning into particle 
PAGES 

# PROCESS (WORKING TITLE)
* Install PL 
    1. npm create @phase2/particle particle && cd particle
    
    2. npm install && npm run setup
    
    3. npm start
    
    4. vist http://0.0.0.0:8080/app-pl/pl/
    
*  Perform an Inventory Audit / Create an Interface Inventory 
*  Break down design into components (start small its easier)
    
    Brainstorm Components for this Project: 
    
        
     
        
        Rectangle Text Buttons with Shadow 
        
        Fonts
        
        Colors 
        
       
        
        Nav Bar
          Rounded  Icon Link Buttons with Shadow 
        
        Header 
           Title Centered
           Border Bottom 
           
        Sidebar
        
        Gallery/Card Grid 
                
            3 up gallery 
            image
            title
            summmary 
        
        Footer 
        
        Contact Form
        Bround Icon Button with shadow, next to link 
         
        
* Setup Color Palette 
    //grab colors from screen shots, or files etc
     //setup as vars in _colors.scss (protons/non-printing/_colors.scss)
    
    
      //if mapping to bootstrap - name can't have '--' so changed $c-orange--light to $c-tangerine
      // copy colors to _bootstap-overrides.scss in non priting if you want to see in demo  
      
      ```
      // Colors
      $theme-colors: (
        'light orange': $c-orange--light,
        'primary orange': $c-orange--primary,
      );
      
      How to remove bootstrap colors? 
      ```
      
      
     Note:  Can override demo stuff in apps/pl/scss/_scss2json.scss
     
* Setup Fonts
  //import in (protons/printing/_type.scss)
  //add var  (protons/non-printing/_type.scss) 
  //add to demo in apps/pl/scss/_scss2json.scss
  
  add font weights etc to _type.scss
  
  
    
  


* Setup up images
  rip out what you dont need from imageStyles.yml,/ add change what you need 
  source/default/_data/imageStyles.yml
  
  

* Build a component

  ie. small icon button component
  
  1.  npm run new
      - choose design system, (default was only choice for now) 
      -choose where this compontent will live:  (can it be broken down into smaller pieces )
      -usually choose ./ for new compontent to live
      - viola new compontent
     
    
    
   Demo Files: 
   
   Non Demo Files: 
   
   
       


//troubleshhotim 

   dont see changes ...check console log often a twig error
* Build a component that uses another component


# THINGS TO INCLUDE IF DOCUMENTATION IF NOT INCLUDED:
    * Demo vs Adding Pattern, ie adding color vars to color dem o
