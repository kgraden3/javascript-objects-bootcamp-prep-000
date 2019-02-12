var playlist = {
  Slowdive: 'Alison',
  'My Bloody Valentine': 'Sometimes'
}
var artistName = "Phil Ochs"
var songTitle = "Here\'s to the State of Mississippi"

function updatePlaylist(playlist,artistName,songTitle){
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi'
  return playlist
}

function removeFromPlaylist(playlist,Slowdive){
  delete playlist.Slowdive
  return playlist
}
