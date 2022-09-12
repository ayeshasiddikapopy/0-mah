tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary : '#EEEDDE',
        secondary : '#FF7527',
        black : '#203239',
        overlay: 'rgba(255, 117, 39, 0.2)'
      },
      backgroundImage: {
        banner : "url('/images/banner.webp')",
      },
      maxWidth: {
        container: '1170px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  }
}