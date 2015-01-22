  // This is a very simple code example. See chat.html for a more involved
  // example.
  $(document).ready(function() {
      console.log("======== creating peer1 ====");
    // Create a new Peer with our demo API key, with debug set to true so we can
    // see what's going on.
    var peer1 = new Peer({ key: 'lwjd5qra8257b9', debug: 3});
    var conn;
    // The `open` event signifies that the Peer is ready to connect with other
    // Peers and, if we didn't provide the Peer with an ID, that an ID has been
    // assigned by the server.
    peer1.on('open', function(id){
        console.log("======== peer1 is ready to connect id: " + id);
      conn = peer1.connect('5555');
      conn.on('open', function() {
          console.log("======= open and ready for data");
          // Receive messages
          conn.on('data', function(data) {
              console.log('====== Received: ', data);
              $('#helloworld').append(data);
              conn.send(' peer');
          });
      });
    });

    // Show browser version
    $('#browsers').text(navigator.userAgent);
  });
