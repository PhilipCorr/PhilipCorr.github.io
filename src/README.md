### Personal website

Some notes on the build process  

- npm start will run web pack and compile the app into a single bundles.min.js file as seen in index.html

- Need index.html to be in the root of the directory for github pages to pick it up. This is why dist directory was removed. Ideally src would hold all the code during edit and dist would hold distribution ready code. Now distribution ready code goes in root so that github pages can pick it up

- ESLint is used locally. Hence the rc file

TODO

- Improve content
- Create blog section
- Could add particle.js to the footer too
- Setup Jekyll locally for catching build failure before pushing to github