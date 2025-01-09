/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/gradinet.png')",
        "hackathon": "url('/src/Assets/hackathon.png')",
        "workshop": "url('/src/Assets/workshop.png')",
        "colab": "url('/src/Assets/colab.png')",
        "network": "url('/src/Assets/network.png')",
        'custom-gradient': 'linear-gradient(96deg, #C87C00 3.72%, #8B3208 31.05%, rgba(83, 32, 15, 0.82) 68.54%, #010420 100%)',
      },
    },
  },
  plugins: [],
};
