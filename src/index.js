let express = require('express');
let handlebars = require('express-handlebars');


let app = express();
app.use(express.static('publick'));
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine','hbs');
app.set('views', './src/views')

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(3000, () => console.log(`App is listening on port 5000`))