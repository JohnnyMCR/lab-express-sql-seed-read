const songs = require("../controllers/songController");
const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const getAllSongs = await db.any("SELECT * FROM songs");
        return getAllSongs;
    } catch (error) {
        return error;
    }
};

const getASong = async (id) => {
    try {
        const getASong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return getASong;
    } catch (error) {
        return error;
    }
};

const createASong = async (songToAdd) => {
    try {
        const newSong = await db.one("INSERT INTO songs (name, url ,category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", 
        [
            songToAdd.name,
            songToAdd.url,
            songToAdd.category,
            songToAdd.is_favorite,
        ]);
        return newSong;
    } catch (error) {
        return error;
    }
}

const deleteASong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM bookmarks WHERE id=$1 RETURNING *", id);
        return deleteSong;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getASong,
    createASong,
    deleteASong,
}