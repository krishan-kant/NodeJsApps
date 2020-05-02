#Learning NodeJs by making apps.

##1. Notes App: 
The app runs in terminal only. Arguments are parsed with Yarg and colour coding of output is done with chalk. With --help as argument all the commands will be shown in the terminal with proper description.

##2. Weather App without express:
Fetches weather info with city name using a weather api. The city name is given as argument from terminal while running the app.

##3. Weather App with express: 
The app uses the previous concept and the previous code is now divided in server side and client side scripts. The /src/app.js is the server side application running with express module and weather can be requested here with search querry.
    The second script file in public/js/app.js is the client side script and it requests the data from api via the first script. The output is then rendered into the home page.
    Static pages were removed and dynamic pages are now added.
    
    ![Home page](https://github.com/krishan-kant/NodeJsApps/blob/master/images/1.png?raw=true)
    ![Searched result](https://github.com/krishan-kant/NodeJsApps/blob/master/images/2.png?raw=true)
    ![About page](https://github.com/krishan-kant/NodeJsApps/blob/master/images/3.png?raw=true)
    
