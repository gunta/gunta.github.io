// samples

//
//function loop() {
//	var elem = document.getElementById("elem");
//	x += 1;
//	elem.style.WebkitTransform = 'translate3d(' + x + 'px, 0, 0)';
//}


			function loop() {
				requestAnimationFrame(loop);
				mesh.translate.x += 1;
				renderer.render(scene, camera);
			}


//
//		function loop() {
//			context.clearRect(0,0, 320, 480);
//			x += 1;
//			context.fillRect(x, 0, 10, 10);
//		}


context.clearRect(0, 0, canvasWidth, canvasHeight);
// Draws our box
context.fillRect(x, y, 10, 10);


//style.WebkitTransform = 'translateX(' + x + 'px) translateY(' + y + 'px)';

//elem.addEventListener('click', function loop() {
//	move() && setTimeout(loop, 1000 / 60);
//}, false);
//
//
//var elem = document.getElementById("elem");
//for (var i = 0, il = elem.length; i < il; ++i) {
//	elem.style.left = i + 'px';
//}


//for (var i = 0, il = el.length; i < il; ++i) {
//	el.style.left = i + 'px';
//}
