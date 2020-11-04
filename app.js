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

app.listen(8080)