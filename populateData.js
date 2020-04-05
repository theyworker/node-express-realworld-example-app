var axios = require('axios')

const names = ['wiggly',
'feigned',
'frequent',
'giant',
'slimy',
'cynical',
'nice',
'discreet',
'shaggy',
'sophisticated',
'four',
'ajar',
'weak',
'breakable',
'sad',
'adamant',
'gainful',
'blue-eyed',
'instinctive',
'rough',
'macabre',
'accurate',
'gaping',
'ancient',
'uneven',
'curly',
'suspicious',
'alluring',
'latter',
'smart',
'lazy',
'obvious',
'rampant',
'deeply',
'ultra',
'loose',
'lively',
'eminent',
'pathetic',
'efficient',
'busy',
'ignorant',
'selective',
'irate',
'adaptable',
'fluttering',
'ill-informed',
'flashy',
'unlikely',
'enthusiastic']

const randomColours = ['White',
'Yellow',
'Blue',
'Red',
'Green',
'Black',
'Brown',
'Azure',
'Ivory',
'Teal',
'Silver',
'Purple',
'Navy blue',
'Pea green',
'Gray',
'Orange',
'Maroon',
'Charcoal',
'Aquamarine',
'Coral',
'Fuchsia',
'Wheat',
'Lime',
'Crimson',
'Khaki',
'Hot pink',
'Magenta',
'Olden',
'Plum',
'Olive',
'Cyan']

const listStyles = ["colourful", "black and white", "minimalist", "drip paint", "splatter paint"]

const descriptions = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur lectus eu urna congue, ac convallis orci vulputate. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc dictum fringilla lacus vitae porta. Vestibulum egestas nec ante at dignissim. Vestibulum finibus, augue sed tristique placerat, lorem purus consectetur nunc, eget vestibulum sem neque ac odio. Integer a ex ac leo volutpat efficitur non aliquam libero. Maecenas pulvinar justo ut bibendum ultricies. Vestibulum mattis, dui non gravida consectetur, diam est ullamcorper est, ac hendrerit nibh augue at felis. Maecenas dignissim ligula sit amet mi accumsan posuere. Maecenas at.'.split(' ')
const randomprice = () => Math.ceil(Math.random()*(3000-600)+600)

const getRandomColours = () => {
    var a = Math.ceil(Math.random()*3)
    var b = []
    for (let index = 0; index < a; index++) {
        b[index] = randomColours[Math.floor(Math.random()*randomColours.length)].toLowerCase()
    }
    return b;
}

const randomTags = () => {
    const t = ['dark', 'gift', 'home', 'work', 'glamour', 'basic']
    const a = Math.floor(Math.random()*3)
    var b = []
    for (let index = 0; index < a; index++) {
        b[index] = t[Math.floor(Math.random()*t.length)].toLowerCase()
        
    }
    return b
}

const randomMaterial = () => {
    const t = ["clay", "cement","plastic","ceramic", "wood"]
    
    return t[Math.ceil(Math.random()*t.length)]
    
}


async function addPoo(){
    for (let index = 0; index < 200; index++) {
        axios.post('http://localhost:3000/api/pot',{
            "pot":  {
                "name": `${names[Math.floor(Math.random() * names.length)]}`,
                "description" : `${descriptions[Math.floor(Math.random()*descriptions.length)]}`,
                "price" : randomprice(),
                "discountPrice" : 0,
                "colours" : getRandomColours(),
                "styleOfPainting" : [listStyles[Math.round(Math.random()*listStyles.length)]],
                "placementSuggestions" : ["kitchen counter"],
                "tags" : randomTags(),
                "size" : Math.floor(Math.random()*5),
                "material" : randomMaterial(),
                "stock": 5
            }
        })  
    }


}

addPoo()

