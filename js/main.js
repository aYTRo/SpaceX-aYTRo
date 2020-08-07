var instance = new vidbg('.video', {
  mp4: 'js/video/world.mp4', // URL or relative path to MP4 video
  webm: 'js/video/world.webm', // URL or relative path to webm video
  poster: 'js/video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or no
});
var rellax = new Rellax(".rocket");
if (document.body.clientwidth < 576) {
	rellax.destroy();
}
AOS.init();