module.exports = {
  content: ["./src/**/*.{html,js}"], // Tailwind가 스캔할 파일 경로
    theme: {
      extend: {
        backgroundImage: {
          'custom-bg': "url('/login_page.png')",
        },
      },
    },
  plugins: [],
};
