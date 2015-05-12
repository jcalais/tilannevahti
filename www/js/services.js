angular.module('starter.services', [])

.factory('Events', function() {
  var events = [
    {
      source: "Vesilaitos",
      type: "Vesi",
      title: "Vesi poikki",
      time: "2015-05-01T11:35",
      lat: 60.1733244,
      lng: 24.9410248,
      description: "Veden saanti on poikki alueella. Arvioitu korjausaika 8 tuntia.",
      id: 1
    },
    {
      source: "Pelastuslaitos",
      type: "Liikenne",
      title: "Tankkiauto palaa",
      time: "2015-05-02T12:03",
      lat: 60.2933664,
      lng: 25.0377329,
      description: "Tankkiauto on syttynyt palamaan. Satamaidon tankkiauto, joten tuskin räjähdysvaaraa.",
      id: 2
    },
    {
      source: "Käyttäjä",
      type: "Vesi",
      title: "Vedensaanti tökkii",
      time: "2015-05-01T11:49",
      lat: 60.2080134,
      lng: 24.675114,
      description: "Joudumme juomaan veden sijasta olutta, ei tartte korjata.",
      id: 3
    },
    {
      source: "Sähkölaitos",
      type: "Sähkö",
      title: "Sähköt poikki Siuntion alueella",
      time: "2015-05-01T13:22",
      lat: 60.2117239,
      lng: 24.7288783,
      description: "Suurin osa talouksista pyritään saamaan palautettua valtakunnan verkkoon klo 15:30 mennessä.",
      id: 4
    },
    {
      source: "Käyttäjä",
      type: "Vesi",
      title: "Vesi katkeilee",
      time: "2015-05-01T11:42",
      lat: 60.376754,
      lng: 25.268977,
      description: "Vettä ei ole, halp!",
      id: 5
    },
    {
      source: "Käyttäjä",
      type: "Sähkö",
      title: "Sähköt tulee ja menee",
      time: "2015-05-01T17:17",
      lat: 63.0951412,
      lng: 21.6165128,
      description: "Ilmeisesti tuuli ravistelee johtoja, koska sähköt tulevat ja menevät omia aikojaan",
      id: 6
    },
    {
      source: "Käyttäjä",
      type: "Liikenne",
      title: "Helikopteri tippunut tuusulantielle",
      time: "2015-05-02T11:44",
      lat: 59.9744373,
      lng: 23.4355071,
      description: "Roottori pyörii vielä ja leikkaa viereisen golfkentän nurmikkoa.",
      id: 7
    },
    {
      source: "Puolustusvoimat",
      type: "Liikenne",
      title: "Panssarivaunun rengasrikko",
      time: "2015-05-02T13:39",
      lat: 60.2963218,
      lng: 23.2980117,
      description: "Panssarivaunu suistunut tieltä rengasrikon takia.",
      id: 8
    },
    {
      source: "Käyttäjä",
      type: "Sähkö",
      title: "Ingen elektricitet!",
      time: "2015-05-01T19:23",
      lat: 60.7384937,
      lng: 24.7728925,
      description: "Vi har ringt elverket för tre timmar sen, men ingen el ännu.",
      id: 9
    },
    {
      source: "Poliisi",
      type: "Rikos",
      title: "Vanki karannut Jokelan vankilasta",
      time: "2015-05-01T20:23",
      lat: 60.552881,
      lng: 24.976039,
      description: "Vaarallinen vanki on karannut Jokelan vankilasta klo 20:15. Viimeinen havainto kiipeämässä muurin yli.",
      id: 10
    },
    {
      source: "Käyttäjä",
      type: "Rikos",
      title: "Vankikarkuri bongattu",
      time: "2015-05-01T20:53",
      lat: 60.4384937,
      lng: 24.8728925,
      description: "Samannäköinen kaveri yritti liftata kyytiin.",
      id: 11
    },
    {
      source: "Säteilyturvakeskus",
      type: "Säteily",
      title: "Kohonnut säteilytaso",
      time: "2015-05-01T21:53",
      lat: 61.235036,
      lng: 21.435772,
      description: "Voimalan alueella on mitattu kohonneita säteilytasoja. Asiaa tutkitaan parhaillaan.",
      id: 12
    }
  ];

  // Define all sources and their icons.
  var sourcelist = [
    {
      label: "Käyttäjä", 
      icon: "ion-person"
    },
    {
      label: "Pelastuslaitos", 
      icon: "ion-medkit"
    },
    {
      label: "Poliisi",
      icon: "ion-speakerphone"
    },
    {
      label: "Sähkölaitos",
      icon: "ion-outlet"
    },
    {
      label: "Vesilaitos",
      icon: "ion-waterdrop"
    },
    {
      label: "Puolustusvoimat",
      icon: "ion-flash"
    },
    {
      label: "Säteilyturvakeskus",
      icon: "ion-nuclear"
    }
  ];

  // Define all types and their icons.
  var typelist = [
    {
      label: "Vesi", 
      icon: "ion-waterdrop"
    },
    {
      label: "Sähkö", 
      icon: "ion-outlet"
    },
    {
      label: "Liikenne",
      icon: "ion-android-car"
    },
    {
      label: "Sää",
      icon: "ion-ios-partlysunny-outline"
    },
    {
      label: "Säteily",
      icon: "ion-nuclear"
    },
    {
      label: "Rikos",
      icon: "ion-speakerphone"
    }
  ];

  function getIconForSource(source) {
    for (var i=0 ; i<sourcelist.length ; i++) {
      if (sourcelist[i].label == source) {
        return sourcelist[i].icon;
      }
    }
  };

  function getIconForType(type) {
    for (var i=0 ; i<typelist.length ; i++) {
      if (typelist[i].label == type) {
        return typelist[i].icon;
      }
    }
  };

  return {
    // Return list of all types.
    getTypes: function() {
      return typelist;
    },

    // Return list of all types.
    getSources: function() {
      return sourcelist;
    },

    // Return events by type.
    getBySource: function(source) {
      var ret = [];
      for (var i=0 ; i<events.length ; i++) {
        if (events[i].source == source || !source) {
          events[i].icon = getIconForSource(events[i].source);
          ret.push(events[i]);  
        }
      }
      return ret;
    },

    // Return events by type.
    getByType: function(type) {
      var ret = [];
      for (var i=0 ; i<events.length ; i++) {
        if (events[i].type == type || !type) {
          events[i].icon = getIconForType(events[i].type);
          ret.push(events[i]);  
        }
      }
      return ret;
    },

    // Find an event by its id.
    getById: function(id) {
      for (var i=0 ; i<events.length ; i++) {
        if (events[i].id == id) {
          return events[i];
        }
      }
    },

    addEvent: function(newEvt) {
      var highId = 0;
      for (var i=0 ; i<events.length ; i++) {
        if (events[i].id > highId) {
          highId = events[i].id;
        }
      }
      var newId = highId + 1;
      var newEvtTime = new Date().toISOString();
      events.unshift({
        title: newEvt.title,
        description: newEvt.description,
        source: "Käyttäjä",
        type: newEvt.evttype,
        icon: getIconForType(newEvt.evttype),
        lat: newEvt.lat,
        lng: newEvt.lng,
        time: newEvtTime,
        id: newId
      });
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
