# Home Town 2.0

Real Estate Website - for selling, buying and renting properties.

## Tech Stack (Technologies and Libraries):

1. Frontend:
   1. React.js
   2. Axios
   3. Bcryptjs
   4. DOMpurify
   5. Leaflet.js
   6. React-Router-DOM
   7. React-Quill
   8. Sass
   9. Socket.IO-Client
   10. Timeago.js
   11. Zustand
2. Backend:
   1. Node.js
   2. Express.js
   3. Prisma
   4. MongoDB
   5. JWT 
   6. cors
   7. cookie-parser
   8. dotenv
   9.  nodemon
   10. Bcrypt

## Functionalities:

1. User:
   1. Login
   2. Register
   3. Logout
   4. Update Profile
   5. View Profile
   6. View all created property listing on the profile page
   7. View all saved property listing on the profile page
2. Post (Property Ad):
   1. Create Post (Add Post Page)
   2. Delete Post 
   3. Update Post (Edit Post Page)
   4. Read A Post (Single Post Page)
   5. Save a Post
3. Chat: MongoDB + Soket.IO

## Prisma:
Creating the model for the first time, or making any changes in the model of the prisma's schema (file : `schema.prisma`), then stop the server and run the command `npx prisma db push`

## Runn Project:
1. `Socket` : `npm i` | `npm run socket`
2. `Server/Api` : `npm i` | `npm run server`
3. `Frontend/Client` : `npm i` | `npm run dev`
4. `AIML Model` : 
   1. Get the aiml model - https://github.com/ShauryaChawan/Hour-Price-Prediction
   2. Download libraries: `pip install flask joblib numpy flask-cors` | `python app.py` 

## Bugs / Features to be implemented beyond project scope - To Do:
1. ✅ Home Page: ✅ Remove unsed link from nav bar
2. Securi Features:
   1. Login page:
      1. ✅ Basic Form Validation
      2. Compare the password in frontend when login the password and then generate the jwt tocken and cookie from server. OR
      3. Get the Hashed Password from the backend, compare it with the user's entered password, and if matched, then send json, informing server that the password matched, then the server will create the JWT tocken and send it
   2. ✅ Register Page: 
      1. ✅ Hash the password in frontend while registering the user
      2. ✅ Basic Form Validation
3. ✅ Chat:
   1. ✅ Solve the error of socket.io
   2. ✅ Add functionality to "Send a Message".
4. ✅  editPostPage.
   1. ✅ Add `Edit` feature to a post.
   2. Change the logic, Iif the images are not to be change.
   3. ✅ Add `Delete` feature to a post
5. ⚠️ newPostPage: 
   1. ✅ Basic Form Validation.
   2. ✅  Make changes in the Data Base shcema
   3. ✅ Delete the `Income Policy`.
   4. ⚠️ Add 'decimal' validation to `Longitude` & `Lattitude`
   5. ✅  Make `ReactQuill` component as 'required' / compulsory to fill before sumitting.
   6. ✅ Add `BHK` (numbers) and `BHK_or_RK` (dropdown) and also to database
   7. ✅ Add `Under Construction?` (boolean) and also to database
   8. ✅ Add `RERA` approved? (boolean [0 or 1]) and also to database
   9. ❌ Add `READY TO MOVE ?` (boolean) - not required (default value = 0) 
   10. ❌ Add `Resale` (boolean [0 or 1] => default value = 1 [as our website is for resale only, also not time to implement the following feature !!]) - if the property is of type `BUY`.
   11. ✅  Add `Predict Price` button, only if the `Type` is `Rent`.
6. ✅  AIML Model integration.
7. Add 'React Toastify'.

## Note:
1. This is a guided project, but there were few bugs and missing features that i have added, and have mentioned above.
2. I have Integrated a mojor feature of 'House Price Prediction' which is on other github repository. I have created an api for that preiction model, and i am calling it in the "Add Post Page".