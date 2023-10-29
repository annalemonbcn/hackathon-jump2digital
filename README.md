<h1 align="center">Jump2Digital - Anna Esteve - Hackathon 2023</h1> <br>
<p align="center">
  <img alt="rick and morty mockup" title="anna esteve hackathon jump2digital" src="https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/RM_01.jpg?alt=media&token=3b6a997a-ff5f-4e9c-aa25-1a22f70deeb5&_gl=1*nvfijw*_ga*OTQ3NjQ5NTE3LjE2OTM0ODAxMjY.*_ga_CW55HF8NVT*MTY5ODYxMTQwNy43OS4xLjE2OTg2MTMyNDUuNDMuMC4w" width="600">
</p>

<div align="center">
  <img src="https://www.svgrepo.com/show/327388/logo-react.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/374146/typescript-official.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/354430/tailwindcss.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/354048/material-ui.svg" width="60" height="60">
</div>
<p align="center"> Built with React, Typescript, Tailwind and more.</p>

## 🖥️ Demo

Here is a working live demo : https://hackathon-annaesteve-jump2digital.vercel.app/

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Final conclusions](#final-conclusions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="introduction"></a>

## 📋 Introduction

This exercise has been done based on Jump2Digital's requirements to be able to participate in the 2023 hackathon.
This has been coded following the **minimum requirements** of the test exercise: **connection** to the Rick & Morty **API**, CSS for **styling** and it must be a **responsive** app.
Also, I ended developing **2 extra points**: the fact that there is a **real time searchbar**, and the **infinite loading**.

**Responsive design**

<p align="center">
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/RM_02.jpg?alt=media&token=5c768994-0967-4c17-be55-352e0a4a8c40&_gl=1*1p6maqj*_ga*OTQ3NjQ5NTE3LjE2OTM0ODAxMjY.*_ga_CW55HF8NVT*MTY5ODYxMTQwNy43OS4xLjE2OTg2MTMyNzQuMTQuMC4w" width=700>
</p>

<a name="features"></a>

## 💡 Features

This project has some interesting features that I want to highlight:

#### Fetch data

- All the info related to the characters (name, image, gender, etc) is taken from the <a href="https://rickandmortyapi.com/">Rick & Morty API</a>.
- This info is obtained through _fetch API_ and _promises_ methods
- It was necessary to consult the documentation to find the suitable methods for getting the data. For more information, follow this link:
  https://rickandmortyapi.com/documentation

### Real time search

- The search engine **works in real time**. As you write in the input field, a request to the API is executed with the search parameter as a query.
- The response is immediately rendered in the app.

### Infinite loading

- Since the API returns 20 characters each time, it is necessary a button or a functionality to load more characters.
- I decided to implement a button because I think is better for the user to decide when to load more characters.

<a name="built-with"></a>

## 🛠️ Built with

List of technologies used to develop this app:

- <a href="https://react.dev/">React Js</a>
- <a href="https://create-react-app.dev/">Create React App</a> for starting the file system
- I choose <a href="https://www.typescriptlang.org/">Typescript</a> just to add the app an extra strength 
- <a href="https://tailwindcss.com/">Tailwind CSS</a> for styling
- <a href="https://reactrouter.com/en/main">React-router-dom</a> for everything related to routing and matching URLs
- <a href="https://mui.com/">Material UI</a> is been used to implement some functionalities, like icons or tooltips
- Since it is a list of a TV show characters, I used the <a href="https://swiperjs.com/">Swiper</a> library for showing a **caroussel of related characters**
- The <a href="https://sonner.emilkowal.ski/">Sonner library</a> is used for **toast notifications**


<a name="getting-started"></a>

## 🔨 Getting started

- Fork the repo
- Clone the repo: `git clone https://github.com/annalemonbcn/hackathon-jump2digital`
- Navigate into the project files
- Open with VSC
- Install dependencies: `npm i`
- Run the app: `npm start`
- Open the live in your port: http://localhost:3000/
- Or check the demo: https://hackathon-annaesteve-jump2digital.vercel.app/
- Enjoy :)

<a name="final-conclusions"></a>

## 🙏🏻 Final conclusions

It has been fun navigating and listing all the characters on the TV show :)
My favorite is Pickle Rick! 🥒
Check it out: https://hackathon-annaesteve-jump2digital.vercel.app/id/265