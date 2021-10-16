# BackendApp
RESTFul API using Node.JS, Express.JS, and MongoDB

#### Objective:- To create RESTful API using Node.JS, Express.JS, and MongoDB where user could perform CRUD Operations

#### Environment:- 
       1. Node v14.18.1
       2. MongoDB
       3. Postman
       4. IDE

#### Installation:- 
       1. Use `git clone BackendApp` to clone the repository in your local file system
       2. Go to the directory _BackendApp_ using `cd BackendApp`
       3. Use npm package manager to install dependencies.
              * `npm i mongoose express body-parser`
       4. Open the command prompt and run ` mongod ` assuming **mongodb bin** path is already set to the System Environment.
       5. Once MongoDB is up and running, run the following command from the BackendApp directory `node .\index.js`

#### API End-Points:-
       End-Point Name:- Get All Users.
              **GET** `/users`
              **Response Body**:-
                                   ```
                                          [
                                                 {
                                                        "_id": "6167ef0fad7060784b6239d8",
                                                         "name": "XChilly",
                                                        "dob": "23/09/1994",
                                                        "address": "163 Carolyns Circle ",
                                                        "description": "To some extent I liken slavery to death",
                                                        "createdAt": "2021-10-14T08:49:19.413Z",
                                                        "__v": 0
                                                 }
                                          ]
                                   ```
       
       End-Point Name:- Create A User
              **POST** `/users`
              **Response Body**:-
                                   ``` 
                                          {
                                                 "_id":"616a660508aab3b97a782446"
                                          }
                                   ```
       
       End-Point Name:- Update A User
              **PUT** `/users/:id`
              **Response Body**:- 
                                   ```
                                          {
                                                 "_id": "616a660508aab3b97a782446",
                                                  "name": "YSweet",
                                                  "dob": "23/09/1989",
                                                 "address": "167 Bay Area ",
                                                 "description": "To some extent this is all wrong",
                                                 "__v": 0
                                          }
                                   ```
       
       End-Point Name:- Delete A User
              **DELETE** `/users/:id`
              **Response Body**:-
                                   ```
                                          {
                                                 "message": "Successfully Deleted!"
                                          }
                                   ```


         
           
              
     


