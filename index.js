async function fetchCurrencyData(currency) {
    const baseCurrency = 'USD';
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const url = `https://api.frankfurter.app/${startDate}..${endDate}?from=${baseCurrency}&to=${currency}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  }

  async function renderChart(currency, containerId) {
    const container = document.getElementById(containerId);
    const canvas = document.createElement('canvas');
    container.appendChild(canvas); 

    const ctx = canvas.getContext('2d');
    const currencyData = await fetchCurrencyData(currency);
    const labels = Object.keys(currencyData.rates);
    const rates = labels.map(label => currencyData.rates[label][currency]);

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: currency,
                data: rates,
                fill: false,
                borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16), 
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Exchange Rate'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            color: 'white' 
                        }
                    }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            elements: {
                point: {
                    backgroundColor: 'rgba(255, 255, 255, 1)' 
                }
            },
            backgroundColor: 'rgb(255, 255, 255)'
        }
    });
}

renderChart('EUR', 'eurChartContainer');
renderChart('GBP', 'gbpChartContainer');
renderChart('JPY', 'jpyChartContainer');
renderChart('CAD', 'cadChartContainer');
renderChart('AUD', 'audChartContainer');
renderChart('CHF', 'chfChartContainer');


//Swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
});
  


