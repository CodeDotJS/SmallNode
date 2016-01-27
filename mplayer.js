var fs = require('fs');

var lame = require('lame');

var speaker = require('speaker');

fs.createReadStream(process.argv[2])

.pipe(new lame.Decoder())

.on('format', function(format) {
  
  this.pipe(new speaker(format));
  
});
