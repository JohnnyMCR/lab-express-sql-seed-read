// const song = require("../controllers/songController");
// const db = require("../db/dbConfig");

// const getAllSongs = async () => {
//     try {
//         const getAllSongs = await db.any("SELECT * FROM songs");
//         return getAllSongs;
//     } catch (error) {
//         return error;
//     }
// };

// const getASong = async (id) => {
//     try {
//         const bookmark = await db.one("SELECT * FROM songs WHERE id=$1", id);
//         return bookmark;
//     } catch (error) {
//         return error;
//     }
// };

// module.exports = {
//     getAllSongs,
//     getASong
// }