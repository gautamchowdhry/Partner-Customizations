$(function () {
	if (location.pathname.lastIndexOf('/registration', 0) === -1
		&& !document.getElementById('discountCode')) {
		//console.log('not on registration page');
		return;
	}

	var user_id = $('#lapi-user-id').val();

	if (user_id) {
		var headers = {
			'accept': 'application/json',
			'x-api-key': '4acc785ea28e2636b211ef001e94870e'
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
				$discountCode = $('#discountCode');
				$discountCode.val('BRONZE');
				$discountCode.attr('readonly', true);
        $discountCode.attr("style", "background: #CCC; color: #333;border: 1px solid #666");
			}
		}).fail(function (data) {
			// I guess we don't really care if it fails
			//console.log('failure querying registrations');
		});
	}
});