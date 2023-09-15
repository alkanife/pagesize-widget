// 1.0.0 - https://github.com/alkanife/pagesize-widget

let widget = document.getElementById('pagesize-widget');

if (widget === null) {
    widget = document.createElement('div');
    widget.id = 'pagesize-widget';
    widget.style.position = 'fixed';
    widget.style.zIndex = '100000';
    widget.style.background = 'white';
    widget.style.top = '50px';
    widget.style.left = '50px';
    widget.style.padding = '5px'
    widget.style.border = 'black 1px solid';
    widget.style.color = 'black';
    widget.style.fontFamily = 'Arial, serif';
    widget.style.overflow = 'hidden';
    widget.style.userSelect = 'none';
    widget.onclick = () => widget.remove();

    document.body.insertBefore(widget, document.body.firstChild);
}

update();
window.addEventListener('resize', () => update());

function update() {
    if (widget === null)
        return;

    let breakpoint = 'xs';

    if (window.innerWidth >= 576)
        breakpoint = 'sm';

    if (window.innerWidth >= 768)
        breakpoint = 'md';

    if (window.innerWidth >= 992)
        breakpoint = 'lg';

    if (window.innerWidth >= 1200)
        breakpoint = 'xl';

    if (window.innerWidth >= 1400)
        breakpoint = 'xxl';

        widget.innerHTML = `Width: ${window.innerWidth} px<br>Height: ${window.innerHeight} px<br>Bootstrap: <b>${breakpoint}</b>`;
}