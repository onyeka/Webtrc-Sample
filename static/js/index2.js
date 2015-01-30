  // This is a very simple code example. See chat.html for a more involved
  // example.
  $(document).ready(function() {
      console.log("======== creating peer2 ====");

    // Create a Peer with the API key. Both peers would use the same key
    //var peer2 = new Peer('3333',{ host: 'localhost', port: 8009,
      //                   path: '', debug: 3});
      var peer2 = new Peer('3333',{ key: 'fcs57y46f9h8semi', debug: 3});
      
    /***************************************************************************
     * The `open` event signifies that the Peer is ready to connect with other
     * Peers and, if we didn't provide the Peer with an ID, that an ID has been
     * assigned by the server.
     ***************************************************************************/
    peer2.on('open', function(id){
        console.log("======== peer2 with id: " + id + " is awaiting connections ");
    });
    // Wait for a connection from the second peer.
    peer2.on('connection', function(connection) {
      // This `connection` is a DataConnection object with which we can sendk
      // data.
      // The `open` event firing means that the connection is now ready to
      // transmit data.
      connection.on('open', function() {
        // Send 'Hello' on the connection.
        connection.send("$('#helloworld').append('<div> <h1> Modify Dom</div>');");
        //connection.send("$('#helloworld').append('<div> <img src='../static/assets/Happy-face.png'></div>');");
      });
      // The `data` event is fired when data is received on the connection.
      connection.on('data', function(data) {
        // Append the data to body.
        $('#helloworld').append(data);
      });
    });
    // Show browser version
    $('#browsers').text(navigator.userAgent);
  });
