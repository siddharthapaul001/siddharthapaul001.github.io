class Shape{
    constructor(){
        this._style = {
            "fill": "#000",
            "stroke": "#000",
            "stroke-width": "2"
        };
    }

    getElem(){
        return {};
    }

    getStyleString(){
        let style = "";
        for(let attrib in this._style){
            style += attrib + ":" + this._style[attrib] + ";";
        }
        return style;
    }

    setFillColor(color){
        this._style["fill"] = color;
    }

    setStrokeColor(color){
        this._style["stroke"] = color;
    }

    toHtmlString(){
        let attrs = getElem(), htmlStr = "<" + this.toString();
        for(let attrib in attrs){
            htmlStr += ' ' + attrib + '="' + attrs[attrib] + '"';
        }

        htmlStr += "></" + this.toString() + ">";
        return this.toString ? htmlStr : '';
    }

    toString(){
        return "";
    }

};

class Rect extends Shape{
    constructor(x, y, height, width, shiftFactor, scaleFactor){
        super();
        this.x = +x || 0;
        this.y = +y || 0;
        this.height = +height || 10;
        this.width = +width || 10;
        this.shiftFactor = +shiftFactor || 10;
        this.scaleFactor = +scaleFactor || 2;
    }

    getElem(){
        return{
            x: this.x,
            y: this.y,
            height: this.height,
            width: this.width
        };
    }

    scaleIn(){
        this.height *= this.scaleFactor;
        this.width *= this.scaleFactor;
    }

    scaleOut(){
        this.height /= this.scaleFactor;
        this.width /= this.scaleFactor;
    }

    scale(){
        this.scaleIn();
    }

    pushRight(){
        this.x += this.shiftFactor;
    }

    pushLeft(){
        this.x -= this.shiftFactor;
    }

    pushDown(){
        this.y += this.shiftFactor;
    }

    pushTop(){
        this.y -= this.shiftFactor;
    }

    setProps(x, y, height, width, shiftFactor, scaleFactor){
        [this.x, this.y, this.height, this.width, this.shiftFactor, this.scaleFactor] = [+x || this.x, +y || this.y, +height || this.height, +width || this.width, +shiftFactor || this.shiftFactor, +scaleFactor || this.scaleFactor];
    }

    toString(){
        return "rect";
    }
}

class Ellipse extends Shape{
    constructor(cx, cy, height, width, shiftFactor, scaleFactor){
        super();
        this.x = +cx || 0;
        this.y = +cy || 0;
        this.height = +height || 10;
        this.width = +width || 20;
        this.shiftFactor = +shiftFactor || 10;
        this.scaleFactor = +scaleFactor || 2;
    }

    getElem(){
        return{
            cx: this.x,
            cy: this.y,
            ry: this.height,
            rx: this.width
        };
    }

    scaleIn(){
        this.height *= this.scaleFactor;
        this.width *= this.scaleFactor;
    }

    scaleOut(){
        this.height /= this.scaleFactor;
        this.width /= this.scaleFactor;
    }

    scale(){
        this.scaleIn();
    }

    pushRight(){
        this.x += this.shiftFactor;
    }

    pushLeft(){
        this.x -= this.shiftFactor;
    }

    pushDown(){
        this.y += this.shiftFactor;
    }

    pushTop(){
        this.y -= this.shiftFactor;
    }

    setProps(cx, cy, height, width, shiftFactor, scaleFactor){
        [this.x, this.y, this.height, this.width, this.shiftFactor, this.scaleFactor] = [+cx || this.x, +cy || this.y, +height || this.height, +width || this.width, +shiftFactor || this.shiftFactor, +scaleFactor || this.scaleFactor];
    }

    toString(){
        return "ellipse";
    }
}

class Circle extends Shape{
    constructor(cx, cy, radius, shiftFactor, scaleFactor){
        super();
        this.x = +cx || 0;
        this.y = +cy || 0;
        this.radius = +radius || 10;
        this.shiftFactor = +shiftFactor || 10;
        this.scaleFactor = +scaleFactor || 2;
    }

    getElem(){
        return{
            cx: this.x,
            cy: this.y,
            r: this.radius
        };
    }

    scaleIn(){
        this.radius *= this.scaleFactor;
    }

    scaleOut(){
        this.radius /= this.scaleFactor;
    }

    scale(){
        this.scaleIn();
    }

    pushRight(){
        this.x += this.shiftFactor;
    }

    pushLeft(){
        this.x -= this.shiftFactor;
    }

    pushDown(){
        this.y += this.shiftFactor;
    }

    pushTop(){
        this.y -= this.shiftFactor;
    }

    setProps(cx, cy, radius, shiftFactor, scaleFactor){
        [this.x, this.y, this.radius, this.shiftFactor, this.scaleFactor] = [+cx || this.x, +cy || this.y, +radius || this.radius, +shiftFactor || this.shiftFactor, +scaleFactor || this.scaleFactor];
    }

    toString(){
        return "circle";
    }
}