// Simulação de dados dos amigos
const friends = [
    'friend1.jpg',
    'friend2.jpg',
    'friend3.jpg',
    'friend4.jpg',
    'friend5.jpg'
  ];
  
  // Função para exibir as fotos dos amigos
  function displayFriends() {
    const friendsList = document.querySelector('.friends-list');
    friendsList.innerHTML = '';
    friends.forEach(friend => {
      const friendElement = document.createElement('div');
      friendElement.classList.add('friend');
      friendElement.style.backgroundImage = `url(${friend})`;
      friendsList.appendChild(friendElement);
    });
  }
  
  // Chamando a função para exibir os amigos
  displayFriends();
  