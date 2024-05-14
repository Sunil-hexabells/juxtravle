$('#featured').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText: ["Next", "Previous"],
    autoplay: true,    
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#our-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    navText: ["Next", "Previous"],
    autoplay: true,    
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.clintbox').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,    
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.5
        }
    }
})




$(function(){
    $('#datepicker').datepicker();
  });

  $(function(){
    $('#datepicker2').datepicker();
  });




  let digitValidate = function(ele){
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');
  }
  
  let tabChange = function(val){
      let ele = document.querySelectorAll('.otpbox input');
      if(ele[val-1].value != ''){
        ele[val].focus()
      }else if(ele[val-1].value == ''){
        ele[val-2].focus()
      }   
   }
  



     // Get all elements with class "accordion-header"
     var accHeaders = document.querySelectorAll('.accordion-header');
    
     // Add click event listener to each header
     accHeaders.forEach(function(accHeader) {
       accHeader.addEventListener('click', function() {
         // Toggle the next element's display between none and block
         var accBody = this.nextElementSibling;
         if (accBody.style.display === 'block') {
           accBody.style.display = 'none';
           this.querySelector('.accordion-btn').textContent = '+';
         } else {
           accBody.style.display = 'block';
           this.querySelector('.accordion-btn').textContent = '-';
         }
       });
     });




var checkbox = document.getElementById('checkbox');
 var additionalFields = document.getElementById('additionalFields');

 checkbox.addEventListener('change', function() {
   if (checkbox.checked) {
     additionalFields.style.display = 'block';
   } else {
     additionalFields.style.display = 'none';
   }
 });



 $("#rowAdder").click(function () {
           newRowAdd =
             

`
               <div class="row addgustshow mt-1">
<hr>
  <div class="col-md-2">
     <label for="inputState" class="form-label">TITLE</label>
     <select id="inputState" class="form-select">
       <option selected>Mr</option>
       <option>Miss.</option>
     </select>
   </div>
   <div class="col-md-4">
     <label for="inputZip" class="form-label">FULL NAME</label>
     <input type="text" class="form-control" id="inputZip">
   </div>
   <div class="col-md-4">
      <label for="inputZip" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
    <div class="col-12 mt-3">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" id="">
       <label class="form-check-label" for="gridCheck">
        Below 12 years of age</span>
       </label>
     </div>
   </div>
</div>`
               
           $('#newinput').append(newRowAdd);
       });



     var additionalFields = document.getElementById('vmorepoint');
 var viewMoreBtn = document.getElementById('viewMoreBtn');
 var isExpanded = false;

 viewMoreBtn.addEventListener('click', function() {
   if (!isExpanded) {
     additionalFields.style.display = 'block';
     viewMoreBtn.textContent = 'View Less';
     isExpanded = true;
   } else {
     additionalFields.style.display = 'none';
     viewMoreBtn.textContent = 'View More';
     isExpanded = false;
   }
 });

