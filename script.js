function scrollToFestivals() {
  const festivalSection = document.getElementById("festivals");
  festivalSection.scrollIntoView({ behavior: "smooth" });
}

const audios = document.querySelectorAll('audio');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });