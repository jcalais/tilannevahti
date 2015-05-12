angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, Events) {
  $scope.types = Events.getTypes();
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile, Events) {
  var events = Events.getByType();

  var myLatlng = new google.maps.LatLng(60.1733244,24.9410248);
    
  var mapOptions = {
    center: myLatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var markers = [];
  var info,pos,compiledHtml;
  var infowindow = new google.maps.InfoWindow({content: 'Loading ...'});
  // Loop through all events and make them markers in the map.
  for (i=0 ; i<events.length ; i++) {
    pos = new google.maps.LatLng(events[i].lat, events[i].lng);
    compiledHtml = $compile('<h2 class="map-infowindow"><i class="icon ' +  events[i].icon + '"></i> <a href="#/tab/feed/' + events[i].id + '">' + events[i].title + '</a></h2>')($scope);
    markers.push(new google.maps.Marker({
      position: pos,
      map: map,
      title: events[i].title,
      html: compiledHtml[0]
    }));

    google.maps.event.addListener(markers[markers.length-1], 'click', function() {
      infowindow.setContent(this.html);
      infowindow.open(map, this);
    });
  }

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.events = Events.getByType();

  });
})

.controller('FeedCtrl', function($scope, Events) {
  $scope.events = Events.getBySource();
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.events = Events.getBySource();
  });
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.evt = Events.getById($stateParams.eventId);
})

.controller('AddCtrl', function($scope, Events) {
  $scope.types = Events.getTypes();

  var mypos;
  var myLatlng = new google.maps.LatLng(60.1733244,24.9410248);
    
  var mapOptions = {
    center: myLatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-add"), mapOptions);
  var myInfowindow = new google.maps.InfoWindow({content: 'Loading ...'});
  $scope.evt = [];
  $scope.evt.lat = "";
  $scope.evt.lng = "";
  if (!mypos) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.evt.lat = pos.coords.latitude;
      $scope.evt.lng = pos.coords.longitude;
      mypos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      map.setCenter(mypos);
      var mymarker = new google.maps.Marker({
        position: mypos,
        map: map,
        title: "Sinä olet täällä!",
        html: '<h2 class="map-infowindow">Sinä olet täällä</h2>'
      });
      google.maps.event.addListener(mymarker, 'click', function() {
        myInfowindow.setContent(this.html);
        myInfowindow.open(map, this);
      });
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  }
  
  $scope.addEvent = function(newEvt) {
    Events.addEvent(newEvt);
    newEvt.title = "";
    newEvt.description = "";
    newEvt.type = "";
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
