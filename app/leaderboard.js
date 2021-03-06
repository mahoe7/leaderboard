/**
 * Created by mhoe1 on 10/11/2016.
 */
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function() {
      return PlayersList.find();
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected";
      }
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  })
}

if(Meteor.isServer) {
  console.log("Hello server");
}