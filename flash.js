let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function updateSlide(n, slideContent, slideContent2) {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const newSlide = document.createElement('div');
  newSlide.classList.add('mySlides', 'fade');

   // Create content for the slide (f & b)
   const f = document.createElement('p');
   f.classList.add('f');
   f.textContent = slideContent; 
 
   const b = document.createElement('p');
   b.classList.add('b');
   b.textContent = slideContent2; 
   
   // Create front and back 
   const front = document.createElement('div');
   front.classList.add('card-front');
   
   const back = document.createElement('div');
   back.classList.add('card-back');
   
   //Add f&b to front and back
   front.appendChild(f);
   back.appendChild(b);

   // Create body 
  const body = document.createElement('div');
  body.classList.add('card-body');

  //Add front and back to body 
  body.appendChild(front);
  body.appendChild(back);
    
  // Create wrapper 
  const wrapper = document.createElement('div');
  wrapper.classList.add('card-wrapper');

  //Create number text 
  let slides = document.getElementsByClassName("mySlides");
  const numtext = document.createElement('div');
  numtext.classList.add('numbertext');
  numtext.textContent = ((slides.length + 1).toString()) + ' / ' + ((slides.length + 1).toString());

  //Update rest of number text
  const numTexts = document.querySelectorAll(".numbertext");

  // Iterate through each numtext element and update its text content
  numTexts.forEach((numtext, index) => {
  numtext.textContent = `${index + 1} / ${slides.length + 1}`;
  });

  // Add body to wrapper 
  wrapper.appendChild(body); 

  //Add else to newSlide
  newSlide.appendChild(wrapper);
  newSlide.appendChild(numtext);


  //Add new slide to container
  slideshowContainer.appendChild(newSlide);
  
  //Update slide total
  showSlides(n);
}

function add(n){
  const truebody = document.querySelector('.specialz');

  //new froth & bbq
  const coffee = document.createElement('th');
  coffee.textContent = 'Front'; 
  coffee.classList.add('froth');

  const steak = document.createElement('th');
  steak.textContent = 'Cross Site Scripting will be an issue, but this is currently the best solution I could program'; 
  steak.classList.add('bbq');

  //new burrito
  const burrito = document.createElement('tr');
  burrito.classList.add('flashywrap');

  //append the weird breakfast
  burrito.appendChild(coffee);
  burrito.appendChild(steak);
  
  //flashy new
  const flesh = document.createElement('table');
  flesh.classList.add('Flashy');

  //Not after the button please
  const button = document.getElementsByClassName("creaty");

  //Append
  flesh.appendChild(burrito);
  truebody.appendChild(flesh);

  updateSlide(n, coffee.textContent, steak.textContent);
}

