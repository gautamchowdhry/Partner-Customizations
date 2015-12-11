$(function () {
	if (location.pathname.lastIndexOf('/registration', 0) === -1
		&& !document.getElementById('discountCode')) {
		//console.log('not on registration page');
		return;
	}

  console.log('Hello World2');

	var user_id = $('#lapi-user-id').val();

	if (user_id) {
		var headers = {
			'accept': 'application/json',
			'x-api-key': '7f3d0fe9873c0d45a39845e093c49e41'
		};

		var site_name = $('#lapi-site-name').val();
		var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;

		$.ajax(site_url + '/users/' + user_id + '/registrations', {
			dataType: 'json',
			cache: false, 
			headers: headers
		}).done(function (data) {
			var regCount = 0;
			for (var i = 0, len = data.length; i < len; i++) {
				var reg = data[i];
				if (reg.programState == 'UPCOMING' && reg.userType == 'CHILD') {
					regCount++;
					
				}
			}

			if (regCount > 1) {
        console.log('Multiple');
			}
		}).fail(function (data) {
			// I guess we don't really care if it fails
			//console.log('failure querying registrations');
		});
	}
});