module.exports.function = function callContact (contact) {
  // this handles only a single contact
  return 'Dialing ' + contact.number + ' for ' + contact.name;
}
