# React-Native-ToDo-App
ToDo android App built using React Native


//STEP 1
install nodejs 

//step 2
install expo CLI
    npm i -g expo-cli  

    this will install expo cli globlally in our system
    for first time only we need to install nodejs and expo CLI, after that just directly execute step-3

//step-3
create your first project
    npx create-expo-app my-app
    
    this will import all required packages
        .expo
        assets
        node_modules
        .gitignore
        App.js
        app.json
        babel.config.js
        package-lock.json
        package.json

//step-4 starting project
    cd appName -> change directory to app folder using 
    npm start  -> this will start app

    to run in phone -> scan code in expo android app
    to run in emulator->start emulator then press a in cmd

//step 5
now working with imported files(mainly app.js)

info about files
    assets-all photos/logos/audiofiles/videofiles etc are kept here
    app.js-this is dislayed on screen
    package.json-collection of all dependencies in project

//step-6 publishing our app to expo 
    expo publish

    this is for development purpose and can be run from any phone having expo app
