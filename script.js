const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    alert(`Bem-vindo, ${usuario}!`);
  });
}

const pets = [
  {
    nome: "Ace",
    local: "Petz Alto da Boa Vista, SAO PAULO, SP",
    ong: "ASSOCIACAO DE PROTECAO MEU AMIGO FOCINHO",
    imagem: "https://static.petz.com.br/adocao/images/pets/111646/7c8ef671-331e-4c04-9583-05e47c52f308.jpeg"
  },
  {
    nome: "AIME",
    local: "Petz Tamboré, BARUERI, SP",
    ong: "ORGANIZAÇÃO DE AMPARO ANIMAL SOS PET ALPHA",
    imagem: "https://static.petz.com.br/adocao/images/pets/111707/372c1f23-7de0-4969-9616-c87a3820fc4c.jpeg"
  },
  {
    nome: "Alan",
    local: "Petz Congonhas, SAO PAULO, SP",
    ong: "ASSOC PAULISTA DE AUX AOS ANIMAIS APA",
    imagem: "https://static.petz.com.br/adocao/images/pets/111721/44501c25-f144-46a9-92ef-4fcdcfb2a5a2.jpeg"
  },
  {
    nome: "ALLAN",
    local: "Petz Limão, SAO PAULO, SP",
    ong: "ORGANIZAÇÃO DE AMPARO ANIMAL SOS PET ALPHA",
    
  }
];

const cardsContainer = document.querySelector('.cards');
if (cardsContainer) {
  cardsContainer.innerHTML = pets.map(pet => `
    <div class="card">
      <img src="${pet.imagem}" alt="${pet.nome}">
      <h4>${pet.ong}</h4>
      <h3>${pet.nome}</h3>
      <p>${pet.local}</p>
      <button>Quero adotar</button>
    </div>
  `).join('');
}
  