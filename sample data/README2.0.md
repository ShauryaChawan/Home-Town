## Prisma 📊:
Creating the model for the first time, or making any changes in the model of Prisma's schema (file: `schema.prisma`), then stop the server and run the command `npx prisma db push`.

### Setting Up project again
- Delete the `prisma` folder and uninstall all the prisma dependencies
- Re-setup the prisma again
- `npm i prisma @prisma/client`
- `npx prisma init --datasource-provider mongodb`
- Then copy and paste the mongodb-prisma schema from the `./sample data/MongoDB_Prisma_Schema.txt` to `prisma/schema.prisma`
- `npx prisma db push`

## Run Project 🚀:
1. **Socket**: `npm i` | `npm run socket`
   1. put the '.env-api' in the `api` folder, & rename to `.env`
2. **Server/Api**: `npm i` | `npm run server`
   1. put the '.env-socket' in the `socket` folder, & rename to `.env`
3. **Frontend/Client**: `npm i` | `npm run dev`
4. **AIML Model 🤖**: 
   1. Get the AIML model - https://github.com/ShauryaChawan/Hour-Price-Prediction
   2. Download libraries: `pip install flask joblib numpy flask-cors` | `python app.py`

## Users and Passwords

- John Doe
  - john.doe@gmail.com
  - john123
- Shaurya, Siddhi, Shraddha
  - shaurya@gmail.com
  - shraddha@gmail.com
  - siddhi@gmail.com
  - asd123