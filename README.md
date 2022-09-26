# codecool-shop-2-java-Doni002

This is a little project of Me and Doni, at CodeCool at the end of the 3. module we made a functional webshop with backend and frontend. It's a Cyberpunk themed Webshop with cars from the game, their description, their real price, and their manufacturer. We made this project under 2 sprints, at the first we made it functional but everything is working with the local memory of the computer for under 3 days. In this sprint, under 3 extra days, we made it work with a database (Postgres), and the front end got major reworks. 

![Screenshot from 2022-09-26 18-36-11](https://user-images.githubusercontent.com/88943189/192333492-198f97da-2ad7-48e8-9f89-ce8da3f435b8.png)
![Screenshot from 2022-09-26 18-37-02](https://user-images.githubusercontent.com/88943189/192333529-7fde6d58-672d-482d-90ef-b36138765102.png)
![Screenshot from 2022-09-26 18-42-33](https://user-images.githubusercontent.com/88943189/192333817-45856c61-f782-4b92-b870-ade937e43ae4.png)

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
2) To run the application you will need two main things. To configure Jetty -> Instead of running main with Application, you have to go to Edit Configurations then the + sign and under Maven just write "jetty:run". You will have to start the server with this command. 
3) A Postgres database. Make a new database, then fill it with dbInitalizer.sql. It will drop the existing tables if you have one so don't worry.
4) Hurray everything is now set! Start your server with Jetty, it will have to write Connection is Ok in the terminal 
and in your browser (localhost:8080) just enjoy this little project!
