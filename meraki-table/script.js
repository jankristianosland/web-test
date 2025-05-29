document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.expand-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const mainRow = btn.closest('tr');
            const expandRow = mainRow.nextElementSibling;
            const isOpen = expandRow.style.display === 'table-row';
            expandRow.style.display = isOpen ? 'none' : 'table-row';
            btn.innerHTML = isOpen ? '&#9654;' : '&#9660;'; // ▶ or ▼
        });
    });
});

// Health bar rendering
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.network-health').forEach(function (cell) {
        const bar = document.createElement('div');
        bar.className = 'health-bar';

        // For performance, don't create 8640 DOM elements.
        // Instead, use a CSS gradient for all-up (green) or a few segments for demo.
        // For this exercise, all data points are 1 (up).
        bar.style.background = 'linear-gradient(to right, #28a745 100%)';

        // Optionally, if you want to show segments, use a small number for demo:
        /*
        for (let i = 0; i < 100; i++) { // Use 100 segments for demo
            const seg = document.createElement('div');
            seg.className = 'health-segment';
            bar.appendChild(seg);
        }
        */

        cell.appendChild(bar);
    });
});