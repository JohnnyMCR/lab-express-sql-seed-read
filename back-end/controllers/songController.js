const express = require("express");
const songs = express.Router();
const { getAllSongs, getASong, createASong, deleteASong } = require("../queries/songs")

songs.get("/", async (req, res) => {
    const AllSongs = await getAllSongs();

    if (AllSongs) {
        res.status(202).json(AllSongs)
    } else {
        res.status(500).json({ error: 'Server Error' })
    }
})

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (song) {
        res.status(200).json(song)
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route
songs.post('/', async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createASong(newSong)
        res.status(202).json(addedSong)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// delete route
songs.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteASong(id);
        res.status(200).json(deletedSong)
    } catch (error) {
        res.sta(400).json({ error: error })
    }
})

module.exports = songs;