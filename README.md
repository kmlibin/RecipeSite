# Recipe Directory
## Udemy React Course Project

This site is for adding, storing and finding recipes. You can click 'create recipe' and be prompted to add the name of the recipe, its ingredients, method, and cook time. At the top of the page is a search bar where you can search for recipes as well. 

- Firebase Deploy: https://cooking-ninja-site-563c7.web.app/

### Languages / Tools

React, JavaScript, CSS, HTML

Firebase, Google Fonts/Icons

### Project Highlights

This project was designed so that students could continue practicing React and also work with React Router. Initially, the data was managed with an internal JSON file but it was later converted to Firestore (you can see remnants of the JSON stuff...the useFetch hook, and the db.json file). At a later stage of the project, I also implemented Context and Reducers. Some highlights include:

    1. Setting up Links and Routes
    2. Setting up and watching JSON data so a user can fetch and add recipe cards (GET and POST requests)
    3. Using forms in React
    4. Programmatic Redirects
    5. Using query parameters to set up a search bar
    6. Component specific stylesheets, as well as dynamic class names
    7. Creating a context API and using reducers for light and dark mode, and also for the color theme selector
    8. Creating two custom hooks - one to fetch, and one to access context
    9. Transferring the project from interacting with a JSON file to interacting with Firestore data


### What I learned / Challenges

I am looking forward to working more with reducers and context API. In this project, I don't think we needed to technically use reducers to update the global state, simply because the only state we adjusted for most of the project was the theme selector. It seemed like a complicated way to adjust one piece of state, but I can definitely see how it would be an easier way to work with many pieces of state. 

I also had to fiddle around with different versions of React and React Router - they had just updated React to v18 and my routes weren't working well with RRD v5.1. I ended up updating everything to RRD v6.
