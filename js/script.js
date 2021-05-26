import 'node_modules/waypoints/lib/noframework.waypoints.min.js';

var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction){
        document.getElementById('nav').style.position = "absolute";
		document.getElementById('homeSec').setAttribute('style','position: sticky; top: 0; z-index: 1000;');
    }
})

var j = 0;
var waypoint = new Waypoint({
  	element: document.getElementById('hero'),
	handler: function (direction) {
		if (j % 2 === 0) {
			document.getElementById('nav').style.position = "fixed";
			document.getElementById('nav').style.top = "15vh";
			document.getElementById('arrowUp').classList.remove('inactive');
			j = j + 1;
			//   console.log(j)
			//   console.log("Entered Sticky")
		}
		else {
			document.getElementById('nav').style.position = "absolute";
			document.getElementById('arrowUp').classList.add('inactive');
			j = j + 1;
			//   console.log(j)
			//   console.log("Entered Absolute")
		}
	}
})
var m = 0;
var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        if (m % 2 === 0) {
            document.getElementById('myPic').style.display = "block";
            document.getElementById('home').style.justifyContent = "space-between";
            m = m + 1;
            // console.log(m)
            // console.log("Entered Sticky")
		}
		else {
            document.getElementById('myPic').style.display = "none";
            document.getElementById('home').style.justifyContent = "flex-end";
            m = m + 1;
            // console.log(m)
            // console.log("Entered Absolute")
        }
    }
})
