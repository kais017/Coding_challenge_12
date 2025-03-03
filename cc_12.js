
// Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboardcont1 = document.getElementById('dashboard');
const dashboardcont2 = document.querySelector('#dashboard');
// select dashboard container

const revenueCard = document.createElement("div");
// creates element for metric card

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
// assigns a class and an id to the element

revenueCard.innerHTML = "<h3>Revenue</h3> <p>$0</p>";
// populating the card with a title and placeholder value

dashboardcont1.appendChild(revenueCard);
// adds metric card to dashboard container

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll('.metric-card');
// selecting all metric card elements for dashboard container

Array.from(metricCards).forEach(card => {
    card.innerHTML += "Updated";
    card.style.backgroundColor = "violet";
});
