# SpiceTrack API
## API URL
**http://localhost:8080/**

## How to run this API on your local machine

If you want to run this API Server on your local machine, you need to do this steps:

- First, clone this repository.  git clone https://github.com/SpiceTrack/backend-spicetrack.git
- Second, open terminal and go to this project's root directory.
- Third, type npm ci in your terminal and hit enter button.
- Fourth, start xampp.
- fifth, create database name ulikbatik-dev.
- sixth, type npx prisma generate in your terminal and hit enter button.
- seventh, type npx prisma migrate dev in your terminal and hit enter button.
- eighth, type npm run start-dev in your terminal and hit enter button.
- Finally, the server will run on your http://localhost:8080

1. Clone repository ini:  
   ```bash
   git clone https://github.com/SpiceTrack/backend-spicetrack.git
2. Buka terminal dan pindah ke root directory proyek.
3. Instal dependensi:
bash
Salin kode
npm ci
Jalankan XAMPP dan aktifkan MySQL.
Buat database baru dengan nama ulikbatik-dev.
Generate Prisma client:
bash
Salin kode
npx prisma generate
Migrasikan database:
bash
Salin kode
npx prisma migrate dev
Jalankan server dalam mode development:
bash
Salin kode
npm run start-dev
Server akan berjalan di http://localhost:8080.
API Endpoints
Auth Endpoints
Register
POST /register
Untuk mendaftarkan akun pengguna.

Parameter	Type	Description
username	string	Required.
email	string	Required.
password	string	Required.
confirmpassword	string	Required.
Response:

json
Salin kode
{
  "status": "true",
  "message": "Account created successfully",
  "data": {
    "USERID": "",
    "USERNAME": "",
    "EMAIL": "",
    "PASSWORD": "",
    "PROFILEIMG": "",
    "CREATEDAT": "",
    "UPDATEDAT": ""
  },
  "token": ""
}
Login
POST /login
Untuk masuk ke dalam aplikasi.

Parameter	Type	Description
email	string	Required.
password	string	Required.
Response:

json
Salin kode
{
  "status": "true",
  "message": "Login successful",
  "data": {},
  "token": ""
}
User Endpoint
Get User by ID
GET /user/{USERID}
Untuk mendapatkan profil pengguna berdasarkan ID.

Authorization: Bearer Token

Response:

json
Salin kode
{
  "status": true,
  "message": "Fetching user profile successful",
  "data": {
    "USERNAME": "",
    "EMAIL": "",
    "PROFILEIMG": "",
    "post": [
      {
        "POSTID": "",
        "USERID": "",
        "BATIKID": "",
        "POSTIMG": "",
        "CAPTION": "",
        "LIKES": "",
        "CREATEDAT": "",
        "UPDATEDAT": ""
      }
    ],
    "likes": "sumOf(user id in table likes)",
    "total_post": "sumOf(user posts)"
  }
}
Post Endpoint
Make Post
POST /post
Untuk membuat postingan baru.

Parameter	Type	Description
IMAGE	file	Required.
CAPTION	string	Required.
USERID	string	Required.
BATIKID	string	Required.
Authorization: Bearer Token

Response:

json
Salin kode
{
  "status": true,
  "message": "Posting successful",
  "POSTID": ""
}
Likes Endpoint
Likes Post
POST /likes/{USERID}
Untuk menyukai postingan berdasarkan POSTID.

Parameter	Type	Description
POSTID	string	Required.
Authorization: Bearer Token

Response:

json
Salin kode
{
  "status": true,
  "message": "likes post successful"
}
Jika USERID yang sama menekan like pada POSTID yang sama dua kali, maka postingan akan di-unlike.

Response:

json
Salin kode
{
  "status": true,
  "message": "Post unliked successfully"
}
Batik Endpoint
Scan Batik
POST /predict
Untuk menganalisis pola batik menggunakan gambar.

Parameter	Type	Description
attactment	file	Required.
Authorization: Bearer Token

Response:

json
Salin kode
{
  "status": true,
  "message": "Scan successful",
  "result": ""
}
Matahari API
Search Batik Product
POST /search/{query}
Mencari produk batik berdasarkan nama di website Matahari.

Parameter	Type	Description
query	string	Required.
Authorization: Bearer Token

Response:

json
Salin kode
{
  "status": true,
  "message": "Data retrieved successfully",
  "result": [
    {
      "link": "",
      "image": "",
      "title": "",
      "price": ""
    }
  ]
}
License
Proyek ini menggunakan MIT License.

vbnet
Salin kode

Let me know if you want any adjustments or need additional sections!
