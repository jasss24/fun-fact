const facts = [
    "I play cricket and enjoy team sports.",
    "I am actively involved in trading in financial markets.",
    "I love riding bikes and exploring.",
    "I am a one-side lover.",
    "I am ambitious and working towards being successful."
];

const factsContainer = document.getElementById('factsContainer');

facts.forEach((fact, index) => {
    const factDiv = document.createElement('div');
    factDiv.className = 'fact';
    factDiv.textContent = fact;
    factsContainer.appendChild(factDiv);
    
    setTimeout(() => {
        factDiv.classList.add('visible');
    }, index * 500);
});
