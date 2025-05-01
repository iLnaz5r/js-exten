const mode = document.getElementById('mode');
const sun = document.getElementById('sun')
const types  = document.querySelector('.type1')
const types2  = document.querySelector('.type2')
const types3  = document.querySelector('.type3')
const types4  = document.querySelector('.type4')
const types5  = document.querySelector('.type5')
const types6  = document.querySelector('.type6')
const types7 = document.querySelector('.type7')
const types8  = document.querySelector('.type8')
const mainText = document.querySelector('.maintext')
const insideText = document.querySelector('.type1-text')
const insideText2 = document.querySelector('.type2-text')
const insideText3 = document.querySelector('.type3-text')
const insideText4 = document.querySelector('.type4-text')
const insideText5 = document.querySelector('.type5-text')
const insideText6 = document.querySelector('.type6-text')
const insideText7 = document.querySelector('.type7-text')
const insideText8 = document.querySelector('.type8-text')
const paragraph = document.querySelector('.type1-parag')
const paragraph2 = document.querySelector('.type2-parag')
const paragraph3 = document.querySelector('.type3-parag')
const paragraph4 = document.querySelector('.type4-parag')
const paragraph5 = document.querySelector('.type5-parag')
const paragraph6 = document.querySelector('.type6-parag')
const paragraph7 = document.querySelector('.type7-parag')
const paragraph8 = document.querySelector('.type8-parag')

mode.addEventListener('click', function(){
    mode.style.display = 'none'
    sun.style.display = 'block'
    document.body.style.backgroundColor = "#000020"
    types.style.backgroundColor = '#778BA5'
    types2.style.backgroundColor = '#778BA5'
    types3.style.backgroundColor = '#778BA5'
    types4.style.backgroundColor = '#778BA5'
    types5.style.backgroundColor = '#778BA5'
    types6.style.backgroundColor = '#778BA5'
    types7.style.backgroundColor = '#778BA5'
    types8.style.backgroundColor = '#778BA5'
    mainText.style.color = 'white'
    insideText.style.color = 'white'
    insideText2.style.color = 'white'
    insideText3.style.color = 'white'
    insideText4.style.color = 'white'
    insideText5.style.color = 'white'
    insideText6.style.color = 'white'
    insideText7.style.color = 'white'
    insideText8.style.color = 'white'
    paragraph.style.color = 'white'
    paragraph2.style.color = 'white'
    paragraph3.style.color = 'white'
    paragraph4.style.color = 'white'
    paragraph5.style.color = 'white'
    paragraph6.style.color = 'white'
    paragraph7.style.color = 'white'
    paragraph8.style.color = 'white'
})
sun.addEventListener('click', function(){
    mode.style.display = 'block'
    sun.style.display = 'none'
    document.body.style.backgroundColor = 'aliceblue'
    types.style.backgroundColor = 'white'
    types2.style.backgroundColor = 'white'
    types3.style.backgroundColor = 'white'
    types4.style.backgroundColor = 'white'
    types5.style.backgroundColor = 'white'
    types6.style.backgroundColor = 'white'
    types7.style.backgroundColor = 'white'
    types8.style.backgroundColor = 'white'
    mainText.style.color = '#000020'
    insideText.style.color = '#000020'
    insideText2.style.color = '#000020'
    insideText3.style.color = '#000020'
    insideText4.style.color = '#000020'
    insideText5.style.color = '#000020'
    insideText6.style.color = '#000020'
    insideText7.style.color = '#000020'
    insideText8.style.color = '#000020'
    paragraph.style.color = 'gray'
    paragraph2.style.color = 'gray'
    paragraph3.style.color = 'gray'
    paragraph4.style.color = 'gray'
    paragraph5.style.color = 'gray'
    paragraph6.style.color = 'gray'
    paragraph7.style.color = 'gray'
    paragraph8.style.color = 'gray'
})

document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.nav2').classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('burger-active');
});


const mediaQuery = window.matchMedia('(max-width:450px)');
function handleScreenChange(e){
    if (e.matches){
        document.querySelector('.head').style.display = 'flex'
        document.body.style.display = "column"
        document.querySelector('.container').style.padding = "0px"
        document.body.style.alignItems = "center"
        document.querySelector('.first-text').style.display = 'flex'
        document.querySelector('.first-text').style.flexDirection = 'column'
        document.querySelector('.inside').style.gap = '35px'
        document.querySelector('.inside').style.justifyContent = 'center'
        document.querySelector('.types').style.display = 'flex'
        document.querySelector('.types').style.flexDirection = 'column'
    } else{
        document.querySelector('.head').style.display = ''
        document.body.style.display = ''
        document.querySelector('.container').style.padding = '70px'
        document.body.style.alignItems = ''
        document.querySelector('.first-text').style.display = 'flex'
        document.querySelector('.first-text').style.flexDirection = 'row'
        document.querySelector('.inside').style.gap = ''
        document.querySelector('.inside').style.justifyContent = ''
        document.querySelector('.types').style.display = 'grid'
        document.querySelector('.types').style.flexDirection = ''
    }
}
handleScreenChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenChange);