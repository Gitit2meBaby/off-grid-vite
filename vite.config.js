import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'src/index.html', // Adjusted path for index.html
                byd: 'src/BYD.html', // Adjusted path for BYD.html
                sma: 'src/SMA.html', // Adjusted path for SMA.html
                downloads: 'src/downloads.html', // Adjusted path for downloads.html
                reviews: 'src/reviews.html', // Adjusted path for reviews.html
                blog: 'src/index.html', // Adjusted path for blog.html
                winaico: 'src/winaico.html', // Adjusted path for winaico.html
                radiant: 'src/radiant.html', // Adjusted path for radiant.html
                privacy: 'src/privacyPolicy.html', // Adjusted path for privacyPolicy.html
                faqs: 'src/faqs.html', // Adjusted path for faqs.html
            },
        },
    },
    optimizeDeps: {
        include: ['*.html'],
    },
});
