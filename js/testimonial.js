function extractor(url_id) {
    if (url_id.search("google.com") != -1) {
      var id = url_id.split("=");
      url_link = "https://drive.google.com/thumbnail?id=";
      var url = url_link.concat(id[1]);
    } else {
      url = url_id;
    }
    return url;
}

fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1GSPPO9_Yfx8UZ-CxanUvSvruOiU-z3UAkBoetrCARjE/values:batchGet?ranges=A2:U133&key=AIzaSyATGC19rqvjo4HJs8uMHFoittxEeoNViPs"
)
.then((res) => res.json())
.then((data) => {
    // document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + '<script src="https://code.jquery.com/jquery-3.5.1.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>';
    // document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML + '<script>$(".container").owlCarousel({loop: true,autoplay: true,autoplayTimeOut: 100,autoplayHoverPause: true,responsive: {0 : {items: 1},768 : {items: 2},1000 : {items: 3}}});</script>';
    var totalProjects = data.valueRanges[0].values.length;
    var testimonials = data.valueRanges[0].values;
    document.getElementById('container').style.display = "flex";
    var container = document.getElementById('container');

    for (let i = 0; i < totalProjects; i++) {
        var testimonial = document.createElement('div');
        testimonial.classList.add('testimonial')
        container.appendChild(testimonial);

        var msg = document.createElement('div');
        msg.classList.add('msg');
        testimonial.appendChild(msg);

        var red = document.createElement('span');
        red.classList.add('red');
        red.innerHTML = "<i class='fa fa-quote-left' aria-hidden='true'></i>";
        msg.appendChild(red);

        var textmsg = document.createElement('span');
        textmsg.classList.add('textmsg');
        textmsg.innerHTML = "<br>" + testimonials[i][3];
        msg.appendChild(textmsg);

        var detail = document.createElement('div');
        detail.classList.add('detail');
        testimonial.appendChild(detail);

        var photo = document.createElement('div');
        photo.classList.add('photo');
        detail.appendChild(photo);

        var img = document.createElement('img');
        img.src = extractor(testimonials[i][4]);
        photo.appendChild(img);

        var nameRole = document.createElement('div');
        nameRole.classList.add('nameRole');
        detail.appendChild(nameRole);

        var testname = document.createElement('div');
        testname.classList.add('testname');
        testname.innerText = testimonials[i][1];
        nameRole.appendChild(testname);
        
        var role = document.createElement('div');
        role.classList.add('role');
        role.innerText = testimonials[i][2];
        nameRole.appendChild(role);

    }
})
.then(() => {
  container.classList.add('owl-carousel');
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeOut: 100,
      autoplayHoverPause: true,
      responsive: {
        0 : {
          items: 1
        },
        600 : {
          items: 2
        },
        1000 : {
          items: 3
        }
      }
    })
  })
})
.catch((err) => {
  console.log("Error");
})