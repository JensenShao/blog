module.exports = function(app){
	app.get('/',function(req,res,next){
		res.render('index',{title:'Home'});
	});
	
	app.get('/reg',function(req,res,next){
		res.render('reg',{title:'Register'});
	});
	
	app.post('/reg',function(req,res,next){
	});
	
	app.get('/login',function(req,res,next){
		res.render('login',{title:'Login'});
	});
	
	app.post('/login',function(req,res,next){
	});
	
	app.get('/post',function(req,res,next){
		res.render('post',{title:'Post'});
	});
	
	app.post('/post',function(req,res,next){});
	
	app.get('/logout',function(req,res,next){
		res.render('logout',{title:'Logout'});
	});
	
	app.get('/hello',function(req,res,next){
		res.send('Hello world!');
	});
	
};
