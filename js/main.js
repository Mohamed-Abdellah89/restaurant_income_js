const vat = .14;
const service = .1;
let day_total = 0, day_vat = 0, day_service = 0;

const calc = function (){
    const table_name = table.value;
    const table_order = +order.value;
    const table_vat = table_order * vat;
    const table_service = table_order * service;
    const table_total = table_order + table_vat + table_service;

    day_total += table_total;
    day_vat += table_vat;
    day_service += table_service;

    total_circle.innerText = day_total.toFixed(2);
    vat_circle.innerText = day_vat.toFixed(2);
    service_circle.innerText = day_service.toFixed(2);

    tbody.innerHTML += `<tr>
        <td>${table_name}</td>
        <td>${table_order.toFixed(2)}</td>
        <td>${table_vat.toFixed(2)}</td>
        <td>${table_service.toFixed(2)}</td>
        <td>${table_total.toFixed(2)}</td>
    </tr>`;

}