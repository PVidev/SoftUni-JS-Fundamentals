function musicPlaylist(inputData) {
    let playlist = inputData[0].split(' ');
    let commandCount = Number(inputData[1]);

    for (let i = 2; i < 2 + commandCount; i++) {
        let commandParts = inputData[i].split(' * ');
        let action = commandParts[0];

        if (action === "Add Song") {
            let songToAdd = commandParts[1];

            if (!playlist.includes(songToAdd)) {
                playlist.push(songToAdd);
                
                console.log(`${songToAdd} successfully added`);
            }

        } else if (action === "Delete Song") {
            let numberToDelete = Number(commandParts[1]);

            if (numberToDelete <= playlist.length) {
                let deletedSongs = playlist.splice(0, numberToDelete);

                console.log(`${deletedSongs.join(', ')} deleted`);
            }

        } else if (action === "Shuffle Songs") {
            let index1 = Number(commandParts[1]);
            let index2 = Number(commandParts[2]);

            if (index1 < playlist.length && index2 < playlist.length) {
                let temp = playlist[index1];
                playlist[index1] = playlist[index2];
                playlist[index2] = temp;

                console.log(`${playlist[index1]} is swapped with ${playlist[index2]}`);
            }

        } else if (action === "Insert") {
            let songToInsert = commandParts[1];
            let indexToInsert = Number(commandParts[2]);

            if (indexToInsert >= 0 && indexToInsert <= playlist.length) {

                if (!playlist.includes(songToInsert)) {
                    playlist.splice(indexToInsert, 0, songToInsert)
                    console.log(`${songToInsert} successfully inserted`);
                } else {
                    console.log("Song is already in the playlist");
                }

            } else {
                console.log("Index out of range");
            }

        } else if (action === "Sort") {
            playlist.sort((a, b) => b.localeCompare(a));

        } else if (action === "Play") {
            console.log("Songs to Play:");
            console.log(playlist.join('\n'));
        }
    }
}

musicPlaylist(["Imagine BadGuy BohemianRhapsody BlindingLights", "6", "Add Song * ShapeOfYou", "Delete Song * 2", "Shuffle Songs * 0 * 3", "Insert * RollingInTheDeep * 1", "Sort", "Play"]);