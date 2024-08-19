import AOS from 'aos';

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const postLoading = () => {
  document.getElementById('initLoading')?.style.setProperty('opacity', '0');
  setTimeout(() => {
    document.getElementById('initLoading')?.remove();
    document.body.style.setProperty('overflow', 'auto');
    AOS.refreshHard();
  }, 500);
};
