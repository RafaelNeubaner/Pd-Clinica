Chart.register(ChartDataLabels);

function buildGraph(elementId, labels, data) {

    const ctx = document.getElementById(elementId).querySelector('.graph').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: undefined,
                data: data,
                borderWidth: 0,
                showLines: false,
                backgroundColor: '#415a77'
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: '#ffffff',
                    anchor: 'end', 
                    align: 'start', 
                    offset: 5,
                    font: {
                        weight: 'bold',
                        size: 12
                    },
                    formatter: (value) => value
                },
            },
            scales: {
                x: {
                    display: false,
                    grid: { display: false }
                },
                y: {
                    display: false,
                    grid: { display: false }
                }
            },
            maintainAspectRatio: true
        }
    });
}

function buildChart(chartId, labels, data, countNew, countRecurring) {
    const chartRow = document.getElementById("chart-row");
    const fragment = document.getElementById("chartTemplate").content.cloneNode(true);
    const chart = fragment.querySelector('.chart');
    chart.id = chartId;
    chart.querySelector('.total-count').textContent = countNew + countRecurring;
    chart.querySelector('.new-count').textContent = countNew;
    chart.querySelector('.recurring-count').textContent = countRecurring;
    chartRow.appendChild(chart);
    buildGraph(chartId, labels, data);
}

buildChart('chartPacientes', ['Seg', 'Ter', 'Qua', 'Qui'], [74, 102, 89, 68], 32, 36);
buildChart('pacientesSemanal', ['05/01', '12/01', '19/01', '26/01'], [74, 102, 89, 68], 193, 179);