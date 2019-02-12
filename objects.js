var playlist = {
  Slowdive: 'Alison',
  My Bloody Valentine: 'Sometimes'
}
var artistName = "Phil Ochs"
var songTitle = "Here\'s to the State of Mississippi"

function updatePlaylist(playlist,artistName,songTitle){
  playlist['artistName'] = 'songTitle'
  return playlist
}

function removeFromPlaylist(playlist,Slowdive){
  delete playlist.Slowdive
  return playlist
}
