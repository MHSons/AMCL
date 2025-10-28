document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('labForm');
    const dataList = document.getElementById('dataList');
    const clearBtn = document.getElementById('clearData');

    // Load saved data
    function loadData() {
        dataList.innerHTML = '';
        const data = JSON.parse(localStorage.getItem('labData')) || [];
        data.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `Sample ID: ${item.sampleId} - Result: ${item.result}`;
            dataList.appendChild(li);
        });
    }

    // Save data
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sampleId = document.getElementById('sampleId').value;
        const result = document.getElementById('result').value;
        const data = JSON.parse(localStorage.getItem('labData')) || [];
        data.push({ sampleId, result });
        localStorage.setItem('labData', JSON.stringify(data));
        form.reset();
        loadData();
    });

    // Clear data
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('labData');
        loadData();
    });

    loadData(); // Initial load
});
