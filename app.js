const express = require('express')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const livereload = require('livereload')
const livereloadMiddleware = require('connect-livereload')

const hotServer = livereload.createServer({
	exts: ['hbs', 'css', 'js'],
	debug: false
})

hotServer.watch(__dirname)

const app = express()
app.use(livereloadMiddleware())

app.engine('hbs', expressHbs(
	{
		layoutsDir: 'layouts',
		defaultLayout: 'main',
		extname: 'hbs'
	}
))

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('static'))

app.get('/', function (request, response) {
	response.render('index', {
		title: 'Главная страница'
	})
})

app.get('/index.html', function (request, response) {
	response.render('index', {
		title: 'Главная страница'
	})
})

app.get('/compare.html', function (request, response) {
	response.render('compare', {
		title: 'Сравнение'
	})
})

app.get('/types.html', function (request, response) {
	response.render('types', {
		title: 'Типы'
	})
})

app.get('/history.html', function (request, response) {
	response.render('history', {
		title: 'История появления'
	})
})

app.get('/pros-cons.html', function (request, response) {
	response.render('pros-cons', {
		title: 'Плюсы и минусы'
	})
})

app.get('/videos.html', function (request, response) {
	response.render('videos', {
		title: 'Видеоматериалы'
	})
})

app.listen(8080)