import Head from './head.js';
import Content from './content.js';
import Image from './images.js';
import Button from './button.js';
import Es6 from './es6.js';
import unwrap from './unwrap.js';
import Arrays from './Arrays.js';
import _ from 'lodash';
import '../../common/css/index.styl'

new Head();
new Content();
new Image();
new Button();
// new Es6();
// new unwrap();
new Arrays();
console.log(this,`this`);
console.log(window,`window`);
console.log(_.join(['a','b','c'],'****'),`loadsh`)