const progress = document.querySelector(".scroll-progress");
const updateProgress = () => {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${range > 0 ? (window.scrollY / range) * 100 : 0}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".task").forEach((task) => observer.observe(task));

document.querySelectorAll("audio").forEach((audio) => {
  audio.addEventListener("play", () => {
    document.querySelectorAll("audio").forEach((other) => {
      if (other !== audio) other.pause();
    });
  });
});
