function MenuItem(href, title, haveSub) {
    this.href = href;
    this.title = title;
    (haveSub == undefined || haveSub == []) ? this.haveSub = [] : this.haveSub = haveSub;
}

MenuItem.prototype.render = function () {
    // console.log(this.haveSub);
    if (this.haveSub == []) {
        return '<li><a href="' + this.href + '">' + this.title + '</a></li>';
    } else {
        return '<li>' + this.title;
    }

};