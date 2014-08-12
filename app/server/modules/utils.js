exports.generateSlug = function(str) {
		
		str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();
		
		// remove accents, swap ñ for n, etc
		var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
		var to   = "aaaaeeeeiiiioooouuuunc------";
		for (var i=0, l=from.length ; i<l ; i++) {
		    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}

		str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		    .replace(/\s+/g, '-') // collapse whitespace and replace by -
		    .replace(/-+/g, '-'); // collapse dashes

		return str;

		/*
		// 1) convert to lowercase
		// 2) remove dashes and pluses
		// 3) replace spaces with dashes
		// 4) remove everything but alphanumeric characters and dashes
		
		return str.toLowerCase()
					.replace(/-+/g, '') // trim
					.replace(/\s+/g, '-')
					.replace(/[^a-z0-9-]/g, '');
		*/
	};
