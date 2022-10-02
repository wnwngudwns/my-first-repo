const s_pos = "./test";

get_js(s_pos);

function get_js(location) {

	const fs = require('fs');
	const path = require('path');
	const util = require('util');

	fs.stat(location, function(err, stat) {
		if(stat.isDirectory() == true)
		{

		const read_dir = util.promisify(fs.readdir);

			read_dir(location, function(err, fileList){
				if(!err){
					fileList.forEach(async file => {
						file = path.join(location, file);
						
						await get_js(file);
					});
				}
				else console.err(err);
			});

		}
		else if(path.extname(location) == '.js')
			console.log(location);
	});
}
