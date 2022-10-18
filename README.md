# iMachinery
Sequelize Models and Queries
About the Models.
I defined the models Movie and Person with a middle table Actormovie. Also, the table rol is related to this middle table, Actormovie.
The relation between them is:
A Person has many Movies, and a Movie has many Person. The issue here is when we try to write a query in sequelize. 
(https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#using-one-to-many-relationships-instead)
Therefore I used https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#using-one-to-many-relationships-instead to relate
Person, Movie and Actormovie.
One Rol has many Actormovie.
I didn't include the Raw Queries. 
