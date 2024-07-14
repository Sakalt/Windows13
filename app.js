document.addEventListener('DOMContentLoaded', () => {
    const windows = document.querySelectorAll('.window');
    const closeButtons = document.querySelectorAll('.close-button');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const marketItems = document.querySelectorAll('.market-item');

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.window').style.display = 'none';
        });
    });

    windows.forEach(window => {
        const titleBar = window.querySelector('.title-bar');
        titleBar.addEventListener('mousedown', (e) => {
            const windowElem = e.target.closest('.window');
            const offsetX = e.clientX - windowElem.offsetLeft;
            const offsetY = e.clientY - windowElem.offsetTop;

            function onMouseMove(event) {
                windowElem.style.left = event.clientX - offsetX + 'px';
                windowElem.style.top = event.clientY - offsetY + 'px';
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', onMouseMove);
            }, { once: true });
        });
    });

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const app = item.getAttribute('data-app');
            const windowElem = document.querySelector(`.window[data-app="${app}"]`);
            if (windowElem) {
                windowElem.style.display = 'block';
            }
        });
    });

    marketItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(item.textContent + ' installed');
        });
    });

    function updateClock() {
        const clockElement = document.getElementById('clock-time');
        if (clockElement) {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});
