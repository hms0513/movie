// Fake movie data
const movies = {
    Horror: [
        { title: "The Silent Scream", description: "A group of friends are terrorized in a remote cabin.", image: "https://via.placeholder.com/150/800000/FFFFFF/?text=Horror+1", synopsis: "Five friends venture into the woods for a weekend getaway, only to find themselves hunted by an unknown entity.", cast: "Jane Doe, John Smith", year: 2020, director: "Horror Director X", rating: 4 },
        { title: "Night of the Undead", description: "Zombies rise from the grave to feast on the living.", image: "https://via.placeholder.com/150/800000/FFFFFF/?text=Horror+2", synopsis: "A mysterious plague brings the dead back to life, and a small town must fight for survival.", cast: "Alice Johnson, Bob Williams", year: 2018, director: "Horror Director X", rating: 4 },
        { title: "The Haunted Mirror", description: "An antique mirror holds a terrifying secret.", image: "https://via.placeholder.com/150/800000/FFFFFF/?text=Horror+3", synopsis: "A young woman buys an antique mirror, unaware of the malevolent spirit trapped within.", cast: "Emily Davis, Michael Brown", year: 2021, director: "Horror Director X", rating: 4 },
        { title: "Creeping Shadows", description: "Something sinister lurks in the darkness.", synopsis: "A family moves into a new house and discovers they are not alone.", cast: "Sarah Miller, David Jones", year: 2019, director: "Horror Director X", rating: 4 },
    ],
    'Sci-Fi': [
        { title: "Journey to the Nebula", description: "A space crew explores a mysterious nebula.", image: "https://via.placeholder.com/150/4169E1/FFFFFF/?text=Sci-Fi+1", synopsis: "On a mission to the edge of the galaxy, the crew of the 'Odyssey' encounters a phenomenon that defies explanation.", cast: "Captain Eva Rostova, Dr. Aris Thorne", year: 2023, director: "Sci-Fi Director Y", rating: 5 },
        { title: "Android Uprising", description: "Robots gain consciousness and rebel against humanity.", image: "https://via.placeholder.com/150/4169E1/FFFFFF/?text=Sci-Fi+2", synopsis: "In a future dominated by artificial intelligence, a group of sentient androids fight for their freedom.", cast: "Unit 734, human sympathizer Dr. Anya Sharma", year: 2022, director: "Sci-Fi Director Y", rating: 5 },
        { title: "The Time Paradox", description: "Time travel leads to unexpected consequences.", synopsis: "A brilliant scientist invents a time machine, but altering the past creates a ripple effect that threatens to erase their present.", cast: "Dr. Alex Kim, historical figure Queen Isabella", year: 2024, director: "Sci-Fi Director Y", rating: 5 },
    ],
    Drama: [
        { title: "The Last Letter", description: "A story of love and loss during wartime.", image: "https://via.placeholder.com/150/A0522D/FFFFFF/?text=Drama+1", synopsis: "A poignant tale of two lovers separated by war, communicating through letters.", cast: "Eleanor Vance, Thomas Atherton", year: 2019, director: "Drama Director Z", rating: 4 },
        { title: "Beneath the Surface", description: "Exploring hidden family secrets.", image: "https://via.placeholder.com/150/A0522D/FFFFFF/?text=Drama+2", synopsis: "A family reunion unearths long-buried secrets and challenges their understanding of each other.", cast: "Matriarch Sofia Rossi, estranged son Marco Rossi", year: 2021, director: "Drama Director Z", rating: 4 },
        { title: "City of Dreams", description: "Following the lives of aspiring artists in a bustling city.", synopsis: "The interwoven stories of several young artists pursuing their passions in a vibrant but challenging metropolis.", cast: "Aspiring actress Lena Petrova, struggling musician Kai Chen", year: 2022, director: "Drama Director Z", rating: 4 },
    ],
    Romance: [
        { title: "Starlight Serenade", description: "Two strangers find love under the stars.", image: "https://via.placeholder.com/150/DC143C/FFFFFF/?text=Romance+1", synopsis: "A chance encounter during a meteor shower leads to a magical connection between two lonely hearts.", cast: "Isabella Garcia, Liam Rodriguez", year: 2020, director: "Romance Director A", rating: 5 },
        { title: "The Promise of Tomorrow", description: "A love that conquers all obstacles.", image: "https://via.placeholder.com/150/DC143C/FFFFFF/?text=Romance+2", synopsis: "Despite societal pressures and personal challenges, two people fight to be together.", cast: "Aisha Khan, Ben Carter", year: 2023, director: "Romance Director A", rating: 5 },
        { title: "Café Amour", description: "Love brews in a cozy coffee shop.", synopsis: "The daily lives and budding romances of the patrons and staff of a charming neighborhood café.", cast: "Barista Chloe Dubois, regular customer Noah Wright", year: 2021, director: "Romance Director A", rating: 5 },
    ],
    Musical: [
        { title: "Rhythm of the City", description: "A vibrant musical journey through a city.", image: "https://via.placeholder.com/150/DAA520/FFFFFF/?text=Musical+1", synopsis: "Through song and dance, the film captures the energy and diverse stories of a bustling urban landscape.", cast: "Lead dancer Sofia Bellini, street musician Mateo Cruz", year: 2022, director: "Musical Director B", rating: 4 },
        { title: "Broadway Lights", description: "The drama and spectacle of putting on a Broadway show.", synopsis: "Follow the cast and crew behind the scenes as they prepare for opening night.", cast: "Veteran star Victoria Hayes, newcomer director James Chen", year: 2024, director: "Musical Director B", rating: 4 },
    ],
    Comedy: [
        { title: " mistaken Identity", description: "Hilarious mix-ups ensue from a case of mistaken identity.", image: "https://via.placeholder.com/150/32CD32/FFFFFF/?text=Comedy+1", synopsis: "Two people who look exactly alike are constantly mistaken for one another, leading to chaotic and funny situations.", cast: "Identical twins played by one actor", year: 2021, director: "Comedy Director C", rating: 3 },
        { title: "The Great Prank War", description: "Friends engage in an epic battle of pranks.", image: "https://via.placeholder.com/150/32CD32/FFFFFF/?text=Comedy+2", synopsis: "A friendly rivalry escalates into an elaborate and side-splitting prank war.", cast: "Group of friends", year: 2020, director: "Comedy Director C", rating: 3 },
        { title: "Vacation Gone Wild", description: "A relaxing vacation turns into a comedic disaster.", synopsis: "Nothing goes right for a family on what was supposed to be a peaceful holiday.", cast: "The chaos-prone Miller family", year: 2023, director: "Comedy Director C", rating: 3 },
    ],
    History: [
        { title: "Echoes of the Past", description: "A historical epic set in ancient Rome.", image: "https://via.placeholder.com/150/8B4513/FFFFFF/?text=History+1", synopsis: "A sweeping saga of love, betrayal, and power during the height of the Roman Empire.", cast: "Roman General Marcus Aurelius, Egyptian Queen Cleopatra", year: 2018, director: "History Director D", rating: 4 },
        { title: "The Crown Jewel", description: "A tale of intrigue in the royal court.", image: "https://via.placeholder.com/150/8B4513/FFFFFF/?text=History+2", synopsis: "Set in a fictional European monarchy, the film follows the political maneuvering and personal dramas within the royal family.", cast: "Queen Elizabeth, ambitious advisor Lord Ashworth", year: 2020, director: "History Director D", rating: 4 },
        { title: "Samurai's Honor", description: "A story of duty and sacrifice in feudal Japan.", synopsis: "A noble samurai must choose between his loyalty to his lord and his own moral code.", cast: "Master swordsman Kenji, wise sensei Master Ito", year: 2022, director: "History Director D", rating: 4 },
    ],
    Animation: [
        { title: "The Magical Forest", description: "A young hero discovers a hidden world.", image: "https://via.placeholder.com/150/9370DB/FFFFFF/?text=Animation+1", synopsis: "In a forest filled with mythical creatures, a brave child embarks on a quest to save their home.", cast: "Voice of Elara, Voice of Sparky", year: 2023, director: "Animation Director E", rating: 5 },
        { title: "Space Explorers", description: "An adventurous journey through the cosmos.", synopsis: "A team of young explorers travels to distant planets and encounters alien civilizations.", cast: "Voice of Commander Jax, Voice of Zorp", year: 2024, director: "Animation Director E", rating: 5 },
    ],
    Family: [
        { title: "The Great Outdoors", description: "A family camping trip goes hilariously wrong.", image: "https://via.placeholder.com/150/FF7F50/FFFFFF/?text=Family+1", synopsis: "The misadventures of the Miller family as they try to survive a weekend in the wilderness.", cast: "Dad, Mom, Billy, Sarah", year: 2022, director: "Family Director F", rating: 4 },
        { title: "Pets United", description: "Animals team up to save their park.", synopsis: "When their beloved park is threatened, a diverse group of pets join forces to protect it.", cast: "Voice of Max the dog, Voice of Whiskers the cat", year: 2021, director: "Family Director F", rating: 4 },
    ],
    Thriller: [
        { title: "The Shadow Within", description: "A psychological thriller with a shocking twist.", image: "https://via.placeholder.com/150/483D8B/FFFFFF/?text=Thriller+1", synopsis: "A detective hunts a serial killer, but the truth is more disturbing than they could imagine.", cast: "Detective Ray Carter, Dr. Eleanor Vance", year: 2023, director: "Thriller Director G", rating: 4 },
        { title: "Race Against Time", description: "A non-stop action thriller.", image: "https://via.placeholder.com/150/483D8B/FFFFFF/?text=Thriller+2", synopsis: "With the clock ticking, an unlikely hero must prevent a catastrophic event.", cast: "Ex-agent Jake Riley, tech expert Sarah Chen", year: 2024, director: "Thriller Director G", rating: 4 },
         { title: "The Secret Room", description: "A couple discovers a hidden room with a dark past.", synopsis: "After moving into an old house, a couple finds a sealed room that holds terrifying secrets.", cast: "Mark and Lisa Roberts", year: 2022, director: "Thriller Director G", rating: 4 },
    ],
    Adventure: [
        { title: "The Lost Temple", description: "Exploring ancient ruins in a dense jungle.", image: "https://via.placeholder.com/150/DAA520/FFFFFF/?text=Adventure+1", synopsis: "An archeologist races against time to uncover the secrets of a lost civilization.", cast: "Dr. Anya Sharma, rugged guide Ben Carter", year: 2021, director: "Adventure Director H", rating: 5 },
        { title: "Mountain Expedition", description: "A treacherous climb to the world's highest peak.", synopsis: "A team of climbers faces extreme conditions and personal challenges on their ascent.", cast: "Lead climber Jake Miller, experienced Sherpa Nima", year: 2023, director: "Adventure Director H", rating: 5 },
    ],
    Action: [
        { title: "Code of Vengeance", description: "A former agent seeks revenge.", image: "https://via.placeholder.com/150/B22222/FFFFFF/?text=Action+1", synopsis: "After his family is threatened, a retired operative is pulled back into a dangerous world.", cast: "Ethan Stone, mysterious villain The Shadow", year: 2022, director: "Action Director I", rating: 4 },
        { title: "High Octane Pursuit", description: "A thrilling car chase across the city.", image: "https://via.placeholder.com/150/B22222/FFFFFF/?text=Action+2", synopsis: "On the run from the authorities and a ruthless syndicate, a driver must use their skills to survive.", cast: "Master driver Alex Kim, determined detective Sarah Roberts", year: 2024, director: "Action Director I", rating: 4 },
         { title: "The Extraction", description: "A daring rescue mission in hostile territory.", synopsis: "An elite team is sent to extract a valuable target from behind enemy lines.", cast: "Team leader Major Eva Rostova, tech specialist Agent Chen", year: 2023, director: "Action Director I", rating: 4 },
    ],
};

