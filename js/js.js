
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();

        // 編輯的 Modal 事件
        $('#editModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
            var title = button.data('title') // 使用 data-* 來取得特定內容

            var modal = $(this)
            modal.find('.modal-title').text(title) // 寫入資料
        });

        $('#removeModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
            var title = button.data('title') // 使用 data-* 來取得特定內容

            var modal = $(this)
            modal.find('.modal-title').text('確認' + title) // 寫入資料
        })
    });


    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: '彩妆销量对比'
            }],
            labels: [
                "面部",
                "美妆工具",
                "眼部",
                "其他",
                "唇部"
            ]
        },
        options: {
            responsive: true
        }
    };

    // bar
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var colors = Chart.helpers.color;
    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: '非节日销量',
            backgroundColor: colors(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: '节日销量',
            backgroundColor: colors(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]

    };

    window.onload = function () {
        // pie
        document.querySelectorAll('.chart-item').forEach(function (item) {
            config.data.datasets.forEach(function (dataset) {
                dataset.data = dataset.data.map(function () {
                    return randomScalingFactor();
                });
            });
            var ctx = item.getContext("2d");
            window.myPie = new Chart(ctx, config);
        })

        // bar
        var barCtx = document.getElementById("barCanvas").getContext("2d");
        window.myBar = new Chart(barCtx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '节日与非节日销量对比'
                }
            }
        });

    };