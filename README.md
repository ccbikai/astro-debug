# Astro fetch 500

How to reproduce:

`npm run dev`

Visit `http://localhost:4321/api/https://http.im/status/200`, no error reported

Access `http://localhost:4321/api/https://http.im/status/500`, and encounter an error `TypeError: immutable`.
