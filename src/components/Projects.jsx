import React from 'react'
import CardProject from './CardProject'

const Projects = () => {

    const projects = [
        {
          image: "asila_tourism.png",
          title: "ASILA Tourism Website",
          description: "A professional tourism website with a clean and responsive design, built to showcase various travel destinations and services.",
          repoLink: "https://github.com/ayak1/ASILA-Tourism",
          demoLink: "https://asila-tourism.com"
        },
        {
          image: "3d_space_hero.png",
          title: "3D Space Hero",
          description: "An immersive, space-themed 3D application built with React.js, Vite, and Tailwind CSS. It provides interactive animations and a visually captivating experience.",
          repoLink: "https://github.com/ayak1/3D-Space-Hero",
          demoLink: "https://3d-space-hero-demo.com"
        },
        {
          image: "cookie_shop_landing_page.png",
          title: "Cookie Shop Landing Page",
          description: "A visually appealing landing page for a cookie shop, created using React.js, Vite, and Tailwind CSS. The project showcases a clean, inviting interface with responsive design.",
          repoLink: "https://github.com/ayak1/Cookie-Shop-Landing-Page",
          demoLink: "https://cookie-shop-landing.com"
        },
        {
          image: "car_hero.png",
          title: "Car Hero",
          description: "A responsive, car-themed web application that features interactive animations for a smooth user experience. Built using React.js and AOS for seamless transitions.",
          repoLink: "https://github.com/ayak1/Car-Hero",
          demoLink: "https://car-hero-demo.com"
        },
        {
          image: "ican_landing_page.png",
          title: "ICAN Landing Page",
          description: "A professional landing page designed for a technical solutions company, focusing on cross-browser compatibility and responsive design. Created using React.js with a clean, corporate look.",
          repoLink: "https://github.com/ayak1/ICAN_landing_page",
          demoLink: "https://ican-landing.com"
        },
        {
          image: "meals_menu.png",
          title: "Meals Menu",
          description: "A user-friendly meal menu app built with Vue.js and Vite, offering smooth navigation and intuitive meal selection with a clear, structured layout.",
          repoLink: "https://github.com/ayak1/meals-menu",
          demoLink: "https://meals-menu-demo.com"
        },
        {
          image: "focalx_records.png",
          title: "FocalX Records Web App",
          description: "An application for managing records, built to emphasize functionality and ease of use. Developed using Vue.js and Laravel to handle backend data management.",
          repoLink: "https://github.com/ayak1/focalX-records-web-app",
          demoLink: "https://focalx-records-demo.com"
        },
        {
          image: "simple_calculator.png",
          title: "Simple Calculator",
          description: "A minimalist calculator created with Vue.js and Vite, focusing on basic functionality and clean design, demonstrating fundamental JavaScript operations and UI components.",
          repoLink: "https://github.com/ayak1/vite-vueJS_simple-calculator",
          demoLink: "https://simple-calculator-demo.com"
        },
        {
          image: "donate_take_blood_api.png",
          title: "Donate-Take Blood API",
          description: "An API developed using Laravel to facilitate blood donations, designed with RESTful principles and efficient data handling in mind.",
          repoLink: "https://github.com/ayak1/donate-take-BloodApi-laravel",
          demoLink: "https://donate-take-blood-api.com"
        },
        {
          image: "portfolio_alaa_darwish.png",
          title: "Portfolio",
          description: "A personalized portfolio for Mr.Alaa darwish website for a client, designed using Vue.js and Vite. Highlights clean, modern design and an intuitive layout showcasing the client’s work.",
          repoLink: "https://github.com/ayak1/focalX-portfolio_alaa_darwish",
          demoLink: "https://portfolio-alaa-darwish.com"
        }
      ];
      
  return (
    <div className="w-full bg-darkPink " id='Projects'>
      <h2 className="font-bold text-4xl text-white pt-10 text-center">
        My Projects
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 py-10 gap-10  place-items-center items-start">
      {projects.map((project, index) => (
          <CardProject
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects