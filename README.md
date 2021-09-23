# KLFapp
a quick app demonstrating an unstyled angular front-end and a nest JS back end

intended to be using minimal additional libraries

**at the moment back-end and front-end must be started seperately following below**

back-end: 
navigate to KLFapp/kfl-client 
enter the following commands:
npm -i
npm run start

front-end: 
navigate to KLFapp/kfl-server 
enter the following commands:
npm -i
ng serve

**assessment 1**

you can use the following endpoints for postman

Create a User:
POST
localhost:3000/api/users
body:{
"name": string
"password": string
}

Update User Information:
POST
localhost:3000/api/users/:id
body:{
"id": number,
"name": string,
"password": string,
}

User may log in using username and password:
POST
localhost:3000/api/users/login
body:{
"name": string,
"password": string,
}


**assessment 2**

localhost:4200
unstyled due to time constraints
Nav bar at top can be used to switch between pages.

at present Admin page not implemented due to time constraints, as well logging in has no effect currently.

**assessment 3**

find below exact code as put into https://www.jdoodle.com/execute-sql-online/

CREATE TABLE user(
id INT,
name TEXT
);
CREATE TABLE activity(
id INT,
name TEXT
);
CREATE TABLE user_activity(
activity_id INT,
user_id INT,
occurrence timestamp,
FOREIGN KEY(activity_id) REFERENCES activity(id),
FOREIGN KEY(user_id) REFERENCES user(id)
);

insert into user(id,name) values (1,"testUser");
insert into activity(id,name) values (1,"testActivity");

insert into user_activity(activity_id,user_id,occurrence) values (1,1,"2021-10-1");
insert into user_activity(activity_id,user_id,occurrence) values (1,1,"2021-10-2");
insert into user_activity(activity_id,user_id,occurrence) values (1,1,"2021-10-3");
insert into user_activity(activity_id,user_id,occurrence) values (1,1,"2021-9-3");
insert into user_activity(activity_id,user_id,occurrence) values (1,1,"2021-11-3");

select * from user;
select * from activity;
select * from user_activity;


Select user.name, activity.name, Count(occurrence), max(occurrence), min(occurrence) from user left join user_activity on user_activity.user_id = user.id left join activity on activity.id = user_activity.activity_id where occurrence > "2021-10-0" AND occurrence < "2021-10-32" group by activity_id
