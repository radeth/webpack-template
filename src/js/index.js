import '../css/style.scss';
import './../home.html'
import 'jquery'
import { RandomGenerator } from './RadndomGenerator';

$('#randomInt').on('click',()=>{
    $('#outputParagraph').text(RandomGenerator.randomInteger())
})
$('#randomRange').on('click',()=>{
    $('#outputParagraph').text(RandomGenerator.randomRange(1, 500))
});



