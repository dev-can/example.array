module.exports.function = function conferenceCall (contacts) {
  // now this contact can be an array, or, let's assume it is. 
  rslt = ""
  for (var i=0; i<contacts.length; i++) {
    rslt += 'Dialing ' + contacts[i].number + ' for ' + contacts[i].name + '\n'
  }
  return rslt;
}
