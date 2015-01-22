  // This is a very simple code example. See chat.html for a more involved
  // example.
  $(document).ready(function() {
      console.log("======== creating peer2 ====");
    // Create a new Peer with our demo API key, with debug set to true so we can
    // see what's going on.
      
    // Create another Peer with our demo API key to connect to.
    var peer2 = new Peer('5555',{ key: 'lwjd5qra8257b9', debug: 3});
    // The `open` event signifies that the Peer is ready to connect with other
    // Peers and, if we didn't provide the Peer with an ID, that an ID has been
    // assigned by the server.
    peer2.on('open', function(id){
        console.log("======== peer2 is ready to connect id: " + id);
      /*var c = peer2.connect('4444');
      c.on('data', function(data) {
        // When we receive 'Hello', send ' world'.
        $('#helloworld').append(data);
        c.send(' peer');
      });*/
    });
    // Wait for a connection from the second peer.
    peer2.on('connection', function(connection) {
      // This `connection` is a DataConnection object with which we can send
      // data.
      // The `open` event firing means that the connection is now ready to
      // transmit data.
      connection.on('open', function() {
        // Send 'Hello' on the connection.
        connection.send('Hello,');
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