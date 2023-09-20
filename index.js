export default function getNumberName (num = 0, vars = ['товар', 'товара', 'товаров'], full) {
    let str = '' + num;
    if (num >= 100) {
        num = parseInt(str.substr(-2));
    }
    if (num > 20) {
        num = parseInt(str.substr(-1));
    }
    let w ; 
    if (num == 1) {
        w = vars[0];
    } else if (num < 5 && num > 0) {
        w = vars[1];
    } else {
        w = vars[2] || vars[1];
    }
    if (full) {
        w = str + ' ' + w  ;
    }
    return w;
}