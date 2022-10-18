# iMachinery
Sequelize Models and Queries
About the Models.
I defined the models Movie and Person with a middle table Actormovie. Also, the table rol is related to this middle table, Actormovie.
The relation between them is:
A Person has many Movies, and a Movie has many Person. The issue here is when we try to write a query in sequelize. 
(https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#using-one-to-many-relationships-instead)
Therefore I used https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#using-one-to-many-relationships-instead to relate
Person, Movie and Actormovie. This way of relating the models allows me to write queries using operators like "and" "or" in the middle table Actormovie. For instance,
let's say that we want to find all the movies of a Person which rol is "director", we use the [Op] operator from squelize in order to set that condition. 
One Rol has many Actormovie.
![image](https://user-images.githubusercontent.com/44151017/196314045-fe2e7c15-c445-4c9c-ae92-62b7edf04489.png)

The models are defined in the folder "/src/models" and the queries are defined in the main folder, file Queries.js. The relations are in the file db.js
I didn't include the Raw Queries. 
