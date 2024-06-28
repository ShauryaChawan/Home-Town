# Home Town 2.0

Real Estate Website - for selling and buying properties

## Prisma:
Creinting the model for the first time, or making any changes in the model of the schema.prisma. then stop the server and run the command `npx prisma db push`

## Runn Project:
1. `Socket` : `npm i` | `npm run socket`
2. `Server/Api` : `npm i` | `npm run server`
3. `Frontend/Client` : `npm i` | `npm run dev`
4. `AIML Model` : get the aiml model - https://github.com/ShauryaChawan/Hour-Price-Prediction
   1. Download libraries: `pip install flask joblib numpy flask-cors` | `python app.py` 

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
4. ⚠️ Add `Edit` and `Delete` post feature for "Posts".
   1. Add `Edit` feature to a post.
   2. ✅ Add `Delete` feature to a post
5. ⚠️ newPostPage: 
   1. ⚠️ Basic Form Validation.
   2. ⚠️ Make changes in the Data Base shcema
   3. ⚠️ Delete the `Income Policy`.
   4. ⚠️ Add 'decimal' validation to `Longitude` & `Lattitude`
   5. ⚠️ Make `ReactQuill` component as 'required' / compulsory to fill before sumitting.
   6. ⚠️ Add `BHK` (numbers) and `BHK_or_RK` (dropdown)
   7. ❌ Add `Under Construction?` (boolean) - not required (default value = 0)
   8. ⚠️ Add `RERA` approved? (boolean [0 or 1])
   9. ❌ Add `READY TO MOVE ?` (boolean) - not required (default value = 0)
   10. ⚠️ Add `Resale` (boolean [0 or 1]) - if the property is of type `BUY`.
   11. ⚠️ Add `Predict Price` button, only if the `Type` is `Rent`.
6. ⚠️ AIML Model integration.
7. Add 'React Toastify'.