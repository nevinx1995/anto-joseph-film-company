# Anto Joseph Film Company — website concept

A responsive English-language static website with real film posters, hover interactions, and social links. It uses plain HTML, CSS, and JavaScript, so there is no build step or server requirement.

The short Anto Joseph biography in the company section is based on his [IMDb biography](https://www.imdb.com/name/nm2102049/bio/) and [BookMyShow profile](https://in.bookmyshow.com/person/anto-joseph/IEIN046080).

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Update the existing GitHub Pages site

1. Open the `anto-joseph-film-company` repository on GitHub.
2. Select **Add file → Upload files** and upload the contents of this folder to the repository root. Keep the `assets/` folder structure. The files with matching names replace their earlier versions.
3. Commit the changes to `main`. GitHub Pages will publish the updated files automatically. If a previous version persists, hard refresh the page after deployment.

## Publish in a new GitHub repository

1. Create a new **public** GitHub repository, for example `anto-joseph-film-company`.
2. Upload **the contents of this folder** to the repository root, including `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select `main`, select `/(root)`, and save.
5. GitHub will show the published address in the Pages settings when deployment completes. A project site normally has the form `https://YOUR-USERNAME.github.io/anto-joseph-film-company/`.

All asset links are relative, so this works under a project repository path.

## Content to review before public release

- Film titles and years are an editorial selection from the company filmography. Confirm the full 20-film selection with the company before public release.
- Add an approved business email or other contact method when supplied. No address has been invented.
- The supplied AJ logo appears in the company section. `assets/cinema-night.webp` is original generated atmosphere artwork, not a still from a production.
- Social links point to the company's Instagram, Facebook, and YouTube profiles.
- The film posters are promotional artwork obtained from public image sources. For a company publication, confirm that these are the approved poster versions. Original three sources: [Take Off](https://www.themoviedb.org/movie/430521-take-off/images/posters), [Malik](https://www.digit.in/digit-binge/movies/malik-744876.html), [The Priest](https://www.imdb.com/title/tt11591306/).

## Files

- `index.html` — content and metadata
- `styles.css` — layout, typography, responsive design, motion
- `script.js` — mobile menu and scroll reveal
- `assets/ajfc-logo.webp` — optimized copy of the user supplied logo
- `assets/cinema-night.webp` — generated cinematic hero artwork
- `assets/*-poster.jpg` — 20 film posters
- `assets/favicon.svg` — small site icon

## Added film poster sources

Films were selected against [the company film listing](https://letterboxd.com/studio/anto-joseph-film-company/). Poster images for the 17 additions were downloaded from the corresponding TMDB film pages:

- [2018 (2023)](https://www.themoviedb.org/movie/866440) — `2018-2023-poster.jpg`
- [Kannum Kannum Kollaiyadithaal (2020)](https://www.themoviedb.org/movie/505951) — `kannum-kannum-kollaiyadithaal-poster.jpg`
- [Irul (2021)](https://www.themoviedb.org/movie/807158) — `irul-poster.jpg`
- [Cold Case (2021)](https://www.themoviedb.org/movie/838609) — `cold-case-2021-poster.jpg`
- [Nizhal (2021)](https://www.themoviedb.org/movie/795729) — `nizhal-poster.jpg`
- [19(1)(a) (2022)](https://www.themoviedb.org/movie/766418) — `191a-poster.jpg`
- [Mikhael (2019)](https://www.themoviedb.org/movie/573257) — `mikhael-poster.jpg`
- [Oru Yamandan Premakadha (2019)](https://www.themoviedb.org/movie/595929) — `oru-yamandan-premakadha-poster.jpg`
- [Stand Up (2019)](https://www.themoviedb.org/movie/683431) — `stand-up-2019-poster.jpg`
- [Bhaskar The Rascal (2015)](https://www.themoviedb.org/movie/332686) — `bhaskar-the-rascal-poster.jpg`
- [Salalah Mobiles (2014)](https://www.themoviedb.org/movie/265420) — `salalah-mobiles-poster.jpg`
- [Ivan Maryadaraman (2015)](https://www.themoviedb.org/movie/341450) — `ivan-maryadaraman-poster.jpg`
- [Proprietors: Kammath & Kammath (2013)](https://www.themoviedb.org/movie/162007) — `proprietors-kammath-kammath-poster.jpg`
- [Vishudhan (2013)](https://www.themoviedb.org/movie/256811) — `vishudhan-poster.jpg`
- [Bramman (2014)](https://www.themoviedb.org/movie/259277) — `bramman-poster.jpg`
- [Mathai Kuzhappakkaranalla (2014)](https://www.themoviedb.org/movie/339940) — `mathai-kuzhappakkaranalla-poster.jpg`
- [Thinkal Muthal Velli Vare (2015)](https://www.themoviedb.org/movie/354764) — `thinkal-muthal-velli-vare-poster.jpg`
