# codecool-shop-2-java-Doni002

This is a little project of Me and Doni, at CodeCool in the end of 3.module we made a functional webshop with backend and frontend. It's a Cyberpunk themed Webshop with
cars from the game, and their description, with their real price, and their manufacturer. We made this project under 2 sprints, at the first we have made it functional but everything
is working with the local memory of the computer under 3 days. In this sprint we have made it working with a database (Postgres), and the frontend got major reworks. 

(You can check out our first sprinnt with the link https://github.com/CodecoolGlobal/codecool-shop-1-java-RolandMarton)

Stacks/Technologies used for this project
- Java
- Thymeleaf
- HTML
- CSS
- Little Bootstrap for the cards only
- Javascript
- Postgresql database
- Maven
- Git Version Control System

To run this file you will have to do the following steps:

1) Clone the repository from Github to your local computer
2) To run the application you will need two main things.
  A) To configure Jetty -> Instead of running main with Application, you have to go to Edit Configurations then the + sign and under Maven just write "jetty:run".
You will have to start the server with this command. 
  B) A Postgres database. Make a new database, then fill it with dbInitalizer.sql. It will drop the existing tables if you have one so don't worry.
3) Hurray everything is now set! Start your server with Jetty, it will have to write Connection is Ok in the terminal 
and in your browser (localhost:8080) just enjoy this little project!
