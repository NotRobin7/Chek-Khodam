document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    const categories = ['cicak bodas', 'maung pargoy', 'kadal buntung', 'gajah terbang', 'biawak', 'sapi qurban', 'unta bongkok', 'ular cabe', 'bebek ireng', 'buaya gepeng', 'banteng merah', 'henceut bereum', 'ceker babat'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Nama: ${nameInput} <br/> Khodam: ${randomCategory}`;
});