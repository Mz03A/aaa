// Static cryptocurrency data from the screenshot
const coins = [
  { name: "TON Coin", code: "TON", price: "$5.02", supply: "50,475,585,28 TON" },
  { name: "Cardano", code: "ADA", price: "$0.335395", supply: "35,983,067,755.528 ADA" },
  { name: "Wrapped Bitcoin", code: "WBTC", price: "$68,629.68", supply: "154,782.19388146 WBTC" },
  { name: "Avalanche", code: "AVAX", price: "$25.73", supply: "4,442,064,974,943 AVAX" },
  { name: "Shiba Inu", code: "SHIB", price: "$0.000017", supply: "5.895191039625E+14 SHIB" },
  { name: "WETH", code: "WETH", price: "$2,509.65", supply: "337,5317.5926489 WETH" },
  { name: "Bitcoin Cash", code: "BCH", price: "$362.70", supply: "19,776,766 BCH" },
  { name: "ChainLink", code: "LINK", price: "$10.90", supply: "1,000,000,000 LINK" },
  { name: "Cryptonex", code: "CNX", price: "$35.09", supply: "177,023,163 CNX" },
  { name: "Edelcoin", code: "EDLC", price: "$1.07", supply: "5,516,931,200 EDLC" }
];

let currentPage = 1;
const itemsPerPage = 10;

document.addEventListener("DOMContentLoaded", () => {
  displayPage(currentPage);
  document.getElementById("prev-page").addEventListener("click", prevPage);
  document.getElementById("next-page").addEventListener("click", nextPage);
});

function displayPage(page) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = coins.slice(start, end);

  pageItems.forEach((coin) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${coin.name}</td>
      <td>${coin.code}</td>
      <td>${coin.price}</td>
      <td>${coin.supply}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("page-info").textContent = `Page ${page} of ${Math.ceil(coins.length / itemsPerPage)}`;

  // Disable buttons if at the beginning or end of pagination
  document.getElementById("prev-page").disabled = page === 1;
  document.getElementById("next-page").disabled = page === Math.ceil(coins.length / itemsPerPage);
}

function nextPage() {
  if (currentPage < Math.ceil(coins.length / itemsPerPage)) {
    currentPage++;
    displayPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
}
