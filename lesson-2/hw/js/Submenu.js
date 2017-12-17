function Submenu(parentId, mySubClass, mySubItems) {
    Menu.call(this);

    this.id = parentId + '_sub';
    this.class = mySubClass;
    this.items = mySubItems;
}

Submenu.prototype = Object.create(Menu.prototype);
Submenu.prototype.constructor = Submenu;

Submenu.prototype.render = function() {
    var result = '<ul class="' + this.class + '">';
    for (var i = 0; i < this.items.length; i++)
    {
        result += this.items[i].render();
    }
    result += '</ul>';

    this.htmlCode = result; //Сохраняем HTML-код меню
    return result;
}