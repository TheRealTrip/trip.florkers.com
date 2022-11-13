const socials = {
    'github': "https://github.com/TheRealTrip",
    'noFriends': "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    'twitch': "https://www.twitch.tv/therealtrip0",
    'source': "https://github.com/TheRealTrip/trip.florkers.com"
}

function openSocial(service) {
    window.open(socials[service], '_blank');
}