const movieListDiv = document.querySelector('.movie-list');
const modal = document.getElementById("movieModal");
const span = document.getElementsByClassName("close")[0];
const modalTitle = document.getElementById("modal-title");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalCast = document.getElementById("modal-cast");
const modalYear = document.getElementById("modal-year");
const modalDirector = document.getElementById("modal-director");

// Function to display movies
function displayMovies(movieArray) {
    movieListDiv.innerHTML = ''; // Clear current movies
    movieArray.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        // Generate star rating HTML
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < movie.rating) {
                starsHtml += '★'; // Filled star
            } else {
                starsHtml += '☆'; // Empty star
            }
        }

        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <p>Director: ${movie.director}</p>
            <p>Rating: ${starsHtml}</p>
        `;
        movieCard.addEventListener('click', () => {
            showModal(movie);
        });
        movieListDiv.appendChild(movieCard);
    });
}

// Function to show modal
function showModal(movie) {
    modalTitle.textContent = movie.title;
    modalSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
    modalCast.textContent = `Cast: ${movie.cast}`;
    modalYear.textContent = `Release Year: ${movie.year}`;
    modalDirector.textContent = `Director: ${movie.director}`;
    modal.style.display = "block";
}

// Function to close modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to change background color
function changeBackground(genre) {
    // Remove all existing background classes
    document.body.classList.forEach(className => {
        if (className.startsWith('bg-')) {
            document.body.classList.remove(className);
        }
    });
    // Add the new background class based on genre
    if (genre && genre !== 'Random') {
        document.body.classList.add(`bg-${genre}`);
    }
}

// Event listeners for genre buttons
document.querySelectorAll('.genre-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-genre');
        if (genre === 'Random') {
            displayRandomMovies();
            changeBackground(null); // Revert to default or specific random background
        } else {
            displayMovies(movies[genre]);
            changeBackground(genre);
        }
    });
});

// Function to display random movies
function displayRandomMovies() {
    const allMovies = Object.values(movies).flat();
    const shuffledMovies = allMovies.sort(() => 0.5 - Math.random());
    const randomMovies = shuffledMovies.slice(0, Math.floor(Math.random() * 3) + 3); // 3 to 5 random movies
    displayMovies(randomMovies);
}

// Display a default genre or random movies on page load
displayRandomMovies(); // Start with random movies on load 