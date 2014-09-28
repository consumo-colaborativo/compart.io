'use strict';

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.set('X-Auth-Required', 'true');
	req.session.returnUrl = req.originalUrl;
	res.redirect('/login/');
}

function ensureAdmin(req, res, next) {
	if (req.user.canPlayRoleOf('admin')) {
		return next();
	}
	res.redirect('/');
}

function ensureAccount(req, res, next) {
	if (req.user.canPlayRoleOf('account')) {
		if (req.app.config.requireAccountVerification) {
			if (req.user.roles.account.isVerified !== 'yes' && !/^\/account\/verification\//.test(req.url)) {
				return res.redirect('/account/verification/');
			}
		}
	return next();
	}
	
	res.redirect('/');
}
	

exports = module.exports = function(app, passport) {
  //front end
  //app.get('/', require('./views/index').init);
  //app.get('/about/', require('./views/about/index').init);
  //app.get('/contact/', require('./views/contact/index').init);
  //app.post('/contact/', require('./views/contact/index').sendMessage);

  //admin
	//app.all('/admin*', ensureAuthenticated);
	//app.all('/admin*', ensureAdmin);
	//app.get('/admin/', require('./views/admin/index').init);

	//admin > users
	//app.get('/admin/users/', require('./views/admin/users/index').find);
	//app.post('/admin/users/', require('./views/admin/users/index').create);
	//app.get('/admin/users/:id/', require('./views/admin/users/index').read);
	//app.put('/admin/users/:id/', require('./views/admin/users/index').update);
	//app.put('/admin/users/:id/password/', require('./views/admin/users/index').password);
	//app.put('/admin/users/:id/role-admin/', require('./views/admin/users/index').linkAdmin);
	//app.delete('/admin/users/:id/role-admin/', require('./views/admin/users/index').unlinkAdmin);
	//app.put('/admin/users/:id/role-account/', require('./views/admin/users/index').linkAccount);
	//app.delete('/admin/users/:id/role-account/', require('./views/admin/users/index').unlinkAccount);
	//app.delete('/admin/users/:id/', require('./views/admin/users/index').delete);
	
	//admin > administrators
	/*
	app.get('/admin/administrators/', require('./views/admin/administrators/index').find);
	app.post('/admin/administrators/', require('./views/admin/administrators/index').create);
	app.get('/admin/administrators/:id/', require('./views/admin/administrators/index').read);
	app.put('/admin/administrators/:id/', require('./views/admin/administrators/index').update);
	app.put('/admin/administrators/:id/permissions/', require('./views/admin/administrators/index').permissions);
	app.put('/admin/administrators/:id/groups/', require('./views/admin/administrators/index').groups);
	app.put('/admin/administrators/:id/user/', require('./views/admin/administrators/index').linkUser);
	app.delete('/admin/administrators/:id/user/', require('./views/admin/administrators/index').unlinkUser);
	app.delete('/admin/administrators/:id/', require('./views/admin/administrators/index').delete);
	*/
	//admin > admin groups
	/*
	app.get('/admin/admin-groups/', require('./views/admin/admin-groups/index').find);
	app.post('/admin/admin-groups/', require('./views/admin/admin-groups/index').create);
	app.get('/admin/admin-groups/:id/', require('./views/admin/admin-groups/index').read);
	app.put('/admin/admin-groups/:id/', require('./views/admin/admin-groups/index').update);
	app.put('/admin/admin-groups/:id/permissions/', require('./views/admin/admin-groups/index').permissions);
	app.delete('/admin/admin-groups/:id/', require('./views/admin/admin-groups/index').delete);
	//admin > accounts
	app.get('/admin/accounts/', require('./views/admin/accounts/index').find);
	app.post('/admin/accounts/', require('./views/admin/accounts/index').create);
	app.get('/admin/accounts/:id/', require('./views/admin/accounts/index').read);
	app.put('/admin/accounts/:id/', require('./views/admin/accounts/index').update);
	app.put('/admin/accounts/:id/user/', require('./views/admin/accounts/index').linkUser);
	app.delete('/admin/accounts/:id/user/', require('./views/admin/accounts/index').unlinkUser);
	app.post('/admin/accounts/:id/notes/', require('./views/admin/accounts/index').newNote);
	app.post('/admin/accounts/:id/status/', require('./views/admin/accounts/index').newStatus);
	app.delete('/admin/accounts/:id/', require('./views/admin/accounts/index').delete);
	*/
	//admin > categories
	//app.get('/admin/categories/', require('./views/admin/categories/index').find);
	//app.post('/admin/categories/', require('./views/admin/categories/index').create);
	//app.get('/admin/categories/:id/', require('./views/admin/categories/index').read);
	//app.put('/admin/categories/:id/', require('./views/admin/categories/index').update);
	//app.delete('/admin/categories/:id/', require('./views/admin/categories/index').delete);
	
	//admin > search
	//app.get('/admin/search/', require('./views/admin/search/index').find);

	//route not found
	//app.all('*', require('./views/http/index').http404);
};