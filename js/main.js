function calculatePositions(parentWidth, parentHeight){
    let side = parentWidth < parentHeight ?  parentWidth : parentHeight;
    let str = "M" + ((side + (parentWidth - side)) / 2) + "," + (parentHeight - side) / 2;
    str += " l" + (0.2 * side) + "," + (0.3 * side);
    str += " h" + (0.3 * side);
    str += " l-" + (0.2 * side) + "," + (0.3 * side);
    str += " l" + (0.2 * side) + "," + (0.4 * side);
    str += " l-" + (0.5 * side) + ",-" + (0.3 * side);
    str += " l-" + (0.5 * side) + "," + (0.3 * side);
    str += " l" + (0.2 * side) + ",-" + (0.4 * side);
    str += " l-" + (0.2 * side) + ",-" + (0.3 * side);
    str += " h" + (0.3 * side);
    str += " z"; 
    return str;
}

function createStar(parentElement, width, height, styles){
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    star = document.createElementNS("http://www.w3.org/2000/svg", "path"),
    styleStr = '';
    svg.setAttribute("height", height);
    svg.setAttribute("width", width);
    star.setAttribute("d", calculatePositions(width, height));
    for(let attrib in styles){
        styleStr += attrib + ':' + styles[attrib] + ';';
    }
    star.setAttribute("style", styleStr);
    svg.appendChild(star);
    parentElement.appendChild(svg);
}