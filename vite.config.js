import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'src/index.html', // Adjusted path for index.html
                byd: 'src/html/BYD.html', // Adjusted path for BYD.html
                sma: 'src/html/SMA.html', // Adjusted path for SMA.html
                downloads: 'src/html/downloads.html', // Adjusted path for downloads.html
                reviews: 'src/html/reviews.html', // Adjusted path for reviews.html
                blog: 'src/index.html', // Adjusted path for blog.html
                winaico: 'src/html/winaico.html', // Adjusted path for winaico.html
                radiant: 'src/html/radiant.html', // Adjusted path for radiant.html
                privacy: 'src/html/privacyPolicy.html', // Adjusted path for privacyPolicy.html
                faqs: 'src/html/faqs.html', // Adjusted path for faqs.html
            },
        },
    },
    optimizeDeps: {
        include: ['*.html'],
    },
});
