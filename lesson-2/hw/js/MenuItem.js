function MenuItem(href, title, haveSub) {
    this.href = href;
    this.title = title;
    (haveSub == undefined) ? this.haveSub = [] : this.haveSub = haveSub;
}

MenuItem.prototype.render = function () {
    // console.log(this.haveSub);
    if (this.haveSub.length == 0) {
        return '<li><a href="' + this.href + '">' + this.title + '</a></li>';
    } else {
        return '<li class="has-submenu"><a href="#">' + this.title + '</a>';
    }

};