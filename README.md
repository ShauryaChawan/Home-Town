# 🏠 Home Town 🏠

Real Estate Website - for selling, buying, and renting properties.

## ⚙️ Tech Stack (Technologies and Libraries) 👩‍💻:

1. Frontend 👩‍💻:
   1. React.js ⚛️
   2. Axios 📡
   3. Bcryptjs 🔒
   4. DOMpurify 🧼
   5. Leaflet.js 🗺️
   6. React-Router-DOM 🛤️
   7. React-Quill ✒️
   8. Sass 🎨
   9. Socket.IO-Client 🔄
   10. Timeago.js ⏳
   11. Zustand 🐻

2. Backend ⚒️:
   1. Node.js 🟢
   2. Express.js 🚂
   3. Prisma 📊
   4. MongoDB 🍃
   5. JWT 🛡️
   6. CORS 🌐
   7. cookie-parser 🍪
   8. dotenv 🔑
   9. nodemon 🔄
   10. Bcrypt 🔒

## Functionalities 📝:

1. **User 👤**:
   1. Login 🔑
   2. Register 📝
   3. Logout 🚪
   4. Update Profile ✏️
   5. View Profile 👁️
   6. View all created property listings on the profile page 🏠
   7. View all saved property listings on the profile page 📌

2. **Post (Property Ad) 🏢**:
   1. Create Post (Add Post Page) ➕
   2. Delete Post 🗑️
   3. Update Post (Edit Post Page) ✏️
   4. Read A Post (Single Post Page) 📖
   5. Save a Post 📌

3. **Chat 💬**: MongoDB + Socket.IO

## Prisma 📊:
Creating the model for the first time, or making any changes in the model of Prisma's schema (file: `schema.prisma`), then stop the server and run the command `npx prisma db push`.

## Run Project 🚀:
1. **Socket**: `npm i` | `npm run socket`
2. **Server/Api**: `npm i` | `npm run server`
3. **Frontend/Client**: `npm i` | `npm run dev`
4. **AIML Model 🤖**: 
   1. Get the AIML model - https://github.com/ShauryaChawan/Hour-Price-Prediction
   2. Download libraries: `pip install flask joblib numpy flask-cors` | `python app.py`

## 🪲 Bugs / Features to be implemented - To Do 📝:
1. ✅ **Home Page**: ✅ Remove unused links from the nav bar.
2. **Security Features 🔒**:
   1. **Login Page**:
      1. ✅ Basic Form Validation.
      2. Compare the password in the frontend when logging in, then generate the JWT token and cookie from the server. OR
      3. Get the Hashed Password from the backend, compare it with the user's entered password, and if matched, then send JSON informing the server that the password matched, then the server will create the JWT token and send it.
   2. **Register Page**:
      1. ✅ Hash the password in the frontend while registering the user.
      2. ✅ Basic Form Validation.
3. ✅ **Chat**:
   1. ✅ Solve the error of Socket.IO.
   2. ✅ Add functionality to "Send a Message".
4. ✅ **Edit Post Page**:
   1. ✅ Add `Edit` feature to a post.
   2. Change the logic if the images are not to be changed.
   3. ✅ Add `Delete` feature to a post.
5. ⚠️ **New Post Page**:
   1. ✅ Basic Form Validation.
   2. ✅ Make changes in the Database schema.
   3. ✅ Delete the `Income Policy`.
   4. ⚠️ Add 'decimal' validation to `Longitude` & `Latitude`.
   5. ✅ Make `ReactQuill` component as 'required' / compulsory to fill before submitting.
   6. ✅ Add `BHK` (numbers) and `BHK_or_RK` (dropdown) and also to database.
   7. ✅ Add `Under Construction?` (boolean) and also to database.
   8. ✅ Add `RERA approved?` (boolean [0 or 1]) and also to database.
   9. ❌ Add `READY TO MOVE?` (boolean) - not required (default value = 0).
   10. ❌ Add `Resale` (boolean [0 or 1] => default value = 1 [as our website is for resale only, also not time to implement the following feature!!]) - if the property is of type `BUY`.
   11. ✅ Add `Predict Price` button, only if the `Type` is `Rent`.
6. ✅ **AIML Model Integration**.
7. Add **React Toastify** 🍞.

### Future Scope 🚀:

1. **Advanced Search and Filtering 🔍:**
   - Implement AI-driven search suggestions and property recommendations based on user preferences and behavior.
   - Add advanced filtering options like neighborhood, school district, crime rates, and nearby amenities.

2. **Virtual Tours and 3D Viewing 🏠🕶️:**
   - Integrate virtual reality (VR) or 3D tour features to provide immersive property viewing experiences.
   - Allow users to explore properties with panoramic views and interactive floor plans.

3. **Enhanced Security Features 🔒:**
   - Implement multi-factor authentication (MFA) for user accounts.
   - Add end-to-end encryption for chat and messaging features to enhance data privacy.
   - Fixing top 10 Web Application Security Risks (Top 10 OSCP Security Risks).

4. **Property Management Tools 🛠️:**
   - Introduce tools for property owners to manage their listings, schedule viewings, and communicate with potential buyers/renters.
   - Add tenant management features for landlords, such as rent collection and maintenance request tracking.

5. **AI-Powered Property Valuation 📈🤖:**
   - Improve the existing AIML model to include predictive analytics for property valuation, considering market trends, location, and property features.
   - Allow users to compare estimated prices with market averages.

6. **Mobile Application 📱:**
   - Develop a mobile app version (React Native) of the platform to reach a broader audience and provide on-the-go access.
   - Include push notifications for new property listings, price changes, and messages.

7. **User Reviews and Ratings ⭐:**
   - Add a feature for users to leave reviews and ratings for properties and agents.
   - Implement a reputation system for agents based on user feedback.

8. **Localization and Global Expansion 🌍:**
   - Support multiple languages and currencies to expand the platform's reach to international markets.
   - Customize the platform for different regions, considering local real estate laws and practices.

9. **Data Analytics and Reporting 📊:**
    - Provide property owners and real estate agents with detailed analytics on property views, inquiries, and market performance.
    - Offer insights into user demographics and behavior to optimize property listings.
