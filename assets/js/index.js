const socials = {
    'github': "https://github.com/TheRealTrip",
    'noFriends': "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    'twitch': "https://www.twitch.tv/therealtrip0",
}

function openSocial(service) {
    window.open(socials[service], '_blank');
}